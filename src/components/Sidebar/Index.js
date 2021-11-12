import React from 'react'
import {
    Container,
    ProfilContainer,
    ProfileImg,
    ProfileName,
    MenuContainer,
    ContainerLink,
    SpanLink,
    TitleLink
} from './SidebarElements'

import{ AiOutlineUser} from 'react-icons/ai'
import { Dashboard, Message, Person, Policy, PostAdd,  } from '@material-ui/icons'
import Img from '../../images/User.png'
import { FaBox, FaRulerVertical,FaDollarSign,FaShoppingCart} from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi';
import Menu from './Menu'

const items = [
     {
      titre:'Tableau de bord',
      menu:[
        {
        
            href: '/',
            icon: <Dashboard/>,
            title: 'Accueil'
          
        },
        {
        
          href: '/',
          icon: <BiIcons.BiAnalyse/>,
          title: 'Analytiques'
        
        },
        {
        
          href: '/',
          icon: <BiIcons.BiTrendingUp/>,
          title: 'Ventes'
        
        },

      ]

     },
     {
       titre:'Menu rapide',
       menu:[
        {
          href: '/utilisateurs',
          icon: <Person/>,
          title: 'Utilisateurs'
        },
        {
          href: '/produits',
          icon:  <FaBox/>,
          title: 'Produits'
        },
        {
          href: '',
          icon:  <FaDollarSign/>,
          title: 'Commandes'
        },
        {
          href: '',
          icon:  <BiIcons.BiMoney/>,
          title: 'Mouvements'
        },
        {
          href: '',
          icon:  <FaShoppingCart/>,
          title: 'Boutiques'
        },
        {
          href: '/postes',
          icon:  <PostAdd/>,
          title: 'Postes'
        },
       
       ]
     },
     {
       titre:'Notifications',
       menu:[
        {
          href: '/messages',
          icon:  <Message/>,
          title: 'Messages'
        },
       ]
     },
     {
       titre:'Paramètres',
       menu:[
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
       ]
     }
  ];
  



const Sidebar = () => {

    return (
        <>
           <Container>
           
                <ProfilContainer >
                  <ProfileImg src={Img} />
                  <ProfileName>
                    Tableau de bord
                  </ProfileName>
                </ProfilContainer>
              <MenuContainer>
                {
                  items.map((firts,index)=>(
                     <Menu  item={firts} key={index}  />
                  ))
                }
                 
              </MenuContainer>
           </Container>
        </>
    )
}

export default Sidebar
