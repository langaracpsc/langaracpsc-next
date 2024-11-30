import ExecProfiles from "./ExecProfiles";


export default function AboutPage() {

    return (
        <div className={"flex flex-col gap-5  grow pl-5"}>

            <h1 className="text-3xl font-semibold">About us:</h1>

            <p>{"The Langara Computer Science Club is a student-led club dedicated to providing a space for students interested in computer science. We provide a space to learn, create, network, and to have fun. We hold workshops, programming competitions, and other meetups."}</p>
            <p>{"The Langara Computer Science club is run by a team of dedicated Langara students. We strive to create awesome opportunities and events and to represent the interests of the diverse student body."}</p>
            {/* <p>{"We hire for new executives at the start of every month. If you are interested in joining our executive team, please follow our discord and instagram channels for updates."}</p> */}
            
            <br></br>



            <div className={"flex flex-col max-[600px]:mx-0 gap-3 items-center"}>
                {/* TODO: don't assume API always works. */}
                {/* <Conditional Condition={loading}>Loading</Conditional> */}
                <ExecProfiles />
            </div>

            <span className="text-left">{`Are you a former executive? Please reach out through our email if you would like anything changed <3`}</span>
        </div>
    );
}
