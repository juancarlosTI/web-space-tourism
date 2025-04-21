
import Exibition from '../exibition';
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react"

//Data
import imgMoonPng from '../../assets/destination/image-moon.png';
import imgMarsPng from '../../assets/destination/image-mars.png';
import imgEuropaPng from '../../assets/destination/image-europa.png';
import imgTitanPng from '../../assets/destination/image-titan.png';
import objectsInfo from '../../assets/data.json';


const DestinationComponent = ({ selectedDestination, handleDestination, isMobile }) => {

    const imagePaths = [imgMoonPng, imgMarsPng, imgEuropaPng, imgTitanPng]

    return (


        <DestinationStyle $isMobile={isMobile}>

            <motion.div className="left" layout layoutDependency={isMobile} style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
                key={isMobile ? "mobile" : "desktop"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                initial={{ y: 50 }}
                animate={{y: 0 }}
                exit={{  y: 20 }}>
                <motion.div className="main" layout>
                    <p className="destination-name">
                        {objectsInfo.destinations[selectedDestination].name}
                        <br />
                    </p>
                    <img className="destination-img" src={imagePaths[selectedDestination]} alt="Star" />
                </motion.div>
                <AnimatePresence mode="wait">
                    {isMobile ? (
                        <motion.p

                            className="destination-description"
                            layoutId="description"
                            layout
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            {objectsInfo.destinations[selectedDestination].description}
                        </motion.p>
                    ) : <motion.p
                        className="destination-description"
                        layoutId="description"
                        layout
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        {objectsInfo.destinations[selectedDestination].description}
                    </motion.p>}
                </AnimatePresence>
            </motion.div>

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



// Destination

class Destination extends Exibition {
    constructor() {
        super()
        this.state = {
            selectedDestination: 0,
            isMobile: window.innerWidth <= 768
        }


        this.handleDestination = this.handleDestination.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile !== this.state.isMobile) {
            this.setState({ isMobile });
        }
    };

    handleDestination(destination) {
        this.setState((prevState) => ({ ...prevState, selectedDestination: destination }))
    }

    render() {
        return <DestinationComponent handleDestination={this.handleDestination} selectedDestination={this.state.selectedDestination} isMobile={this.state.isMobile} />
    }

}

const DestinationStyle = styled.div`
    display:flex;
    gap:20px;
    
    width:100%;
    justify-content:center;
    
    .left {
        display:flex;
        width:100%;
        align-items:center;
        margin-bottom:30px;
        padding-left:45px;

        .main {
            display:flex;
            flex-direction:column;
            align-items:center;
            box-sizing:border-box;
            

            .destination-name {
                font-size:48px;
                margin-bottom:40px;
            }

            .destination-img {
                max-width:300px;
                min-width:240px;
                width:100%;
                height:auto;
                border-radius:50%;
                box-shadow: -80px 0 100px 40px rgba(255, 255, 255, 0.5), 
                            40px 40px 150px 20px rgba(0,0,0,1);

                // Estilizar as shadows de acordo com o elemento renderizado
            }
        }

        .destination-description {
            margin-left:80px;
            max-width:220px;
            width:100%;
            align-self:center;
        }
    }

    .right {
        grid-area: right-side;
        display:flex;
        flex-direction:column;
        align-items:center;
        max-width:100%;
        width:100%;
        box-sizing:border-box;

        .destination-list {
            list-style-type: none;
        }

        .destination-item {
            display:flex;
            align-items:center;
            max-width:100%;
            min-width:90px;
            width:100%;
            height:80px;
            background-color:black;
            border-radius:50px;
            margin: 10px 0;
            justify-content:space-between;
            cursor:pointer;
            position:relative;
            box-sizing:border-box;
            padding-left:20px;
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

    @media(max-width:768px) {
        .left {
            

            .destination-description {
                margin-left:0;
                margin-top:50px;
            }
        }
    }

    @media(max-width:525px) {
        flex-direction:column;
        align-items:center;

        .left {
            padding:0;
            .main {
                padding:0;
            }
        }

        .right {
            margin-bottom:30px;
        }
        
    }

`

export default Destination;