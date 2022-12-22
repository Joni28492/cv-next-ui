import { Card, Col, Grid, Image, Progress, Row, Text, useTheme } from '@nextui-org/react'
import React, { FC } from 'react'

interface Props {
    title: string;
    imgSrc: string;
    progress: number;
    features: string [];
}

export const CustomCard:FC<Props> = ({title,imgSrc, progress, features}:Props) => {
  
  const {type}= useTheme()
  
  
  
  return (
   
       
        <Grid.Container css={{w: 340, h: 480,p:24, bc: 'rgba(39, 43, 40, 0.8)', br: '15px', mb: 12}}>
            <Col>
                <Image 
                    css={{p:12, mt: 6 }}
                    src={imgSrc}
                    height= {110}
                />
                <Grid css={{d:'flex', jc:'center'}}>
                    <Text h2 > {title} </Text>
                </Grid>
                <Grid>
                    <Progress value={progress} 
                        // color="gradient" 
                        color={ (type==='light') ? 'primary' :'gradient' } 
                        shadow = {(type==='dark') && true}
                        size='sm' 
                     />
                </Grid>
                <Grid css={{overflowY: 'inherit', mt: 8}}>
                    {
                      (features)  && features.map( (feature, id) =>( <Text css={{fontWeight: 900, color: 'white'}} key={id}> {feature} </Text> ))
                    }
                </Grid>
            </Col>
            

        </Grid.Container>
  
  )
}
