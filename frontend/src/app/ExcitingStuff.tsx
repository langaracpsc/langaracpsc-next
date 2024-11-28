import Image from 'next/image';

export default function ExcitingStuff({ title, text, imagePath }: { title: string; text: string; imagePath: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg">{text}</p>
            <div className="relative w-64 h-64">
                <Image 
                    src={imagePath} 
                    layout="fill" 
                    objectFit="cover" 
                    alt={title} 
                />
            </div>
        </div>
    );
}

