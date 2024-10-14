// Imports
import React from "react";
import styled from "styled-components";


// Imagens
import Logo from '../../assets/shared/logo.svg';
import backgroundHome from '../../assets/home/background-home-desktop.jpg';
import backgroundCrew from '../../assets/crew/background-crew-desktop.jpg';
import backgroundDestination from '../../assets/destination/background-destination-desktop.jpg';
import backgroundTechnology from '../../assets/technology/background-technology-desktop.jpg';

//Data

import objectsInfo from '../../assets/data.json';

// Destination

import imgMoonPng from '../../assets/destination/image-moon.png';
import imgMarsPng from '../../assets/destination/image-mars.png';
import imgEuropaPng from '../../assets/destination/image-europa.png';
import imgTitanPng from '../../assets/destination/image-titan.png';

//Crew members

import memberAnousheh from '../../assets/crew/image-anousheh-ansari.png';
import memberDouglas from '../../assets/crew/image-douglas-hurley.png';
import memberMark from '../../assets/crew/image-mark-shuttleworth.png';
import memberVictor from '../../assets/crew/image-victor-glover.png';

//Technology

import launchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import spacePort from '../../assets/technology/image-spaceport-portrait.jpg';
import forwardArrow from '../../assets/Icons/arrow_forward_24px.png'

const TopMenu = ({ handlePage, activePage }) => {
    return (
        <Header>
            <img src={Logo} alt="logo" />
            <div className="straigth-line" />

            <Menu>
                <li onClick={() => handlePage(1)}
                    style={{
                        borderBottom: activePage === 1 ? '2px solid white' : 'none',
                        paddingBottom: activePage === 1 ? '18px' : '20px'
                    }}>
                    <p className="menu-item">00</p>Home
                </li>
                <li onClick={() => handlePage(2)}
                    style={{
                        borderBottom: activePage === 2 ? '2px solid white' : 'none',
                        paddingBottom: activePage === 2 ? '18px' : '20px'
                    }}>
                    <p className="menu-item">01</p>Destination
                </li>
                <li onClick={() => handlePage(3)}
                    style={{
                        borderBottom: activePage === 3 ? '2px solid white' : 'none',
                        paddingBottom: activePage === 3 ? '18px' : '20px'
                    }}>
                    <p className="menu-item">02</p>Crew
                </li>
                <li onClick={() => handlePage(4)}
                    style={{
                        borderBottom: activePage === 4 ? '2px solid white' : 'none',
                        paddingBottom: activePage === 4 ? '18px' : '20px'
                    }}>
                    <p className="menu-item">03</p>Technology
                </li>
            </Menu>
        </Header>
    )
}

const Home = () => {
    return (
        <HomePage>
            <div className="left">
                <div className="text-description">
                    <p className="intro">So you want to travel to</p>
                    <p className="space-text">space</p>
                    <p className="description">Let's face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we'll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className="right">
                <div className="start-with">
                    <p className={`big-explore`}>Explore</p>
                </div>
            </div>
        </HomePage>
    )
}

const Destination = ({ selectedDestination, handleDestination }) => {

    const imagePaths = [imgMoonPng, imgMarsPng, imgEuropaPng, imgTitanPng]

    return (
        <DestinationPage>
            <div className="left">
                <div className="main">
                    <p className="destination-name">
                        {objectsInfo.destinations[selectedDestination].name}<br />
                    </p>
                    <img className="destination-img" src={imagePaths[selectedDestination]} alt="Star" />
                </div>
                <p className="destination-description">
                    {objectsInfo.destinations[selectedDestination].description}
                </p>
            </div>
            <div className="right">
                <ul className="destination-list">
                    {objectsInfo.destinations.map((destination, index) => {
                        return <li onClick={() => handleDestination(index)} key={index} className="destination-item">
                            <p>Destination : {destination.name}</p>
                            <p className="destination-trip">
                                Distance: {objectsInfo.destinations[index].distance}<br />
                                Travel: {objectsInfo.destinations[index].travel}
                            </p>
                            <img className="mini-destination" src={imagePaths[index]} alt="xD" />
                        </li>
                    })}
                </ul>
            </div>
        </DestinationPage>

    )
}

const Crew = ({ selectedCrewMember, handleCrew }) => {

    const imagePath = selectedCrewMember === 0 ? memberDouglas :
        selectedCrewMember === 1 ? memberMark :
            selectedCrewMember === 2 ? memberVictor :
                selectedCrewMember === 3 ? memberAnousheh : 'None'
    return (
        <CrewPage>
            <div className="big-member">
                <img src={imagePath} alt="Member selected" />
                <div className="member-description">
                    <p className="member-name">
                        {objectsInfo.crew[selectedCrewMember].name}
                    </p>
                    <p className="member-role">
                        {objectsInfo.crew[selectedCrewMember].role}
                    </p>
                    <p className="member-bio">
                        {objectsInfo.crew[selectedCrewMember].bio}
                    </p>
                </div>
            </div>
            <div className="listed-members">
                <ul>
                    {objectsInfo.crew.map((person, index) => {
                        return <li onClick={() => handleCrew(index)} key={index} className="crew-item">{person.name}</li>
                    })}
                </ul>
            </div>
        </CrewPage>
    )
}

