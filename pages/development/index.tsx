import { Container } from '@nextui-org/react'
import React from 'react'
import { CustomCard } from '../../src/components/ui/CustomCard'
import { MainLayout } from '../../src/layouts/MainLayout'

const index = () => {
  return (
    <MainLayout title={'Desarrollo'} description={'Tecnologias de programación'}>

         {/*  */}
         <Container css={{d:'flex', flexDirection: 'row', jc: 'space-around'}}>
            <CustomCard title={'Vue'} 
            progress={40} 
            imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'} 
            features={['Components', 'state', 'Options API', 'Router', 'Guards', 'Lazy Load', 'Vuex']} />

          <CustomCard 
          title={'Angular'} 
          progress={65} 
          imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'} 
            features={['Components', 'Pipes', 'Servicios', 'Router', 'Lazy Load', 'Directivas', 'Guards']} />


          <CustomCard 
          title={'React'} 
          progress={80} 
          imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} 
            features={['Components', 'Hooks', 'Context', 'Router', 'Redux', 'Lazy Load', 'Styled Components', 'Typescript' ,'Next.js']} /> 

          </Container>


    </MainLayout>
  )
}

export default index