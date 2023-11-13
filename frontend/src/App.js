import './app.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from './pages/Home/Home';
import Products from './pages/Products/P/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Header/Navbar';
import Footerx from './components/Footer/Footerx';
import "./app.css"
const Layout = ()=>{

  return (
    <div >
     <Navbar />
     <Outlet />
     <Footerx />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
  
      {
        path: "/products/:id",
        element: <Products  />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    
    ]
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />

    </>
  );
}
export default App;
