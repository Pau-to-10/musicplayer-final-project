import React from 'react'
import {Frame} from '../ui/probando';
import {Button, Input, Input2, Footer, IconFooter} from '../ui/Buttons.style'
import {GridRegisterLogin } from '../ui/Gridstyle'
import {Img, Img2} from '../ui/Img'


export const ProfilePage = () => {
  return (
    
      <GridRegisterLogin>
        
        <Input placeholder='user@mail.com'/>
        <Input2 placeholder='Username'/>
      
        <Button>Logout</Button>
        <Footer><IconFooter></IconFooter></Footer>

      </GridRegisterLogin>
      
    
  )
}



