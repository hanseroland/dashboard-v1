import React, {useState} from 'react'
import { MainContainer } from '../components/main/MainElements'
import MobileSidebar from '../components/MobileSidebar/Index'
import ConfiTable from '../components/Tables/ConfiTable'
import Topnav from '../components/Topnav/Index'


const Confidentialites = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <> 
           <MainContainer>
               <MobileSidebar isOpen={isOpen}  toggle={toggle} />
               <Topnav toggle={toggle} />
               <ConfiTable/>
           </MainContainer>
        </>
    )
}

export default Confidentialites
