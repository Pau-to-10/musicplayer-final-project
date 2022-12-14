import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import { useForm } from "react-hook-form";
import { ResponsiveStyles } from "../../ui/homegrid/ResponsiveStyles";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../../assets/img/face.png";
import icono from "../../assets/img/icono.png";
import { Navigate } from "react-router-dom";
import {
  Header,
  Sidebar,
  Container,
  Widget,
  IconBack,
  Title,
  Textsmall,
  Spam,
  Column,
  Input,
  Button,
  Footer,
  Main,
  InputSmall,
  FooterIcon,
  H1, 
  P
} from "../../ui";

export const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();


  const { login, authState } = useContext(AuthContext);
  const { isLogged } = authState;
  //---------------------------------------------------------------------//




  //3. añadir el usuario al sessionstorage\
  /*
  useEffect(() => {
    let interin = JSON.parse(sessionStorage.getItem("users"));
    setUser(interin);
  }, []);
  useEffect(() => {
    sessionStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  */

  const onSubmit = (data) => {
    

    //1.recoger info del formulario
    let userInput = data
    login(data)
    console.log(userInput);

    //2.comprobar que los datos sean correctos
    
  }
  return (
    <>
       {isLogged && (
          <Navigate to="/home" replace={true} />
        )}
      <ResponsiveStyles />
      <Container className="contenedor">

        <Header className="header">
          <Link to="/">
            <IconBack>
              <MdArrowBackIos />
            </IconBack>
          </Link>
          <center>
            <img src={facebook} alt="icon" width="30" />
          </center>
        </Header>

        <Widget className="widget-1">
                    <Column>
                        <h1>Sign In</h1>
                        <p>If you need any support <Link to="/support">Click here</Link></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Column>
                                <Input  type="email" placeholder="Enter email" {...register("email", {required: true})} />
                                <Input type="password" placeholder="Enter password" {...register("password")} />
                                {errors.password && <p>{errors.password?.message}</p>}
                                <Link to="/recovery"> Recovery password</Link>
                                <Button type="submit">Sign In</Button>
                            </Column>
                        </form>
                    </Column>
                </Widget>

        <Footer className="footer">
          <Column>
            <div>
              <P>or sign in with</P>
              <center>
                <FooterIcon>


                  <img src={facebook} alt="icon" width="30" height="40" />
                  <img src={facebook} alt="icon" width="30" height="40" />
                  <img src={facebook} alt="icon" width="30" height="40" />
                </FooterIcon>
              </center>

            </div>



            <div>
              <h6>
                <Textsmall>Not a member?
                  <Link to="/register" >

                  </Link>
                  <Spam >&nbsp; Sign in</Spam>
                </Textsmall>
              </h6>

            </div>
          </Column>

        </Footer>

      </Container>
    </>
  );
};

