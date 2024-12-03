import Image from 'next/image';
import Link from 'next/link';

interface Event {
    event_name: string;
    event_date: string;
    event_start_date: string;
    event_end_date: string;
    location: string;
    thumbnail: string | null;
    registration_link: string | null;
    id: string;
}

interface EventItemProps {
    event: Event;
}

export default function EventItem({ event }: EventItemProps) {
    const imageUrl = event.thumbnail 
        ? `https://${event.thumbnail}` 
        : '/LCS.png';

        /*
        Some notes about this component:

        You can do a lot of things on an event page. You can filter, you can highlight events, you can have fancy effects
        I would love to have a view where stuff like the hackathon is 2x or 3x bigger than smaller socials

        even better if this could scale automatically, but its pretty difficult to do with css and even js
        unfortunately i also don't have enough time to implement it to my standards so this is ok
        */


        
    return (
        <div key={event.id} className={`w-fit min-w-[300px] max-w-[500px] h-[220px] relative rounded flex-1 border-2 bg-gray hover:scale-105 transform transition-transform duration-150`}>
            
            <div className='relative z w-full h-full z-[-1]'>
                <Image 
                    src={imageUrl} 
                    alt={event.event_name} 
                    fill={true}
                    sizes="(max-width: 768px) 800px, (max-width: 1200px) 800px, 800px"
                    className='rounded object-cover brightness-[.3]'
                />
            </div>
           

            <div className="max-w-[220px] min-w-full relative p-2 z-10 backdrop-brightness-[.5] pointer-events-none bottom-[220px]">
                <h2 className="text-xl pb-1 pointer-events-auto w-fit">{event.event_name}</h2>
                <p className="text-xs pointer-events-auto w-fit">{event.event_date}</p>
                <p className="text-xs pointer-events-auto w-fit">{event.location}</p>
            </div>

            {event.registration_link && (
                <Link href={event.registration_link} target="_blank" rel="noopener noreferrer">
                    {/* annoyingly this isn't quite centered */}
                    <button className="w-[100px] p-2 ml-2 mb-2 border-2 rounded bg-blue-800 text-white relative z-10 bottom-[135px] hover:scale-110 transform transition-transform duration-150">
                        Register
                    </button>
                </Link>
            )}
        </div>
    );
} 