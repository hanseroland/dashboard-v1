import React, {useState} from 'react'
import MobileSidebar from '../MobileSidebar/Index'
import Topnav from '../Topnav/Index'
import { MainContainer } from './MainElements'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (  
        <MainContainer>
            <MobileSidebar isOpen={isOpen}  toggle={toggle} />
            <Topnav  toggle={toggle}/>
            <h1>TaBleau de bord</h1>
        </MainContainer>
    )
}

export default Main
