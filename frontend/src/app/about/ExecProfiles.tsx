import { useEffect, useState } from 'react';
import ExecProfile from './ExecProfile';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { selectProfile } from '../../redux/slices/execProfileSlice';
import { loadProfilesAsync } from '../../redux/thunks/ProfileThunks';

export default function ExecProfiles() {
  const dispatch = useAppDispatch();
  const profiles = useAppSelector(selectProfile);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false); // Prevents multiple fetches

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!hasFetched) {
        setHasFetched(true); // Set flag to true to prevent re-fetching
        // console.log("Fetching profiles...");
        const resultAction = await dispatch(loadProfilesAsync());

        if (loadProfilesAsync.fulfilled.match(resultAction)) {
        //   console.log("Profiles fetched:", resultAction.payload);
        } else {
        //   console.error("Failed to fetch profiles");
        }
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [dispatch, hasFetched]);

  if (loading) {
    return <div>Loading...</div>;
  }

//   console.log("Profiles to display:", profiles);

  return (
    <div className="flex flex-wrap gap-20 justify-center">
      {profiles.map((profile: { ID: string; Position: string[]; Name: string; ImageBuffer?: string; Description: string; }) => (
        <ExecProfile
          key={profile.ID}
          Position={profile.Position}
          ID={profile.ID}
          Name={profile.Name}
          ImageBuffer={
            profile.ImageBuffer
              ? `https://api3.langaracs.ca/executives/image/${profile.ImageBuffer}`
              : 'https://via.placeholder.com/200x200'
          }
          Description={profile.Description}
        />
      ))}
    </div>
  );
}
