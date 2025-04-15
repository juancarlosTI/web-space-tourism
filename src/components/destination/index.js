import imgMoonPng from '../../assets/destination/image-moon.png';
import imgMarsPng from '../../assets/destination/image-mars.png';
import imgEuropaPng from '../../assets/destination/image-europa.png';
import imgTitanPng from '../../assets/destination/image-titan.png';
import Exibition from '../Exibition/exibition';
// import backgroundDestination from '../../assets/destination/background-destination-desktop.jpg';
import styled from "styled-components";

//Data

import objectsInfo from '../../assets/data.json';


// Destination

class Destination extends Exibition {
    constructor(){
        this.state = {
            selectedDestination: 0
        }

        
        this.handleDestination = this.handleDestination.bind(this);
    }

    handleDestination(destination) {
        this.setState((prevState) => ({ ...prevState, selectedDestination: destination }))
    }
    


}

const DestinationComponent = ({ selectedDestination, handleDestination }) => {

    const imagePaths = [imgMoonPng, imgMarsPng, imgEuropaPng, imgTitanPng]

    return (
        <DestinationStyle>
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
                            <p>Local: {destination.name}</p>
                            <p className="destination-trip">
                                Distance: {objectsInfo.destinations[index].distance}<br />
                                Travel: {objectsInfo.destinations[index].travel}
                            </p>
                            <img className="mini-destination" src={imagePaths[index]} alt="xD" />
                        </li>
                    })}
                </ul>
            </div>
        </DestinationStyle>

    )
}


const DestinationStyle = styled.div`
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
                    margin-bottom: 20px;
                }
            }
        }
        
        .right {
            .destination-item {
                width:320px;
                height:55px;
            }
        }

    
`
