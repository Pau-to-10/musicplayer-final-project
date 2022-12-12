import { useForm } from "react-hook-form";
import { Button, InputSmall } from "../ui";

import { Form } from "../ui/Form";

export const RegisterForm = () => {





  
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  //const onSubmit = (data) => {
    //console.log(data.email);
    //validate(data.email);
  // };

  //console.log(watch("name")); // watch input value by passing the name of it
  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

  //const userDB = "hola@gmail.com";

  // function validate(email, emailDb) {
  //   //request to db with a get user
  //   if (email === emailDb) {
  //     console.log("This emaili s already registered, recover your password");
  //   } else {
  //     //if it not registered call post function
  //   }
  // }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* <InputSmall
          {...register("name", { required: true })}
          placeholder="Name"
        /> */}
        <InputSmall type="text" name="userName" placeholder="UserName" />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <InputSmall
          {...register("first_name", { required: true })}
          placeholder="First name"
        /> */}
        <InputSmall type="text" name="first_name" placeholder="First Name" />
        <InputSmall type="text" name="last_name" placeholder="Last Name" />

        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        {/* <InputSmall
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.exampleRequired && <span>This field is required</span>} */}
        <InputSmall type="text" name="email" placeholder="Email" />

        {/* <InputSmall
          {...register("username", { required: true })}
          placeholder="Username"
        />
        {errors.exampleRequired && <span>This field is required</span>} */}
        <InputSmall type="text" name="address" placeholder="Address" />

        {/* <InputSmall
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.exampleRequired && <span>This field is required</span>} */}
        <InputSmall type="text" name="password" placeholder="Password" />

        {/* <InputSmall
          {...register("confirmPassword", { required: true })}
          placeholder="Confirm Password"
        />
        {errors.exampleRequired && <span>This field is required</span>} */}
        <InputSmall type="text" name="confirmPassword" placeholder="Confirm your password" />

        <Button type="submit"> Save</Button>
      </Form>
    </>
  );
};