const Technology = ({ selectedTech, handleNextBtn, handleBackBtn, handleInfo, openInfo }) => {

    const imagePath = selectedTech === 0 ? launchVehicle :
        selectedTech === 1 ? spaceCapsule :
            selectedTech === 2 ? spacePort : 'None'

    return (
        <TechnologyPage>
            <div className="left">
                <div className="carrossel">
                    <div className="btn left" >
                        <img onClick={handleBackBtn} src={forwardArrow} alt="left" />
                    </div>
                    <div className={`slider`}>
                        <img id="carrossel-img" onClick={handleInfo} src={imagePath} alt="Technology" />
                        <div className={`info-item ${openInfo ? 'info':''}`}>
                            <p className="tech-name">{objectsInfo.technology[selectedTech].name}</p>
                            <p className="tech-description">{objectsInfo.technology[selectedTech].description}</p>
                        </div>
                    </div>
                    <div className="btn right">
                        <img onClick={handleNextBtn} src={forwardArrow} alt="right" />
                    </div>
                </div>
            </div>
            <div className="right">
                {/* <ul>
                    <p className="tech-name">{objectsInfo.technology[selectedTech].name}</p>
                    <p className="tech-description">{objectsInfo.technology[selectedTech].description}</p>
                </ul> */}
            </div>
        </TechnologyPage>
    )
}


class Exibition extends React.Component {

    constructor() {
        super()
        this.state = {
            activePage: 4,
            selectedDestination: 0,
            selectedCrewMember: 0,
            selectedTech: 2,
            openInfo: false
        }

        this.handlePage = this.handlePage.bind(this);
        this.handleDestination = this.handleDestination.bind(this);
        this.handleCrew = this.handleCrew.bind(this);
        this.handleNextBtn = this.handleNextBtn.bind(this);
        this.handleBackBtn = this.handleBackBtn.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
    }

    handlePage(page) {
        this.setState((prevState) => ({ ...prevState, activePage: page }))
    }

    handleDestination(destination) {
        this.setState((prevState) => ({ ...prevState, selectedDestination: destination }))
    }

    handleCrew(member) {
        this.setState((prevState) => ({ ...prevState, selectedCrewMember: member }))
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


    render() {

        const background = this.state.activePage === 1 ? backgroundHome :
            this.state.activePage === 2 ? backgroundDestination :
                this.state.activePage === 3 ? backgroundCrew :
                    this.state.activePage === 4 ? backgroundTechnology : null;


        return (
            <Container background={background}>
                <TopMenu activePage={this.state.activePage} handlePage={this.handlePage} />
                {this.state.activePage === 1 ? <Home /> :
                    this.state.activePage === 2 ? <Destination handleDestination={this.handleDestination} selectedDestination={this.state.selectedDestination} /> :
                        this.state.activePage === 3 ? <Crew handleCrew={this.handleCrew} selectedCrewMember={this.state.selectedCrewMember} /> :
                            this.state.activePage === 4 ? <Technology handleInfo={this.handleInfo} openInfo={this.openInfo} handleBackBtn={this.handleBackBtn} handleNextBtn={this.handleNextBtn} selectedTech={this.state.selectedTech} /> : '404 ERROR'}
            </Container>
        )
    }
}

const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    color:white;
    background: url(${props => props.background})
`

const Header = styled.header`
    display:flex;
    width:100vw;
    height:100px;
    position:relative;
    margin-bottom:50px;

    img {
        margin:0 50px;
        width:50px;
        height:50px;
        align-self:center;
    }

