import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./auth/pages/LoginPage";
import { AuthProvider } from "./auth/context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/login" element={<LoginPage />} />;
      </Routes>
    </AuthProvider>
  );
}

export default App;
