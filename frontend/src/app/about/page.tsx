import {AboutPage} from "@/app/about/AboutPage";
import {NavBar} from "@/app/NavBar";
export default function Page()
{
    return (
        <main className="grid grid-rows-[10vh_100vh] max-[600px]:grid-rows-[20vh_100vh] overflow-hidden">
            <NavBar></NavBar>
            <AboutPage></AboutPage>
        </main>    
    );
}