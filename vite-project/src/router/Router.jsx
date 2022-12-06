import { Routes, Route } from "react-router-dom";
import { AuthLoginPage, AuthRegisterPage, AuthHomePage, AuthRecoveryPage } from "../auth/pages/index.js";
import { EditProfilePage } from "../pages/EditProfilePage.jsx";
import { ProfilePage } from "../pages/ProfilePage.jsx";
import { SearchPage } from "../pages/SearchPage.jsx";
import { UserPage } from "../pages/UserPage.jsx";
import { WishPage } from "../pages/WishPage.jsx";

const Router = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<AuthHomePage />} />
                <Route path="/login" element={<AuthLoginPage />} />
                <Route path="/register" element={<AuthRegisterPage />} />
                <Route path="/recoverypass" element={<AuthRecoveryPage />} />

                <Route path="/account" element={<ProfilePage/>} />
                <Route path="/userhome" element={<UserPage/>} />
                <Route path="/profile" element={<EditProfilePage/>} />
                <Route path="/wish" element={<WishPage/>} />
                <Route path="/search" element={<SearchPage/>} />

            </Routes>
        </>
    );
};

export default Router;