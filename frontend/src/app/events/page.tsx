import EventsPage from './EventsPage';
import NavBar from "../shared_components/header/NavBar";
import Footer from "../shared_components/footer/Footer";

export default function Page() {
    return (
        <main className="bg-body-gray">
            <NavBar/>
            <div className="p-5 md:px-page_padding_md"> 
                
                <EventsPage />
            </div>
            <Footer />
        </main>
    );
}