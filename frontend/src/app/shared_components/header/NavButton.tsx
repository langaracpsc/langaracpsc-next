"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavButtonProps {
    Label: string;
    EndPoint: string;
    Activated: boolean;
    onNavigate: (url: string) => void;
}

export default function NavButton({ Label, EndPoint, Activated, onNavigate }: NavButtonProps) {
    return (
        <Link href={EndPoint} className={`text-xl font-bold mx-2 px-4 py-2 transition duration-300
            "text-lang-orange" hover:scale-110`}>
                {Label}
        </Link>
    );
}
