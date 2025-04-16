import styled from "styled-components";

import Logo from '../../assets/shared/logo.svg';
import { Link, useLocation } from "react-router-dom";

const TopMenu = () => {

    const location = useLocation();

    return (
        <Header>
            <img src={Logo} alt="logo" />
            <div className="straigth-line" />

            <Menu>

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


            </Menu>
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
    //margin-bottom:120px;
    

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

        .straigth-line {
            display:none;
        }
    }
`

const Menu = styled.ul`
    display: flex;
    width:100%;
    list-style-type: none;
    margin:0;
    padding:0 30px;
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

        
    // .menu-item {
    //     margin-right:5px;
    // }

    .menu-number {
         margin-right: 8px;  /* espaço entre número e texto */
    }

    @media(max-width:768px){
        display:none;
    }
`

export default TopMenu