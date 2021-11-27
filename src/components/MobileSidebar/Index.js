import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    IconMobile,
    ContainerLink
} from './MobileElements'
import{AiFillHome,AiOutlineUser} from 'react-icons/ai'
import { Build, Dashboard, Home, Message, Person, Policy, PostAdd, VolumeUp} from '@material-ui/icons'
import { FaBox } from 'react-icons/fa';




const items = [
  {
    href: '/',
    icon: <Dashboard/>,
    title: 'Tableau de bord'
  },
  {
    href: '/utilisateurs',
    icon: <Person/>,
    title: 'Utilisateurs'
  }, 
  {
    href: '/postes',
    icon:  <PostAdd/>,
    title: 'Postes'
  },
  {
    href: '/produits',
    icon:  <FaBox/>,
    title: 'Produits'
  },
  {
    href: '/messages',
    icon:  <Message/>,
    title: 'Messages'
  },
  {
    href: '/confidentialites',
    icon:  <Policy/>,
    title: 'Confidentialités'
  },
  
  {
    href: '/profil',
    icon: <AiOutlineUser/>,
    title: 'Profil'
  }
];



const MobileSidebar = ({isOpen,toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}  onClick={toggle} >
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                     {items.map((item,index) => (
                        <SidebarLink
                        key={index}
                         whiteblack={true}
                         to={item.href}
                        >
                           <IconMobile>{item.icon}</IconMobile>
                           {item.title}
                        </SidebarLink>
                    ))}
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default MobileSidebar
