import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { loginState, setLoginState } = useContext(AuthContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    useEffect(() => {
      let interin = JSON.parse(localStorage.getItem("users"));
      fetchDatauser();
      setLoginState(interin);
    }, []);

    useEffect(() => {
      localStorage.setItem("users", JSON.stringify(user));
    }, [user]);

    const fetchDatauser = async () => {
      const fetchApi = await fetch("http://localhost:4000/users");
      const data = await fetchApi.json();
      setLoginState(data);
    };

    const userData = {
      username: e.target.userName.value,
      pass: e.target.userPass.value,
    };
    // console.log({ userData });

    const interim = dataUser.find(
      (user) =>
        userData.email === user.email && userData.password === user.password
    );

    if (interim) {
      //console.log(interim)
      setLoginState(interim);
      alert("User registered successfully");
    } else {
      alert("Unregistered user, or incorrect data");
      navigate("/");
    }
  };
};
return (
  <>
    <h1 className="text-center text-white">Login page</h1>
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="userName"
        className="form-control"
        placeholder="Tu nombre"
      />
      <input
        type="text"
        name="userPass"
        className="form-control"
        placeholder="Tu password"
      />
      <button type="submit" className="btn btn-success">
        Send
      </button>
    </form>
  </>
);
