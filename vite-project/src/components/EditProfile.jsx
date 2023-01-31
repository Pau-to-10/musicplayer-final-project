import { useParams } from "react-router-dom";
import { Form, InputSmall, TextArea } from "../ui";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { updateUsers } from "../api/postUsers";

export const EditProfile = () => {
  const { editId } = useParams();

  const { logout, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  const { _id } = user;
  // console.log(_id);
  // const userId = _id;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data Form", data);
    const userData = { _id, ...data };
    console.log("userData", userData);
    updateUsers(userData);
  };

  return (
    <>
      <UserImg src={newUser?.picture} />

      <Form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <InputSmall
            type="text"
            placeholder={user?.userName}
            {...register("userName")}
          />
        </div>
        <div>
          <label>Name</label>
          <InputSmall
            type="text"
            placeholder={user?.firstName}
            {...register("firstName")}
          />
        </div>
        <div>
          <label>First Name</label>
          <InputSmall
            type="text"
            placeholder={user?.lastName}
            {...register("lastName")}
          />
        </div>
        <div>
          <label>Email</label>
          <InputSmall type="email" placeholder={user?.email} disabled />
        </div>
        <button className="bt-save">Save</button>
      </Form>
    </>
  );
};
