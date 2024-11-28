import { Link } from "lucide-react"
import ResourceButton from "./resourceButton";

export default async function ResourcesPage() {
    
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold pt-4">Resources</h1>

            <p>The Langara Computer Science Club has a list of resources gathered by students for students.</p>

            <br></br>
            <h2 className="text-2xl font-semibold pt-4">SFU & UBC Transfer Guides</h2>
            <p>Over the years, several Langara alumni have spent a generous amount of time compiling their experiences into transfer guides with advice, common pitfalls, and other recommendations. A list of these can be found below.</p>
            <p>The LCSC also holds a Transfer Panel in November of each year where you can connect with Langara alumni who have successfully went through the steps of transferring from Langara.</p>
            {/* <p>You can find more information at the link below:</p> */}
            <ResourceButton text="Transfer Resources" link="https://langaracs.notion.site/Transfer-Information-a0548da4b3084681868381310c604c34"></ResourceButton>

            <br></br>
            <h2 className="text-2xl font-semibold pt-4">Langara Course Planner</h2>
            <p>The Langara Course Planner is an unofficial website that you can use to help plan your courses at Langara. It aggregates information about course attributes, transfer agreements, previous offerings, and more and lets you plan your courses using a visually based approach.</p>
            <ResourceButton text="Langara Course Planner" link="https://planner.langaracs.ca"></ResourceButton>

            <br></br>
            <h2 className="text-2xl font-semibold pt-4">Course Outlines</h2>
            <p>If you would like more information about the structure of a course, check out the #course-outlines channel on our discord server. We have course outlines for almost all computer science courses as well as some other courses.</p>
            <ResourceButton text="LCSC Discord" link="https://discord.gg/langara-computer-science-club-753037165050593300"></ResourceButton>




            <br></br>
            <h2 className="text-2xl font-semibold pt-4">Langara Course API</h2>
            <p>The Langara Course API is a non-official REST API that provides information about courses at Langara. Check it out at the link below.</p>
            <ResourceButton text="Langara Course API" link="https://coursesapi.langaracs.ca"></ResourceButton>

            <br></br>
            <h2 className="text-2xl font-semibold pt-4">Non LCSC Resources</h2>
            <p>These resources are not offered by the LCSC, but you may find them helpful:</p>
            

            <p className="text-l font-semibold pt-4">Linkedin Learning Pro</p>
            <p>You get free access to LinkedIn Learning through Langara. This includes training, courses, and certificats, all of which you can get completely for free.</p>
            <ResourceButton text="LinkedIn Learning" link="https://langara.ca/information-technology/it-services/teaching-learning-tools/linkedin-learning.html"></ResourceButton>


            <p className="text-l font-semibold pt-4">Textbook Lookup</p>
            <p>You can lookup which textbook is used for a course through the Langara Bookstore website.</p>
            <ResourceButton text="Langara Bookstore" link="https://mycampusstore.langara.bc.ca/buy_courselisting.asp?selTerm=3%7C8"></ResourceButton>

            <p className="text-l font-semibold pt-4">Github Student Developer Pack</p>
            <p>Free access to tons of software, notably free domains, free cloud credits, and much more.</p>
            <ResourceButton text="Github Student Developer Pack" link="https://education.github.com/pack"></ResourceButton>

        </div>
    );
}
