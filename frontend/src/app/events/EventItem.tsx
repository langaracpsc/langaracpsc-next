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
        : '/lcs.png';

    return (
        <div key={event.id} className="rounded  border-2 bg-gray w-64">
            <Image 
                src={imageUrl} 
                alt={event.event_name} 
                width={400}
                height={200}
                className='w-[400px] h-[200px] rounded object-cover'
            />

            <div className="p-2">
                <h2 className="text-xl pb-1">{event.event_name}</h2>
                <p className="text-xs">{event.event_date}</p>
                <p className="text-xs">{event.location}</p>
            </div>

            {event.registration_link && (
                <Link href={event.registration_link} target="_blank" rel="noopener noreferrer">
                    <button className="w-[100px] p-2 ml-2 mb-2 border-2 rounded bg-blue-500 text-white ">
                        Register
                    </button>
                </Link>
            )}
        </div>
    );
} 