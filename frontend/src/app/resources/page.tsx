import ResourcesPage from './ResourcesPage';
import NavBar from "../shared_components/header/NavBar";
import Footer from "../shared_components/footer/Footer";

export default function Page() {
    return (
        <main className="bg-body-gray">
            <NavBar/>
            <div className="p-5 md:px-page_padding_md max-w-[2000px] mx-auto"> 
                
                <ResourcesPage />
            </div>
            <Footer />
        </main>
    );
}