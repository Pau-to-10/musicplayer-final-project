import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, AuthHomePage} from "../auth/pages/index.js";
import {ProfilePage} from '../pages/ProfilePage'
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
