import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.third};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    @media screen  and (max-width:768px){
        display:none;
    }
`

export const ProfilContainer = styled.div`
    margin-top: 1rem;
    
`

export const ProfileImg = styled.img`
    height: 5rem;
    width: 6rem;
    border-radius: 50px;
`
export const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textWhite};
`


export const MenuContainer = styled.div`
    margin-top: 1rem;
    width: 100%;
`

export const ContainerLink = styled(Link)`
     border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"};
    width: 70%;
    padding: 0.2rem;
    padding-left: 1rem;
    margin-left:30px;
    cursor: pointer;
    display: flex;
    text-decoration:none;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.1rem;
    transition: 0.2s all ease-in-out;
   // border-bottom: 1px solid #fff;
   

    &:hover {
        transform: scale(1.12);
        transition: all 0.2s ease-in-out;
    }
`


export const SpanLink = styled.span`
    /* color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"}; */
    color: ${props => !props.active && props.theme.textWhite};
    font-size: 1.2rem;
    margin-right: 1rem;
    color:#fff;
  
`

export const TitleLink = styled.h1`
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    justify-content:space-between;
    

`