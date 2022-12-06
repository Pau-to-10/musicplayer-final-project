import { HomeNavBar } from '../components/HomeNavBar';
import facebook from '../assets/img/face.png'
import { ResponsiveStyles } from '../ui/homegrid/ResponsiveStyles'
import { MdArrowBackIos } from "react-icons/md";
import { Container, Sidebar, Header, IconBack, Button, Column, Widget, Input, UserImg, BtnEdit, Down } from '../ui'
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
    return (
        <>
            <ResponsiveStyles />
            <Container className='contenedor'>

                <Header className="header">
                    <Link to="/userhome"><IconBack><MdArrowBackIos /></IconBack></Link>
                    <center><img src={facebook} alt="icon" width="30" /></center>
                </Header>

                <Sidebar className="aside">
                    <Column>
                        <Input placeholder='user@mail.com' />
                        <Input placeholder='Username' />
                        <Button type="input">Logout</Button>
                    </Column>
                </Sidebar>

                <Widget className="widget-1">
                    <Column>
                        <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
                        <BtnEdit>Edit Profile</BtnEdit>
                    </Column>
                </Widget>

                <Down className="abajo">
                    <HomeNavBar />
                </Down>

            </Container>
        </>




    )
}



