import ExecProfile from './ExecProfile';

export interface Executive {
  id: string;
  roles: string[];
  name: string;
  pronouns: string;
  profile_picture: string | null;
  current_status: string;
  bio: string;
  first_term: string;
  last_term: string;
  social_media_links: { [key: string]: string }

}

async function getExecutives() {
  const res = await fetch('https://api3.langaracs.ca/executives/all');
  const executives = await res.json();
  return executives['executives'];
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

        <div className="flex-row gap-5">
          <h2 className="text-3xl pb-5">Current Executives:</h2>

          <div className=" flex flex-wrap flex-row gap-5 justify-center">
            {Object.values(groupedCurrentExecutives).flat().map((exec, index) => (
              <ExecProfile key={index} {...exec} />
            ))}
          </div>
        </div>

      {/* Block for retired executives grouped by year */}
      {sortedRetiredYears.map(year => (
        <div key={year} className="mt-40">
          <h2 className="text-2xl pb-5">Retired Executives - {year}:</h2>
          <div className="flex flex-wrap flex-row gap-5 justify-center">
            {groupedRetiredExecutives[year].map((exec) => (
              <ExecProfile {...exec} />
            ))}
          </div>
        </div>
      ))}
      <br></br>


    </div>


  );


}
