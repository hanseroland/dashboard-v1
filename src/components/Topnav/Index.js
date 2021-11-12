import React from 'react'
import {MobileIcon, TopnavContainer,NavLogout} from './TopnavElements'
import{AiOutlineLogout} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'


const Topnav = ({toggle}) => {
    return ( 
        <TopnavContainer>
            <NavLogout>
                <AiOutlineLogout size={25}  />
            </NavLogout>
            <MobileIcon  onClick={toggle} >
                    <FaBars  size={25}  />
            </MobileIcon> 
       </TopnavContainer> 
    )
}

export default Topnav
