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
import ProductFormPage from "./pages/productList/ProductFormPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { isUserAdmin } from "./utils/util";
import { ProductContextProvider } from "./context/productContext";
function App() {
  const isAdmin = isUserAdmin();
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <ProductContextProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile/:name" element={<ProfilePage />}></Route>
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/products/new"
                element={
                  <ProtectedRoute hasAccess = {isAdmin}>
                    <ProductFormPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </MainLayout>
          </ProductContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
