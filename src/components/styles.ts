import styled from  'styled-components';
import image from '../images/mp02.png';
import logo from '../images/logo.svg';

export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-image:url(${image});
    background-size: cover;
    object-fit: contain;

    @media (max-width: 700px) {
        background-position: center center;
    }
`
export const GradientBackground = styled.div`
    width: 100%;
    height: 55vh;
    background: transparent linear-gradient(180deg, #001044 0%, #00145300 100%) 0% 0% no-repeat padding-box;
`
export const BannerTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 4rem;
    color: #fff;
    padding: 0 6rem;
    font-Family: "Roc-Grotesk";
    margin-top: -8rem;
    line-height: 70px;
    position: relative;

    @media (max-width: 1070px) {
        padding: 0 3rem;
        font-size: 3.5rem;
        margin-top: -7.6rem;
        line-height: 60px;       
    }
    @media (max-width: 900px) {
        font-size: 3rem;
        margin-top: -6.5rem;
        line-height: 50px;        
    }
    @media (max-width: 500px) {
        font-size: 2.5rem;        
    }
    @media (max-width: 400px) {
        font-size: 2rem;        
    }
`
export const BottomInfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;

    @media (max-width: 1070px) {
        padding: 0 3rem;        
    }
    @media (max-width: 900px) {
        bottom: 2rem;        
    }
    @media (max-width: 700px) {
        bottom: 1.5rem;        
    }
    @media (max-width: 500px) {
        bottom: 1rem;        
    }
    @media (max-width: 400px) {
        bottom: .5rem;        
    }
`
export const Tile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem 1rem 0;
`
export const Info = styled.span`
    text-transform: uppercase;
    margin-left: 7px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
`
export const TileImage = styled.img`
    height: 54.9px;
    width: 40.04px;
`
export const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background: #F0E8D9; */
    padding: 1rem 6rem;

    @media (max-width: 1070px) {
        padding: 1rem 3rem;
    }
    @media (max-width: 500px) {
        padding: 1rem 1.5rem;
    }
`
export const Logo = styled.div`
    display: flex;
    width: 150px;
    height: 50px;

    @media (max-width: 700px) {
        width: 120px;
        height: 45px;
    }
    @media (max-width: 500px) {
        width: 100px;
        height: 40px;
    }
`

export const LogoImage = styled.img`
    width: 100%;
    height: 100%;
`
export const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    font-Family: "Roc-Grotesk";
    color: #fff;
    @media (max-width: 1070px) {
        display: none;
    }
`
export const MenuItem = styled.li`
    text-transform: uppercase;
    margin: 0 13px;
    font-size: .65rem;
    font-weight: 600;

`
export const ButtonWrapper = styled.div`
    color: #fff;
`
export const Button = styled.button`
    color: #fff;
    background: #BF5757;
    padding: .55rem 2rem;
    border-radius: 3px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        padding: .45rem 1.8rem;
    }
    @media (max-width: 500px) {
        padding: .35rem 1rem;
    }
`
export const ToggleButton = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    margin-right: 2rem; 
    
    @media (max-width: 1070px) {
        display: flex;
    }
`
// sidebar
export const SideBar = styled.div`
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    background-color: #fff;
    transition: .5s ease-in-out;
`
export const SidebarMenu = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`
export const CloseToggleButton = styled.div`
    position: relative;
    top: 20px;
    left: 3rem;
`
export const SidebarLogo = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SidebarLogoIcon = styled.img`
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: invert(1);
`
export const SidebarLinks = styled.div`
    position: relative;
    margin: 4rem auto 0 auto;
    width: fit-content;
    text-align: center;
`
export const SidebarUL = styled.ul`
    list-style: none;
    text-transform: capitalize;
`
export const SidebarLink = styled.li`
    font-size: 1.2rem;
    font-weight: 600;
    margin: 20px 0;
    width: fit-content;
    color: #000;
    position: relative;
`
// Info grid section
export const InforGridWrapper = styled.div`
    width: 100%;
    padding: 5rem 6rem;
    margin:0 auto;
    background: #F0E8D9;
    @media (max-width: 1070px) {
        padding: 5rem 3rem;
    }
`
export const Heading = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    text-transform: capitalize;
    text-align: center;
    @media (max-width: 1070px) {
        font-size: 2.7rem;
    }
    @media (max-width: 700px) {
        font-size: 2.5rem;
    }
    @media (max-width: 500px) {
        font-size: 2rem;
    }

`
export const Text = styled.p`
    font-size: 13px;
    font-weight: 500;
    padding: 2rem 15rem;
    justify-content: center;
    @media (max-width: 1070px) {
        padding: 2rem 9rem;
    }
    @media (max-width: 900px) {
        padding: 2rem 5rem;
    }
    @media (max-width: 700px) {
        padding: 2rem 3rem;
    }
    @media (max-width: 550px) {
        padding: 2rem 2rem;
    }
    @media (max-width: 450px) {
        padding: 2rem 1rem;
    }
`
export const Grid = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`
export const GridTile = styled.div`
    width: 50%;
    height: 400px;
    background: ${props => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    @media (max-width: 900px) {
        width: 100%
    }
    @media (max-width: 900px) {
        height: 380px;
    }
    @media (max-width: 700px) {
        height: 350px;
    }
    @media (max-width: 500px) {
        height: 280px;
    }
`
export const ImageGradient = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &:hover {
    background: transparent linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 100%) 0% 0% no-repeat padding-box;
    }
`
export const InfoWrap = styled.div`
    position: absolute;
    bottom: 0;
    display: none;
    color: #fff;
    padding: 2rem;
    background: transparent;
    z-index: 1000;
`
export const Box = styled.div`
    display: block;
`
export const TileTitle = styled.h2`
    font-weight: 700;
    color: #fff;
    @media (max-width: 700px) {
        font-size: 20px
    }
`
export const InfoText = styled.p`
    font-size: 12px;
    width: 65%;
    @media (max-width: 700px) {
        font-size: 10px;
        width: 100%
    }
`