import Exibition from "../exibition";
import launchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import spacePort from '../../assets/technology/image-spaceport-portrait.jpg';
import forwardArrow from '../../assets/Icons/arrow_forward_24px.png';
// import backgroundTechnology from '../../assets/technology/background-technology-desktop.jpg';
import styled from "styled-components";

//Data
import objectsInfo from '../../assets/data.json';



//Technology
class Technology extends Exibition {

    constructor() {
        super()
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

    handleInfo() {

        if (this.state.openInfo) {
            this.setState((prevState) => ({ ...prevState, openInfo: false }))

        } else {
            this.setState((prevState) => ({ ...prevState, openInfo: true }))

        }
        console.log(this.state.openInfo)
    }

    render() {
        return <TechnologyComponent selectedTech={this.state.selectedTech} handleNextBtn={this.handleNextBtn} handleBackBtn={this.handleBackBtn} handleInfo={this.handleInfo} openInfo={this.handleInfo} />
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
                    <div className="btn btn-left" >
                        <img className="img-btn-left" onClick={handleBackBtn} src={forwardArrow} alt="left" />
                    </div>
                    <div className="slider">
                        <img id="carrossel-img" onClick={handleInfo} src={imagePath} alt="Technology" />
                    </div>
                    <div className="btn btn-right">
                        <img className="img-btn-right" onClick={handleNextBtn} src={forwardArrow} alt="right" />
                    </div>
                </div>
            </div>
            <div className="right">
                <p className="tech-name">{objectsInfo.technology[selectedTech].name}</p>
                <p className="tech-description">{objectsInfo.technology[selectedTech].description}</p>
            </div>
            <div className="footer">

            </div>
        </TechnologyStyle>
    )
}


const TechnologyStyle = styled.div`
    display:flex;
    align-items:center;
    max-width:100vw;
    width:100%;
    

    .left {
        display:flex;
        flex-direction:column;
        align-items:center;
        width:60vw;
        justify-content:center;
        
        .slider img {
            width:100%;
            height:100%;
        }

        .carrossel {
            position:relative;
            display:flex;
            flex-direction:row;
            align-items:center;            
            width:480px;

            .btn {
                display:flex;
                width:32px;
                height:32px;
                border-radius:50%;
                background-color:white;
                opacity:0.3;
                justify-content:center;
                align-items:center;
            }

            .btn:hover {
                transition: 0.15s ease-in-out;
                opacity:1;
            }

            .img-btn-left, .img-btn-right {
                width:24px;
                height:24px;
            }

            .btn-left {
                transform: rotate(-180deg) translateX(-40px);
            }

            .btn-right {
                transform: translateX(-40px);
            }

            .slider {
                display:flex;
                align-items:center;
                width:480px;
                height:20rem;
            }
        }
    }

    .right {
        display:flex;
        flex-direction:column;
        align-items:center;
        max-width:50vh;
        width:100%;
        border-sizing: border-box;
        padding-right:20px;
        text-align:center;

        .tech-name {
            font-size:36px;
            width:100%;
        }

        .tech-description {
            margin-top:30px;
            width:100%;
        }
    }

    .footer {
        height:50px;
    }


    @media(max-width:768px){
        flex-direction:column;
        
        .left {
            max-width:100vw;
            .carrossel {
                max-width:480px;
                width:100%;
                justify-content:center;

                .slider img {
                    max-width:480px;
                    width:100%;
                    min-width:320px;
                    object-fit: cover;

                }

                .img-btn-left, img-btn-right {
                    width:24px;
                    height:24px;
                }
            }
        }

        .right {
            max-width:100vw;
            padding-right:0;
            margin-top:30px;
        }
    }
    
`

export default Technology;