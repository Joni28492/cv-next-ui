
import styles from '../styles/Home.module.css'
import { MainLayout } from '../src/layouts/MainLayout';
import { Button} from '@nextui-org/react';
// backgroundImage: 'url(https://www.picturecorrect.com/wp-content/uploads/2021/01/rule-of-space.jpg)',



export default function Home() {


  return (
    <>
        <MainLayout title={'Pagina principal'} description={'probando desc'}>
          <h1>Home - Pagina inicial</h1>

          <Button style={{
            zIndex: 0
          }} >Click me</Button>
        </MainLayout>
        
        
        <footer className={styles.footer}>
        
        </footer>
    </>

  )
}
