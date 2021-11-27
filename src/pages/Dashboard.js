import { Box, Container, Grid } from '@material-ui/core'
import React,{useState} from 'react'
import CardMessages from '../components/cards/CardMessage'
import CardPoste from '../components/cards/CardPoste'
import CardProduits from '../components/cards/CardProduits'
import CardUsers from '../components/cards/CardUsers'
import GraphPie from '../components/cards/GraphPie'
import GraphProduits from '../components/cards/GraphProduits'
import GraphProduitsYear from '../components/cards/GraphProduitsYear'
import DataGridUser from '../components/dataGrid/dataGrid'
import { MainContainer } from '../components/main/MainElements'
import MobileSidebar from '../components/MobileSidebar/Index'
import Topnav from '../components/Topnav/Index'

function Dashboard() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return ( 
        <MainContainer>
            <MobileSidebar  isOpen={isOpen}  toggle={toggle}/>
            <Topnav  toggle={toggle} />
            <Box
                mt={2}
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                  }}
               >
                <Container  maxWidth={false} >
                            <Grid  container spacing={3} >
                                    <Grid item lg={3} sm={6} xl={3} xs={6} >
                                            <CardUsers taille={5}/>
                                    </Grid>
                                    <Grid item lg={3} sm={6} xl={3} xs={6} >
                                            <CardPoste taille={50}/>
                                    </Grid>
                                    <Grid item lg={3} sm={6} xl={3} xs={6} >
                                            <CardProduits taille={100}/>
                                    </Grid>
                                    <Grid item lg={3} sm={6} xl={3} xs={6} >
                                            <CardMessages taille={100}/>
                                    </Grid>
                                    <Grid item lg={6} md={12}xl={9} xs={12}
                                    >
                                        <GraphProduits  />
                                    </Grid>
                                    <Grid item lg={6} md={12}xl={9} xs={12}>
                                        <GraphProduitsYear  />
                                    </Grid>
                                    <Grid item lg={6} md={12}xl={9} xs={12}>
                                        <DataGridUser  />
                                    </Grid>
                                    <Grid item lg={6} md={12}xl={9} xs={12}>
                                        <GraphPie  />
                                    </Grid>
                            </Grid>
                </Container>
               </Box>
        </MainContainer>
    )
}

export default Dashboard
