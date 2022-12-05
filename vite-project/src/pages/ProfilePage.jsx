import React from 'react'
import {InputProfile, Input2Profile, Footer, IconFooter, LogoProfile, UserProfile,UserImg, BtnEdit, Texto} from '../ui/probando';
import {Button, } from '../ui/Buttons.style'
import {GlobalStyle } from '../ui/globalStyles'
import {Img, Img2} from '../ui/Img'
import logo from "../assets/img/SpotifyVector.png";
import user from "../assets/img/user.png";


export const ProfilePage = () => {
  return (
    <>
        <GlobalStyle />
        
        <UserProfile>
          <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
        <BtnEdit><Texto>Edit Profile</Texto></BtnEdit>
      </UserProfile>
      
        <LogoProfile><img src={logo} alt="Logo" /></LogoProfile>
       
        <InputProfile placeholder='user@mail.com'/>
        <Input2Profile placeholder='Username'/>
      
        <Button>Logout</Button>
        <Footer><IconFooter>  <img src={logo} alt="Logo" /></IconFooter></Footer>
    </>
  

      
    
  )
}



