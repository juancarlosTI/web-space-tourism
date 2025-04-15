import Exibition from "../Exibition/exibition";
import launchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import spacePort from '../../assets/technology/image-spaceport-portrait.jpg';
import forwardArrow from '../../assets/Icons/arrow_forward_24px.png';
import backgroundTechnology from '../../assets/technology/background-technology-desktop.jpg';
import styled from "styled-components";

//Data

import objectsInfo from '../../assets/data.json';



//Technology
class Technology extends Exibition {

    constructor(){

        this.state = {
            selectedTech: 2,
            openInfo: false
        }
        
        this.handleNextBtn = this.handleNextBtn.bind(this);
        this.handleBackBtn = this.handleBackBtn.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
    }
    
    handleNextBtn() {
        if (this.state.selectedTech < 2) {
            this.setState((prevState) => ({ ...prevState, selectedTech: prevState.selectedTech + 1 }))
        } else if (this.state.selectedTech === 2) {
            this.setState((prevState) => ({ ...prevState, selectedTech: 0 }))
        }
    }

    handleBackBtn() {
        if (this.state.selectedTech > 0) {
            this.setState((prevState) => ({ ...prevState, selectedTech: prevState.selectedTech - 1 }))
        } else if (this.state.selectedTech === 0) {
            this.setState((prevState) => ({ ...prevState, selectedTech: 2 }))
        }

    }

    handleInfo(){

        if (this.state.openInfo){
            this.setState((prevState) => ({...prevState, openInfo: false}))
            
        } else {
            this.setState((prevState) => ({...prevState, openInfo: true}))
            
        }
        console.log(this.state.openInfo)
    }


}



const TechnologyComponent = ({ selectedTech, handleNextBtn, handleBackBtn, handleInfo, openInfo }) => {


    const imagePath = selectedTech === 0 ? launchVehicle :
        selectedTech === 1 ? spaceCapsule :
            selectedTech === 2 ? spacePort : 'None';


    return (
        <TechnologyStyle>
            <div className="left">
                <div className="carrossel">
                    <div className="btn left" >
                        <img onClick={handleBackBtn} src={forwardArrow} alt="left" />
                    </div>
                    <div className={`slider`}>
                        <img id="carrossel-img" onClick={handleInfo} src={imagePath} alt="Technology" />
                    </div>
                    <div className="btn right">
                        <img onClick={handleNextBtn} src={forwardArrow} alt="right" />
                    </div>
                </div>
            </div>
            <div className="right">
                <ul>
                    <p className="tech-name">{objectsInfo.technology[selectedTech].name}</p>
                    <p className="tech-description">{objectsInfo.technology[selectedTech].description}</p>
                </ul>
            </div>
        </TechnologyStyle>
    )
}


const TechnologyStyle = styled.div`
    display:grid;
    grid-template-areas: "left-side right-side";
    grid-template-columns: 70% 30%;
    align-items:center;

    .left {
        grid-area: left-side;
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        

        img {
            width:450px;
            height:380px;
        }

        .carrossel {
            position:relative;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            //background-color:white;

            .btn {
                min-width:max-content;
                width:auto;
                overflow:hidden;
                border-radius:50%;
                background-color:white;
                opacity:0.3;
            }

            .btn:hover {
                transition: 0.15s ease-in-out;
                opacity:1;
            }

            .btn img {
                
                width:24px;
                height:24px;
            }

            .left {
                transform: rotate(-180deg) translateX(-40px);
            }

            .right {
                transform: translateX(-40px);
            }

            .slider {
                display:flex;
                align-items:center;
                justify-content:center;
                
            }
        }
    }

    .right {
        grid-area: right-side;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:80%;

        .tech-name {
            font-size:36px;
            
        }

        .tech-description {
            margin-top:30px;
        }
    }


    @media(max-width:768px){
        .left {
            img {
                width:420px;
            }
        }
    }
    
`
