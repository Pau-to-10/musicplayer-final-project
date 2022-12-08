import { useForm } from "react-hook-form";
import facebook from '../../assets/img/face.png'
import { Link } from "react-router-dom";
import { Container, Button, InputSmall, Form, Header, Sidebar, Column, Widget, IconBack, Down, Textsmall } from "../../ui";
import { ResponsiveStyles } from "../../ui/homegrid/responsiveStyles";
import { MdArrowBackIos } from "react-icons/md";

export const AuthRegisterPage = () => {

  const {register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = data => console.log(data);
  console.log('Error', errors);

  return (
    <>
      <ResponsiveStyles />
      <Container className="contenedor">

        <Header className="header">
          <Link to="/"><IconBack><MdArrowBackIos /></IconBack></Link>
          <center><img src={facebook} alt="icon" width="30" /></center>
        </Header>

        <Widget className="widget-1">
          <Form onSubmit={handleSubmit(onSubmit)}>
            
            <InputSmall
              {...register("name", { required: true, minLength: {
                                    value: 4,
                                    message: 'This field is required' 
              }
              })}
              placeholder="Name"
            />
              {errors.name && <p>{errors.name?.message}</p>}
              
            <InputSmall
              {...register("first_name", { required: true })}
              placeholder="First name"
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <InputSmall
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <InputSmall
              {...register("username", { required: true })}
              placeholder="Username"
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <InputSmall
              {...register("password", { required: true })}
              placeholder="Password"
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <InputSmall
              {...register("confirmPassword", { required: true })}
              placeholder="Confirm Password"
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <Button type="submit"> Save</Button>
          </Form>
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
            <Textsmall>blanlanlalbablbas</Textsmall>
          </Column>
        </Sidebar>

        {/* <Down className='abajo'>

                    <p>or sign in with</p>
                    <img src={facebook} alt="icon" width="30" />
                    <img src={facebook} alt="icon" width="30" />
                    <img src={facebook} alt="icon" width="30" />

                    <footer><h6>Do you have an account?<Link to="/login"><p>Sign in</p></Link></h6></footer>
        </Down> */}

      </Container>
    </>
  );
};
