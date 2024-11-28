import Link from "next/link";

interface ResourceButtonProps {
  link: string;
  text: string;
}

export default function ResourceButton({ text, link }: ResourceButtonProps) {
  return (
    <Link href={link} target="_blank" className="w-fit">
      <button className="bg-lang-orange p-2 border-1 border-white hover:bg-lang-orange rounded text-white h-10 font-bold">
        {text}
      </button>
    </Link>
  );
}

