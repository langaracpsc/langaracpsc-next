import ExecProfile from './ExecProfile';

interface Executive {
  student_id: string;
  roles: string[];
  name: string;
  profile_picture: string | null;
  current_status: string;
  bio: string;
  last_term: string;
}

async function getExecutives() {
  const res = await fetch('https://api3.langaracs.ca/executives/all');
  const executives = await res.json();
  return executives;
}

export default async function ExecProfiles() {
  const executives: Executive[] = await getExecutives();

  // Separate executives into current and retired
  const currentExecutives = executives.filter(exec => exec.current_status !== 'Retired');
  const retiredExecutives = executives.filter(exec => exec.current_status === 'Retired');

  // Group current executives by year
  const groupedCurrentExecutives = currentExecutives.reduce((acc: Record<string, Executive[]>, exec) => {
    const year = exec.last_term ? exec.last_term.split(' ')[0] : 'Unknown';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(exec);
    return acc;
  }, {});

  // Group retired executives by year
  const groupedRetiredExecutives = retiredExecutives.reduce((acc: Record<string, Executive[]>, exec) => {
    const year = exec.last_term ? exec.last_term.split(' ')[0] : 'Unknown';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(exec);
    return acc;
  }, {});

  // Sort years for retired executives
  const sortedRetiredYears = Object.keys(groupedRetiredExecutives).sort((a, b) => {
    if (a === 'current') return -1;
    if (b === 'current') return 1;
    return Number(b) - Number(a);
  });

  return (
    <div className="flex flex-wrap flex-row gap-20 justify-center">
      {/* Block for current executives grouped by year */}
      {Object.keys(groupedCurrentExecutives).map(year => (
        <div key={year} className="flex-row gap-5">
          {/* <h2 className="text-2xl font-semibold pb-5">Current Executives</h2> */}
          <div className=" flex flex-wrap flex-row gap-5 justify-center">
            {groupedCurrentExecutives[year].map((exec) => (
              <ExecProfile
                key={exec.student_id}
                ID={exec.student_id}
                Position={exec.roles}
                Name={exec.name}
                ImageBuffer={
                  exec.profile_picture
                    ? `https://${exec.profile_picture}`
                    : '/blank_profile.jpg'
                }
                Description={exec.bio || ''}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Block for retired executives grouped by year */}
      {sortedRetiredYears.map(year => (
        <div key={year} className="mt-10">
          <h2 className="text-2xl font-semibold pb-5">Retired Executives - {year}</h2>
          <div className="flex flex-wrap flex-row gap-5 justify-center">
            {groupedRetiredExecutives[year].map((exec) => (
              <ExecProfile
                key={exec.student_id}
                ID={exec.student_id}
                Position={exec.roles}
                Name={exec.name}
                ImageBuffer={
                  exec.profile_picture
                    ? `https://${exec.profile_picture}`
                    : '/blank_profile.jpg'
                }
                Description={exec.bio || ''}
              />
            ))}
          </div>
        </div>
      ))}
      <br></br>

    
    </div>

    
  );

  
}
