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

function App() {
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <nav>
            <Link to="/register">Sign Up</Link>
            <br />
            <Link></Link>
          </nav>
          <Routes>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
