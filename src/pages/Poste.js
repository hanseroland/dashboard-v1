import React, {useState} from 'react'
import { MainContainer } from '../components/main/MainElements'
import MobileSidebar from '../components/MobileSidebar/Index'
import PosteTable from '../components/Tables/PosteTable'
import Topnav from '../components/Topnav/Index'


const Poste = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <> 
           <MainContainer>
               <MobileSidebar isOpen={isOpen}  toggle={toggle} />
               <Topnav toggle={toggle} />
               <PosteTable/>
           </MainContainer>
        </>
    )
}

export default Poste
