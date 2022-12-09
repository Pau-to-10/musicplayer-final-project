import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import facebook from '../../assets/img/face.png'
import { Container, Header, Widget, Column, Sidebar, Button, Input, IconBack, Textsmall, Down } from '../../ui'
import { ResponsiveStyles } from '../../ui/homegrid/responsiveStyles'
import { MdArrowBackIos } from "react-icons/md";
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const AuthLoginPage = () => {

const {register, handleSubmit, formState: { errors, isSubmitted }} = useForm();

//const onSubmit = data => console.log(data);

//console.log('Error', errors);
//console.log('Submitted', isSubmitted);


//const navigate = useNavigate();

const { user, setUser, dataUser, setDataUser } = useContext(UserContext);

useEffect(() => {
  let interin = JSON.parse(localStorage.getItem('users'));
  fetchDatauser();
  setUser(interin)
}, [])

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(user));
}, [user])

const fetchDatauser = async () => {
  const petiApi = await fetch('http://localhost:4000/user');
  const data = await petiApi.json();
  setDataUser(data)
}

//3. añadir el usuario al sessionstorage
useEffect(() => {
  let interin = JSON.parse(sessionStorage.getItem('users'));
  setUser(interin)
}, [])
useEffect(() => {
  sessionStorage.setItem('users', JSON.stringify(user));
}, [user])

const onSubmit = (e) => {
  e.preventDefault();

  //1.recoger info del formulario
  let usuario = {
    email: e.target.email.value,
    password: e.target.password.value
  };

  //2.comprobar que los datos sean correctos
  const interim = dataUser.find(user => (usuario.email === user.email) && (usuario.password === user.password))
  //if
  if (interim) {
    //console.log(interim)
    setUser(interim)
    alert('User registered successfully')
    //navigate("/start");
  } else {
    alert('Unregistered user, or incorrect data')
    //navigate("/");
  }
}


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
                        <form onSubmit={handleSubmit}>
                            <Column>
                                <Input  type="email" placeholder="Enter email" {...register("email", {required: true})} />
                                <Input type="password" placeholder="Enter password" {...register("password")} />
                                {errors.password && <p>{errors.password?.message}</p>}
                                <Link to="/recoverypass"> Recovery password</Link>
                                <Button type="submit">Sign In</Button>
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

                <Down className='abajo'>

                    <p>or sign in with</p>
                    <img src={facebook} alt="icon" width="30" />
                    <img src={facebook} alt="icon" width="30" />
                    <img src={facebook} alt="icon" width="30" />

                    <footer><h6> Not a member ? <Link to="/register"><p>Register now</p></Link></h6></footer>
                </Down> 
                
            </Container>
        </>
    )
}
