import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    ContainerLink,
    SpanLink,
    TitleLink
} from './SidebarElements'



const SidebarLabel = styled.span`
  margin-left: 16px;
  margin: 10px;
  color: #b3b3b3;
`;


function Menu(props) {
    return (
        <>
            <div >
                <div>
                    <SidebarLabel>{props.item.titre}</SidebarLabel>
                </div>
                {props.item.menu.map((second, index) => (
                   <ContainerLink key={index} to={second.href}>
                       <TitleLink > 
                        <SpanLink>{second.icon}</SpanLink>
                         {second.title}
                       </TitleLink>
                   </ContainerLink>
                ))}
            </div>
        </>
    )
}

export default Menu
