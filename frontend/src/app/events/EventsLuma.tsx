import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { SetCurrentPage } from "../../redux/slices/pageSlice";

export default function EventsSection() {
    const router = useRouter();
    const mainDispatch = useAppDispatch();

    mainDispatch(SetCurrentPage("/events"));

    const iframeStyle = {
        border: '1px solid black',
        borderRadius: '4px',
        boxShadow: '0px 0px 3px 1px black ',
        height: `760px`,
        width: '500px',
        overflow: 'hidden',

    };
    return (
        <>
            <section className="flex-grow flex flex-col min-h-screen overflow-scroll hide-scrollbar">
                <div className="bg-body-gray h-[60vh] max-[600px]:h-[80vh]">
                    <div className={"flex flex-row bg-body-gray w-screen"}>
                        <div className=" flex flex-wrap justify-center items-center w-full mb-96 gap-5">
                            {/* welcome week */}
                            <iframe
                                src="https://lu.ma/embed/event/evt-fviAj6YzWGRFvr5/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            {/* figma workshop */}
                            <iframe
                                src="https://lu.ma/embed/event/evt-CcEhJ9sUgoWfRZL/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            {/* intro to hackthons */}
                            <iframe
                                src="https://lu.ma/embed/event/evt-ADFRul3ebIYu65p/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            {/* webdev workshop */}
                            <iframe
                                src="https://lu.ma/embed/event/evt-nR3BYNtOOkGb8Pu/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            {/* ai workshop */}
                            <iframe
                                src="https://lu.ma/embed/event/evt-jJuIjLffphwyhFU/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            {/* react workshop */}
                            <iframe
                                src="https://lu.ma/embed/event/evt-Jd8m4YxzsV9zgU9/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            {/* defang workshop */}
                            <iframe
                                src="https://lu.ma/embed/event/evt-ZOk3j2eugS1TVfk/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            {/* ai workshop*/}
                            <iframe
                                src="https://lu.ma/embed/event/evt-RNlCFhtA9NLNxvW/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 
