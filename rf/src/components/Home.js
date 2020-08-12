import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => (
    <div id="homePage" className="container-fluid animated fadeIn">
        <div className="justify-content-center">
            <div className="row justify-content-center text-center text-light col-12">
                <div className="d-column col-5 ">
                    <div className="card mr-5 shadow home-window-height">
                        <div className="card-header rounded bg475868">
                            <h2>Recent Participants</h2>
                        </div>
                        <div id="loadParticipantContainer" className="card-body bg-light text-dark">
                            <div className="row justify-content-center">
                                <input id="applicant" type="text" className="col-9 mr-1 form-control" placeholder="Identification number..."/>
                                <button id="findApplicant" type="button" className="col-2 rounded shadow bg5ec7cb tc475868 form-control px-2 py-2 h5">Find</button>
                                <div id="notFound"></div>
                            </div>  
                            <ul id="loadParticipant">
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <button id="syncData" type="button" className="bg5ec7cb tc475868 shadow form-control px-2 py-2">Sync Data</button>
                    </div>
                </div>
                <div className="d-column col-7">
                    <div id="scroll" className="card shadow home-window-height">
                        <div className="card-header bg475868 rounded">
                            <h2 id="homeHeader">Participant Informational Discovery</h2>
                        </div>
                        <div className="card-body bg-light text-dark">
                            <div id="infoContainer">
                                <h3 className="lead">I always wondered why somebody doesn’t do something about that. Then I realized I was somebody.<br/><em>-Lily Tomlin</em></h3>
                                <div id="instructions">
                                <hr/>
                                <br/>
                                <h3><u>Existing Participant</u></h3>
                                <h4>If you would like to update the existing information on an existing participant, please enter the Identification Number in the provided box on the left side of the page. If the participant exists in the database, their information will be displayed. You can then update the information by pressing the <em>Update Information</em> button.</h4>
                                <br/>
                                <h3><u>New Participant</u></h3>
                                <h4>If you would like to begin with a new applicant, press the <em>Add New Participant</em> button below.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <Link to="/FormOne">
                            <button id="newParticipant" type="button" className="bg5ec7cb tc475868 shadow form-control px-2 py-2 ml-3">Add New Participant</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    </div>
)

export default Home