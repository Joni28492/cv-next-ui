import { Navbar, Button,  Text, Grid, Switch, useTheme } from "@nextui-org/react";
// import { SunIcon } from './SunIcon';
// import { MoonIcon } from './MoonIcon';
import { useTheme as useNextTheme } from 'next-themes'
import Link from "next/link";
import { NavbarContent, sideBarRoutes } from "../../data/routes";




export const SideMenuNavbar = () => {


  const { setTheme } = useNextTheme();
  const { type } = useTheme();


  const handleTheme = () =>{
    setTheme( (type === 'light'  ) ? 'dark' : 'light')
  }


//todo crear todos los links
  return (
      <Navbar isBordered variant="sticky" css={{ m:0, p:0 }} isCompact={"true"}>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          {/* <Text b color="inherit" hideIn="xs" style={{ marginLeft: '8px' }}>
            Joni Fernández
          </Text> */}
        </Navbar.Brand>
        
        
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
    
          { 
            NavbarContent.map(({text,href}, id)=>(
              <Link  key={id} 
              // isActive={(pathname === href) && true} 
              href={href}
              >
                {text}
              </Link>
            ))
          }


         
          {/* <Grid>
          <Switch
            checked={true}
            size="xl"
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
          />
          </Grid> */}
     
        </Navbar.Content>
       
        <Navbar.Content>
        <Switch
          checked={ (type === 'light') ? true : false  }
          onChange={handleTheme}
        />
        </Navbar.Content>

        <Navbar.Collapse>
        {sideBarRoutes.map(({text, href}, index) => (
          <Navbar.CollapseItem key={href}>
            <Link color="inherit" href={href} >
              {text}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
  )
}