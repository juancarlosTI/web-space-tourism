import styled from "styled-components";

import Logo from '../../assets/shared/logo.svg';
import MenuMobile from '../../assets/Icons/menu-mobile.png';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const TopMenu = () => {

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <Header>
            <img className="image-logo" src={Logo} alt="logo" />
            <div className="straigth-line" />

            <Menu className={isMenuOpen ? "open":""}>

                <li className={`menu-li ${location.pathname === "/" ? "page-active":""}`}>
                    <StyledLink to="/">
                        <span className="menu-number">00</span>
                        <span className="menu-label">Home</span>
                    </StyledLink>
                </li>


                <li className={`menu-li ${location.pathname === "/destination" ? "page-active":""}`}>
                    <StyledLink to="/destination">
                        <span className="menu-number">01</span>
                        <span className="menu-label">Destination</span>
                    </StyledLink>
                </li>


                <li className={`menu-li ${location.pathname === "/crew" ? "page-active":""}`}>
                    <StyledLink to="/crew">
                        <span className="menu-number">02</span>
                        <span className="menu-label">Crew</span>
                    </StyledLink>
                </li>


                <li className={`menu-li ${location.pathname === "/tech" ? "page-active":""}`}>
                    <StyledLink to="/tech">
                        <span className="menu-number">04</span>
                        <span className="menu-label">Technology</span>
                    </StyledLink>
                </li>
                <p className={`btn-menu-mobile-close ${isMenuOpen ? "show":"hide"}`} alt="hide-menu" onClick={toggleMenu}>Hide
                </p>
            </Menu>
            <img className="menu-mobile" src={MenuMobile} alt="menu-mobile" onClick={toggleMenu}/>
        </Header >
    )
}

const StyledLink = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
`

const Header = styled.header`
    display:flex;
    max-width:100vw;
    width:100%;
    min-height:100px;
    position:relative;
    margin-bottom:20px;  

    .image-logo {
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

    .menu-mobile {
        display:none;
    }

    .btn-menu-mobile-close {
        display:none;
    }

    @media(max-width:768px){
        
        justify-content: space-between;
        align-items:center;

        .straigth-line {
            display:none;
        }

        .menu-mobile {
            display:flex;
            margin: 0 50px;
            max-width:32px;
            max-height:32px;
            width:100%;
            height:100%;
            cursor:pointer;
        }

        .btn-menu-mobile-close {
            &.show{
                position:relative;
                display:flex;
                justify-content:center;
                align-items:center;
                border-radius:15px;
                background-color:grey;
                width:100px;
                height:32px;
                margin-bottom:20px;
                top:20px;
            }
        }

        .btn-menu-mobile-close:hover {
            background-color: white;
            color:black;
            transition-duration: 0.5s;
        }
    }
`

const Menu = styled.ul`
    display: flex;
    width:100%;
    list-style-type: none;
    margin:0;
    //padding:0 30px;
    min-height:100px;
    background:transparent;
    backdrop-filter: blur(20px);
    position:relative;
    right: 100px;
    align-items: center;

    a {
        text-decoration:none;
        color:inherit;
        padding:0;
        margin:0;
    }
    
    li {
        flex: 0 0 90px;
        max-width:120px;
        box-sizing:border-box;
        width:100%;
        height:100%;
        display:block;
        
        margin: 0 20px;
        cursor:pointer;
        border-bottom: 2px solid transparent;

        &:hover{
            border-color:white;
        }
    }

    .page-active {
        border-bottom: 2px solid white;
    }

    .menu-number {
        margin-right: 8px;  /* espaço entre número e texto */
    }

    @media(max-width:768px){
        display:none;
        flex-direction:column;
        position:fixed;
        top:0;
        right:0;
        padding-bottom:20px;
        z-index:500;
        border: 1px solid white;
        border-radius:5px;

        &.open {
            display:flex;
        }
    }
`

export default TopMenu