    .straigth-line {
        height:2px;
        width:100%;
        background-color:black;
        align-self:center;
        position:relative;
        margin-right: -20px;
    }
`

const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    margin:0;
    margin-left: auto;
    padding:0 30px;
    

    li {
        display:flex;
        margin: 0 20px;
        padding-top: 20px;
        padding-bottom: 18px;
        padding-right: 5px;
        align-items:center;
        cursor:pointer;
        
    }

    li:hover {
        padding-bottom: 18px;
        border-bottom:2px solid white;
    }

        
    .menu-item {
        margin-right:5px;
    }
`

const HomePage = styled.div`
    display:grid;
    grid-template-areas: "left-side right-side";
    grid-template-columns: 50% 50%;

    .left {
        grid-area: left-side;
        display:flex;
        flex-direction:column;
        width:100%;
        align-items:center;
    }

    .right {
        grid-area: right-side;
        display:flex;
        width:100%;
        flex-direction:column;
        justify-content:flex-end;
        align-items:flex-end;
    }

    .text-description {
        width:65%;
    }

    .intro {
        font-size:28px;
        margin:0;
    }
    
    .space-text {
        text-transform:uppercase;
        font-size:124px;
        margin:0;
    }

    .description {
        font-size:16px;
        text-align:justify;
    }

    .start-with {
        width:65%;
    }

    .big-explore {
        color: rgba(0,0,0,1);
        background-color:white;
        font-size:36px;
        text-align:center;
        border-radius:50%;
        width:250px;
        height:250px;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        transition: 0.2s ease-out 0.2s;
        position:relative;
        cursor:pointer;
    }

    .big-explore::after {
        content: "";
        position: fixed;
        width: 0%;
        height: 0%;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
    }

    .big-explore:hover {
        box-shadow: 0 0 0px 30px rgba(255, 255, 255, 0.4);
    }

    .big-explore:hover::after {
        animation: pulse 3s 1 ease-out;
    }

    @keyframes pulse {
        0% {
            width:0;
            height:0;
            opacity:0.1;
            box-shadow: 0 0 25px 20px rgba(0, 0, 0, 1) ;
        }

        100% {
            width:650px;
            height:650px;
            opacity:0;
            box-shadow: 0 0 50px 100px rgba(0, 0, 0, 0.7);
        }
    }

`

const DestinationPage = styled.div`
    display:grid;
    grid-template-areas: "left-side right-side";
    grid-template-columns: 50% 50%;
    align-items:center;

    .left {
        grid-area: left-side;
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;

        

        .main {
            display:flex;
            flex-direction:column;
            text-align:center;

            .destination-name {
                font-size:48px;
                margin-bottom:40px;
            }

            .destination-img {
                width:300px;
                height:300px;
                border-radius:50%;
                overflow:hidden;
                box-shadow: -80px 0 100px 40px rgba(255, 255, 255, 0.5), 
                            40px 40px 150px 20px rgba(0,0,0,1);

                // Estilizar as shadows de acordo com o elemento renderizado
            }
        }

        

        .destination-description {
            margin-left:40px;
            width:220px;
            align-self:center;
        }
    }



    .right {
        grid-area: right-side;
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;

        .destination-list {
            list-style-type: none;
        }

        .destination-item {
            display:flex;
            align-items:center;
            width:400px;
            height:80px;
            background-color:black;
            border-radius:50px;
            margin: 10px 0;
            justify-content:space-between;
            cursor:pointer;
            position:relative;
            overflow:hidden;
        }

        .destination-item:hover {
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.7);
        }

        .destination-item p {
            margin-left:10px;
        }

        .destination-trip {
            font-size:12px;
        }

        .mini-destination {
            width:40px;
            height:40px;
            margin-right:20px;
        }
    }

    @media (max-width:768px){
        align-items:flex-start;

        .left {
            flex-direction:column;

            .destination-description {
                width:250px;
                margin-left:0;
                margin-top:20px;
                font-size:12px;
            }

            .main {
                .destination-img {
                    width:160px;
                    height:160px;
                }

                .destination-name {
                    font-size:28px;
                }
            }
        }
        
        .right {
            .destination-item {
                width:320px;
            }
        }

    
`

const CrewPage = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    align-self:center;
    position:relative;
    

    .big-member {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:320px;
        background-color:black;

        img {
            width:200px;
            height:auto;
        }

        .member-description {
            width:300px;
            margin-left:20px;
            //background-color:blue;
        }
    }

    .listed-members {
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100vw ;
        margin: 20px 0;
        position:absolute;
        bottom:0;
        
    }

    .member-name {
        font-size: 32px;
    }

    .member-role {}

    .member-bio {
        margin-top: 20px;
    }

    .listed-members ul {
        list-style-type:none;
        display:flex;
        width:500px;
        justify-content:center;
        align-items:center;
    }

    .crew-item {
        display:flex;
        color:black;
        background-color:white;
        width:110px;
        height:110px;
        border-radius:50%;
        text-align:center;
        justify-content:center;
        align-items:center;
        word-break:break-word;
        margin: 0 10px;
    }

    
`

const TechnologyPage = styled.div`
    display:grid;
    grid-template-areas: "left-side right-side";
    grid-template-columns: 70% 30%;

    .left {
        grid-area: left-side;
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        

        img {
            width:380px;
            height:auto;
        }

        .carrossel {
            position:relative;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            background-color:white;

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
                

                .info-item {
                    align-self:center;
                    position:absolute;  
                    width:250px;
                    padding: 20px 5px;
                    background-color:black;
                    display:none;
                }

                .info-item.info {
                    display:block;
                }

                
            }
        }
    }

    .right {
        grid-area: right-side;
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
    }

    
`

export default Exibition;

// Each styled-component for function react component can have the same 'grid-area':name?
// If yes, each function component will overwrite the grid-area:name. The result about it is, less complexity than an 'if'.
// If no, we'll use 'if' instead.