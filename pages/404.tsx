import { Container, Grid } from '@nextui-org/react'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Container >
      <Grid css={{
      display: 'flex',
      jc: 'space-around',
      ai:'center'
    }}>
        <img
          height={500}
        src="https://img.freepik.com/vector-gratis/error-404-ilustracion-concepto-paisaje_114360-7898.jpg?w=2000" alt="" />
      </Grid>
    </Container>
  )
}

export default NotFoundPage