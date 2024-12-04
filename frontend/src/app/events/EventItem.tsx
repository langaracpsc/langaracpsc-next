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
    information_link: string | null;
    id: string;
}

interface EventItemProps {
    event: Event;
    past?: boolean;
}

export default function EventItem({ event, past = false }: EventItemProps) {
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

        
        <div key={event.id} className={`w-fit min-w-[280px] z-10 max-w-[600px] md:max-w-[calc(calc(100%-20px)/2)] h-[220px] relative rounded flex-1 border-2 bg-gray transform transition-transform duration-150 {}`}>
            

            <div className='relative z w-full h-full z-[-1]'>
                <Image
                    src={imageUrl}
                    alt={event.event_name}
                    fill={true}
                    sizes="(max-width: 768px) 800px, (max-width: 1200px) 800px, 800px"
                    className='rounded object-cover brightness-[.3]'
                />
            </div>


            <div className="fixed max-w-[220px] min-w-full p-2 z-10 backdrop-brightness-[.5] pointer-events-none top-[0px]">
                <h2 className="text-xl pb-1 pointer-events-auto w-fit">{event.event_name}</h2>
                <p className="text-xs pointer-events-auto w-fit">{event.event_date}</p>
                <p className="text-xs pointer-events-auto w-fit">{event.location}</p>
            </div>

            {event.information_link && (
                <Link 
                href={event.information_link.startsWith('http') ? event.information_link : `https://${event.information_link}`} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    {/* annoyingly this isn't quite centered */}
                    <button className={`w-[100px] p-2 ml-2 mb-2 border-2 rounded ${past ? "bg-green-800" : "bg-green-800"}  text-white relative z-10 bottom-[50px] hover:scale-110 transform transition-transform duration-150`}>
                        Info
                    </button>
                </Link>
            )}

            {event.registration_link && (
                <Link 
                href={event.registration_link.startsWith('http') ? event.registration_link : `https://${event.registration_link}`} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    {/* annoyingly this isn't quite centered */}
                    <button className={`w-[100px] p-2 ml-2 mb-2 border-2 rounded ${past ? "bg-gray-800" : "bg-blue-800"} text-white relative z-10 bottom-[50px] hover:scale-110 transform transition-transform duration-150`}>
                        Register
                    </button>
                </Link>
            )}

        </div>
    );
} 