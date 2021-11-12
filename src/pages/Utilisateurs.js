import React, {useState} from 'react'
import { MainContainer } from '../components/main/MainElements'
import MobileSidebar from '../components/MobileSidebar/Index'
import UserTable from '../components/Tables/UserTable'
import Topnav from '../components/Topnav/Index'


const Utilisateurs = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <> 
           <MainContainer>
               <MobileSidebar isOpen={isOpen}  toggle={toggle} />
               <Topnav toggle={toggle} />
               <UserTable/>
           </MainContainer>
        </>
    )
}

export default Utilisateurs
