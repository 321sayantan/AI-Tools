import React from "react";
import { useNavigate } from "react-router-dom";

const ToolsList = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="row row-cols-1 row-cols-lg-5 align-items-stretch g-4 py-5 home mt-5" style={{ display: "flex", height: "500px", margin: '0 60px' }}>

                <div className="col" onClick={() => navigate("/summary")} style={{ cursor: "pointer" }}>
                    <div
                        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style={{
                            backgroundImage: "url('/images/textgenerate.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                        }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: "center", alignItems: 'center' }}>
                                <h1>Text Generation</h1>
                            </div>

                            <h6>Summarize long text into short sentences</h6>
                        </div>
                    </div>
                </div>

                <div className="col" onClick={() => navigate("/paragraph")} style={{ cursor: "pointer" }}>
                    <div
                        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style={{
                            backgroundImage: "url('/images/paragraph.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                        }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: "center", alignItems: 'center' }}>
                                <h1>Paragraph Generator</h1>
                            </div>

                            <h6>Generate Paragraph with words</h6>
                        </div>
                    </div>
                </div>

                <div className="col" onClick={() => navigate("/chatbot")} style={{ cursor: "pointer" }}>
                    <div
                        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style={{
                            backgroundImage: "url('/images/chatbot.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                        }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: "center", alignItems: 'center' }}>
                                <h1>AI ChatBot</h1>
                            </div>

                            <h6>Have a conversation with our ChatBot</h6>
                        </div>
                    </div>
                </div>

                <div className="col" onClick={() => navigate("/js-converter")} style={{ cursor: "pointer" }}>
                    <div
                        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style={{
                            backgroundImage: "url('/images/code.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                        }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: "center", alignItems: 'center' }}>
                                <h1>JS Converter</h1>
                            </div>

                            <h6>Translate English to JavaScript code</h6>
                        </div>
                    </div>
                </div>

                <div className="col" onClick={() => navigate("/scifi-image")} style={{ cursor: "pointer" }}>
                    <div
                        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style={{
                            backgroundImage: "url('/images/image.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                        }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: "center", alignItems: 'center' }}>
                                <h1>Image Generation</h1>
                            </div>

                            <h6>Generate Sci-fi Images</h6>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ToolsList