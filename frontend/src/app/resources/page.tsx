import ResourcesPage from './ResourcesPage';
import NavBar from "../shared_components/header/NavBar";
import Footer from "../shared_components/footer/Footer";

export default function Page() {
    return (
        <main className="grid grid-rows-[10vh_1fr] bg-body-gray  max-[600px]:grid-rows-[20vh_1fr]">
            <NavBar/>
            <div className="p-[20px] pt-5 max-w-6xl mx-auto"> 
                
                <ResourcesPage />
            </div>
            <Footer />
        </main>
    );
}