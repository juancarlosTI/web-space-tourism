import styled from "styled-components";

import Logo from '../../assets/shared/logo.svg';

const TopMenu = () => {
    return (
        <Header>
            <img src={Logo} alt="logo" />
            <div className="straigth-line" />

            <Menu>
                <li className="menu-li"
                    >
                    <p className="menu-item">00</p>
                    <p>Home</p>
                </li>
                <li className="menu-li"
                    >
                    <p className="menu-item">01</p>
                    <p>Destination</p>
                </li>
                <li className="menu-li"
                    >
                    <p className="menu-item">02</p>
                    <p>Crew</p>
                </li>
                <li className="menu-li"
                    >
                    <p className="menu-item">03</p>
                    <p>Technology</p>
                </li>
            </Menu>
        </Header>
    )
}

const Header = styled.header`
    display:flex;
    width:100vw;
    height:100px;
    position:relative;
    margin-bottom:120px;
    

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
        
    }

    @media(max-width:768px){
        margin-bottom:70px;
    }
`

const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    margin:0;
    padding:0 30px;
    height:100px;
    background:transparent;
    backdrop-filter: blur(20px);
    margin-left: -50px;
    position:relative;
    right: 100px;
    
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

export default TopMenu