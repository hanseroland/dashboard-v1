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
import { Build, Dashboard, Home, Message, Person, PostAdd, VolumeUp} from '@material-ui/icons'




const items = [
  {
    href: '/',
    icon: <Dashboard/>,
    title: 'Tableau de bord'
  },
  {
    href: '/gestion_utilisateurs',
    icon: <Person/>,
    title: 'Utilisateurs'
  },
  {
    href: 'gestion_postes',
    icon:  <PostAdd/>,
    title: 'Postes'
  },
  {
    href: 'messages',
    icon:  <Message/>,
    title: 'Messages'
  },
  {
    href: '/reglages',
    icon:  <Build/>,
    title: 'Paramètres'
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
