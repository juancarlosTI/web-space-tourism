import memberAnousheh from '../../assets/crew/image-anousheh-ansari.png';
import memberDouglas from '../../assets/crew/image-douglas-hurley.png';
import memberMark from '../../assets/crew/image-mark-shuttleworth.png';
import memberVictor from '../../assets/crew/image-victor-glover.png';
import Exibition from '../exibition';
import styled from "styled-components";

//Data
import objectsInfo from '../../assets/data.json';



class Crew extends Exibition {
    constructor(){
        super();
        this.state = {
            selectedCrewMember: 0
        }

        this.handleCrew = this.handleCrew.bind(this);
    }


    handleCrew(member) {
        this.setState((prevState) => ({ ...prevState, selectedCrewMember: member }))
    }

    render(){
        return <CrewComponent handleCrew={this.handleCrew} selectedCrewMember={this.state.selectedCrewMember}/>
    }
}

//Crew members
const CrewComponent = ({ selectedCrewMember, handleCrew }) => {

    const imagePath = selectedCrewMember === 0 ? memberDouglas :
        selectedCrewMember === 1 ? memberMark :
            selectedCrewMember === 2 ? memberVictor :
                selectedCrewMember === 3 ? memberAnousheh : 'None'
    return (
        <CrewStyle>
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
        </CrewStyle>
    )
}


const CrewStyle = styled.div`
    display:flex;
    flex-direction:column;
    max-width:100vw;
    width:100%;
    min-height:auto;
    position:relative;
    
    

    .big-member {
        position:relative;
        display:flex;
        align-items:center;
        //margin: 0 auto;
        width:100%;
        justify-content:center;
        min-height:320px;
        height:auto;
        background-color:black;
        overflow-wrap: break-word;

        img {
            width:200px;
            height:auto;
        }

        .member-description {
            display:flex;
            flex-direction:column;
            max-width:300px;
            width:100%;
            height:auto;
            margin-left:20px;
        }

        .member-name {
            font-size: 32px;
        }

        .member-bio {
            margin-top: 20px;
        }

    }

    .listed-members {
        display:flex;
        flex-direction:column;
        align-items:center;
        max-width:100vw;
        width:100%;
        margin: 20px 0;
        // position:absolute;
        top:-90px;

        ul {
            list-style-type:none;
            display:flex;
            max-width:500px;
            width:100%;
            justify-content:center;
            align-items:center;

            .crew-item {
                display:flex;
                color:black;
                background-color:white;
                flex: 0 1 90px;
                height: 90px;
                border-radius:50%;
                text-align:center;
                justify-content:center;
                align-items:center;
                word-break:break-word;
                margin: 0 10px;
            }
        }
    }

    @media(max-width:768px){
        .big-member{


            img {
                width:180px;
            }
        }
    }
    
`

export default Crew;