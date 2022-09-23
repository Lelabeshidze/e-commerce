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
import ProductFormPage from "./pages/products/ProductFormPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { isUserAdmin } from "./utils/util";
import { ProductContextProvider } from "./context/productContext";

import CategoryProductsPage from "./pages/products/CategoryProductsPage";
import SingleProductPage from "./pages/products/SingleProductPage";
import { CartContextProvider } from "./context/cartContext";
import CartPage from "./pages/cart/CartPage";


function App() {
  const isAdmin = isUserAdmin();
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile/:name" element={<ProfilePage />}></Route>
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/products/categories/:categoryName"
                  element={<CategoryProductsPage />}
                ></Route>
                <Route
                  path="/products/categories/:categoryName/:productName"
                  element={<SingleProductPage />}
                ></Route>
                <Route
                  path="/products/new"
                  element={
                    <ProtectedRoute hasAccess={isAdmin}>
                      <ProductFormPage />
                    </ProtectedRoute>
                  }
                  
                />
                <Route path="/cart" element={<CartPage/>}></Route>
              </Routes>
            </MainLayout>
            </CartContextProvider>
          </ProductContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
