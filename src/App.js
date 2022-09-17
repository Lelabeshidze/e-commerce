import logo from "./logo.svg";
import "./App.css";
import RegisterPage from "./pages/registration/RegisterPage";
import HomePage from "./pages/home/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./pages/profile/ProfilePage";
import { UserContextProvider } from "./context/userContext";
import MainLayout from "./layout";
import LoginPage from "./pages/login/LoginPage";
function App() {
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
         <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/profile/:name" element={<ProfilePage />}></Route>
            <Route path="/register" element={<RegisterPage />} />   
          </Routes>
          </MainLayout>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
