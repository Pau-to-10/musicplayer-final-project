import React from 'react'
import {InputProfile, Input2Profile, Footer, IconFooter, LogoProfile, UserProfile,UserImg, BtnEdit} from '../ui/probando';
import {Button, } from '../ui/Buttons.style'
import {GridRegisterLogin } from '../ui/Gridstyle'
import {Img, Img2} from '../ui/Img'
import logo from "../assets/img/SpotifyVector.png";
import user from "../assets/img/user.png";


export const ProfilePage = () => {
  return (
    
      <GridRegisterLogin>
        
        <UserProfile>
          <UserImg><img src={user} alt="Logo" /></UserImg>
        <BtnEdit>Edit Profile</BtnEdit>
      </UserProfile>
      
        <LogoProfile><img src={logo} alt="Logo" /></LogoProfile>
       
        <InputProfile placeholder='user@mail.com'/>
        <Input2Profile placeholder='Username'/>
      
        <Button>Logout</Button>
        <Footer><IconFooter>  <img src={logo} alt="Logo" /></IconFooter></Footer>

      </GridRegisterLogin>
      
    
  )
}



