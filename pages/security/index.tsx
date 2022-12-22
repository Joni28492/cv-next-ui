import { Collapse, Container, Grid, Image, Text } from '@nextui-org/react'
import React from 'react'
import { MainLayout } from '../../src/layouts/MainLayout'

const index = () => {
  return (
    <MainLayout title={'Seguridad'} description={'Apartado de seguridad informatica'}>
       <Container css={{m: '4px' ,d:'flex', flexDirection:'column', bgColor:'$accents1', minHeight: '85vh', borderRadius: '12px'}}>
            <Text h1> Seguridad Informática </Text>
         

            <Grid.Container gap={2}>

                <Grid>
       
                    <Collapse title="Hacking Ético">
                        <Text>
                            conocimientos para realizar auditorias de seguridad informática, recopilación de informacion, 
                            busqueda y analisis de vulnerabilidades, Nmap, Nmap - Scripts, Nessus, Explotación de las mismas con Metasploit,
                            elevacion de privilegios, obtención de información de relevancia para las auditorias, phising, generacion de payloads, 
                            uso de vulnerabilidades como eternalblue
                        </Text>
                    </Collapse>
                    <Collapse title="Forense">
                        <Text>
                            He trabajado con herramientas como auptosy, OsForensics, FTK Imager, Caine, Dumpty, volatility, windows register recovery etc...
                        </Text>
                    </Collapse>
                    <Collapse title="Linux">
                        <Text>
                            Manejo intermedio de linux, gestion de usuarios y permisos, manejo de ficheros y directorios, redirecciones y pipelines, procesos
                        </Text>
                    </Collapse>

                </Grid>
                <Grid>
                    <Image
                        width={900}
                        
                        src="https://www.kali.org/images/kali-desktop-gnome.jpg"
                        alt="Kali Image"
                        objectFit="cover"
                    />
                </Grid>

                



            </Grid.Container>



       </Container>

    </MainLayout>
  )
}

export default index