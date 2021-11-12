import React, {useState} from 'react'
import { MainContainer } from '../components/main/MainElements'
import MobileSidebar from '../components/MobileSidebar/Index'
import ProduitTable from '../components/Tables/ProduitTable'
import Topnav from '../components/Topnav/Index'


const Produits = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <> 
           <MainContainer>
               <MobileSidebar isOpen={isOpen}  toggle={toggle} />
               <Topnav toggle={toggle} />
               <ProduitTable/>
           </MainContainer>
        </>
    )
}

export default Produits
