import { Link } from 'react-router-dom'
import facebook from '../../assets/img/face.png'
import { Container, Header, Widget, Column, Sidebar, Button, Input, IconBack, Textsmall } from '../../ui'
import { ResponsiveStyles } from '../../ui/homegrid/responsiveStyles'
import { MdArrowBackIos } from "react-icons/md";

export const AuthLoginPage = () => {
    return (
        <>
            <ResponsiveStyles />
            <Container className='contenedor'>

                <Header className="header">
                    <Link to="/"><IconBack><MdArrowBackIos/></IconBack></Link>
                    <center><img src={facebook} alt="icon" width="30" /></center>
                </Header>

                <Widget className="widget-1">
                    <Column>
                        <h1>Sign In</h1>
                        <p>If you need any support <Link to="/support">Click here</Link></p>
                        <form>
                            <Column>
                                <Input placeholder="Enter username or email" />
                                <Input placeholder="Enter password" />
                                <Link to="/recoverypass"> Recovery password</Link>
                                <Button type="input">Sign In</Button>
                            </Column>
                        </form>
                    </Column>
                </Widget>

                <Sidebar className="aside">
                    <Column>
                        <Textsmall>blanlanlalbablbas</Textsmall>
                        <Textsmall>blanlanlalbablbas</Textsmall>
                        <Textsmall>blanlanlalbablbas</Textsmall>
                        <Textsmall>blanlanlalbablbas</Textsmall>
                        <Textsmall>blanlanlalbablbas</Textsmall>
                        <Textsmall>blanlanlalbablbas</Textsmall>
                        <Textsmall>blanlanlalbablbas</Textsmall>
                    </Column>
                </Sidebar>

                {/* <Widget className='widget-2'>

                    <p>or sign in with</p>
                    <img src={facebook} alt="icon" width="30" />
                    <img src={facebook} alt="icon" width="30" />
                    <img src={facebook} alt="icon" width="30" />

                    <footer><h6> Not a member ? <Link to="/register"><p>Register now</p></Link></h6></footer> {/* LINK */}
                {/* </Widget> */} 
                
            </Container>
        </>
    )
}
