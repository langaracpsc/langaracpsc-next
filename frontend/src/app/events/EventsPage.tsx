import EventItem from './EventItem';

interface Event {
    event_name: string;
    event_date: string;
    event_start_date: string;
    event_end_date: string;
    location: string;
    thumbnail: string;
    registration_link: string;
    id: string;
}

async function getEvents() {
    const res = await fetch(`https://api3.langaracs.ca/events/all`, { cache: 'no-store' });
    const events = await res.json();
    return events;
}

export default async function EventsPage() {
    const events: Event[] = await getEvents();
    const currentDate = new Date();

    // Get past events and group by year
    const pastEvents = events
        .filter(event => {
            const dateToCheck = new Date(event.event_end_date || event.event_start_date || event.event_date);
            return dateToCheck <= currentDate && !isNaN(dateToCheck.getTime());
        })
        .reduce((acc: { [key: string]: Event[] }, event) => {
            const dateToUse = event.event_end_date || event.event_start_date || event.event_date;
            const year = new Date(dateToUse).getFullYear();
            if (!acc[year]) acc[year] = [];
            acc[year].push(event);
            return acc;
        }, {});

    // Get upcoming events (including events with invalid dates)
    const upcomingEvents = events.filter(event => {
        const dateToCheck = new Date(event.event_end_date || event.event_start_date || event.event_date);
        return isNaN(dateToCheck.getTime()) || dateToCheck > currentDate;
    });

    // Sort years in descending order
    const sortedYears = Object.keys(pastEvents).sort((a, b) => Number(b) - Number(a));

    return (
        <div className="events-page flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Upcoming Events:</h1>

            <div className="upcoming-events flex flex-wrap gap-5 items-center">
                {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event: Event) => (
                        <EventItem key={event.id} event={event} />
                    ))
                ) : (
                    <p>No upcoming events, check back later!</p>
                )}
            </div>
            
            <h1 className="text-3xl pt-10 font-bold">Past Events:</h1>
            {sortedYears.map(year => (
                <div key={year} className=' items-center'>
                    <h2 className="text-2xl font-bold pt-4 pb-[5px]">{year}:</h2>
                    <div className="past-events flex flex-wrap gap-5">
                        {pastEvents[year].map((event: Event) => (
                            <EventItem key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
