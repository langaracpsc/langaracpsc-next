"use client";

export default function Page()
{
    if  (typeof(window) !== "undefined")
        window.location.href = "https://events.mlh.io/events/10198-langara-hacks-workshops";
   
    return <div>
        Redirecting. <a href ="https://events.mlh.io/events/10198-langara-hacks-workshops">Click Here</a> if not redirected automatically. 
    </div>;
}