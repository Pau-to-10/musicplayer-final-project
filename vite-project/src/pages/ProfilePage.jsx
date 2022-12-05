import React from 'react'
import {InputProfile, Input2Profile, Footer, IconFooter} from '../ui/probando';
import {Button, } from '../ui/Buttons.style'
import {GridRegisterLogin } from '../ui/Gridstyle'
import {Img, Img2} from '../ui/Img'
import logo from "../assets/images/SpotifyVector.png";


export const ProfilePage = () => {
  return (
    
      <GridRegisterLogin>
        
        <InputProfile placeholder='user@mail.com'/>
        <Input2Profile placeholder='Username'/>
      
        <Button>Logout</Button>
        <Footer><IconFooter>  <img src={logo} alt="Logo" /></IconFooter></Footer>

      </GridRegisterLogin>
      
    
  )
}



