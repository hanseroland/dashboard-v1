import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const TopnavContainer = styled.div`
    display: flex;
    padding: 0.5rem;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    //background-color: #131313;
    height: 2.5rem;
    
`


export const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;

    @media screen  and (max-width:768px){
        display:none;
    }
`

export const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorWhite};
    font-size: 27px;
    cursor: pointer;

    @media screen  and (max-width:768px){
        display:none;
    }
` 

export const MobileIcon = styled.div`
    display:none;
   
    
    @media screen  and (max-width:768px){
        display:block;
        position:absolute;
        font-size: 1rem;
        cursor:pointer;
        color:#fff;
       
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 15px;
    padding:15px;
    text-decoration: none;

    &:hover {
        color: #fbf000;
        transition: 0.2s ease-in-out;
    }

    @media screen  and (max-width:768px){
        margin-right:15px;  
    }
` 

export const NavLogout = styled.div`
    color: #fff;
    white-space: nowrap;
    padding: 8px 18px;
    border: none;
    cursor: pointer;
   

    @media screen  and (max-width:768px){
        margin-right:15px;  
    }
`

export const NavBtn = styled.button`
    color: #fff;
    font-size: 15px;
    white-space: nowrap;
    padding: 8px 18px;
    outline: none;
    background-color:#131313;
    height: 30px;
    border: none;
    cursor: pointer;
    &:hover {
        color: #fbf000;
        transition: 0.2s ease-in-out;
    }

    @media screen  and (max-width:768px){
        margin-right:15px;  
    }
`