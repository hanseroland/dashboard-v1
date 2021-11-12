import React, {useState} from 'react'
import { MainContainer } from '../components/main/MainElements'
import MobileSidebar from '../components/MobileSidebar/Index'
import ProfilGroup from '../components/Profil/ProfilGroup'
import Topnav from '../components/Topnav/Index'

const Profil = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return ( 
        <>
           <MainContainer>
               <MobileSidebar isOpen={isOpen}  toggle={toggle} />
               <Topnav toggle={toggle} />
               <ProfilGroup/>
           </MainContainer>
        </>
    ) 
}

export default Profil
