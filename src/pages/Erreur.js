import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IconContext } from 'react-icons/lib';
import Img from '../images/undraw_page_not_found_su7k.svg'



const NotFound = styled.div`
 
  height: 100vh;
  max-width: 100%;
  background: #008647;
  text-align: center;
`

const BackImg = styled.img`
    width: 100%;
    height: 99%;
    z-index: -1; 

`

const NotFoundContainer = styled.div`
   align-items:center;
   justify-content:center;
   padding: 6rem;
   z-index:3;
   position:absolute;
   flex-direction:column;
   left:25%;
   top:25%;
   @media screen and (max-width: 768px){
      left:2%;
      top:20%;
    }
   
`
const H3 = styled.h3`
    margin-bottom: 3rem;
    font-size: 2rem;
    color:#fff;

`

const Span = styled.span`
 color:#fff;
 margin-left: 5px;
 font-size: 1rem;
`

const HomeLink = styled(NavLink)`
    padding: 1rem 2rem;
    border-radius: 10px;
   // background: #008647;
    transition: .2s;
    text-decoration:none;
`

export const HeroBg = styled.div`
 position: absolute;
 top:0;
 right:0;
 bottom:0;
 left:0;
 width:100%;
 height:100%;
 overflow: hidden;
`


const Erreur = () => {
    return (
        <IconContext.Provider value={{color:'#fff',  size: 35 }}>
          
        <NotFound>   
            <HeroBg>
                     
                 <BackImg  src={Img} alt="busness woman"/>
            </HeroBg>
            <NotFoundContainer>
                <H3>Désolé cette page n'existe pas !</H3>
                <HomeLink exact to="/" >
                    <FaHome/> 
                </HomeLink>
            </NotFoundContainer>
        </NotFound>
        </IconContext.Provider>
    )
}

export default Erreur