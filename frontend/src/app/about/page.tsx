import AboutPage from "@/app/about/AboutPage";
import NavBar from "../shared_components/header/NavBar";
import Footer from "../shared_components/footer/Footer";

export default function Page() 
{
    return (
        <main className="grid grid-rows-[10vh_1fr] max-[600px]:grid-rows-[20vh_1fr] bg-body-gray overflow-hidden">
            <NavBar/>
            <div className="p-[20px] pt-5 max-w-6xl mx-auto "> 
                <AboutPage/>
            </div>
            <Footer />
        </main>
    );
}