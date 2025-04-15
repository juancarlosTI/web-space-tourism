// Imports
import React from "react";
import styled from "styled-components";

//Data
import objectsInfo from '../../assets/data.json';


const HomeComponent = () => {
    return (
        <HomeStyle>
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
        </HomeStyle>
    )
}

class Exibition extends React.Component {
    render() {
        return (
            <HomeComponent />
        )
    }
}



const HomeStyle = styled.div`
    display:grid;
    grid-template-areas: "left-side right-side";
    grid-template-columns: 50% 50%;

    .left {
        grid-area: left-side;
        display:flex;
        flex-direction:column;
        width:100%;
        align-items:center;

        .text-description {
            width:65%;

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
                width:100%;
            }
        }
    }

    .right {
        grid-area: right-side;
        display:flex;
        width:100%;
        flex-direction:column;
        justify-content:flex-end;
        align-items:flex-end;

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
    }

    .start-with {
        width:65%;
    }

    

    @media(max-width:768px){
        .left {
            .text-description {
                .intro {
                    font-size:18px;
                }

                .space-text {
                    font-size:90px;
                }

                .description {
                    font-size:14px;
                }
            }
        }

        .right {
            .big-explore {
                width:200px;
                height:200px;
            }
        }
        
        
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

export default Exibition;

// Each styled-component for function react component can have the same 'grid-area':name?
// If yes, each function component will overwrite the grid-area:name. The result about it is, less complexity than an 'if'.
// If no, we'll use 'if' instead.