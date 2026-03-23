import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Error from './component/Error';
import Nav from './component/Nav';
import Login from './component/Login';
import Contact from './component/Contact';
import Product from './component/Product';
import Register from './component/Register';
import Productd from './component/Productd';
import { Themeprovider } from './Context/ThemeContext';
import Count from './component/Count';


const router = createBrowserRouter([
   {
      path:"/",
      element:<Nav/>,
      errorElement:<Error/>,
      children:[
            {
                  index:"/home",
                  element:<Home/>,
            },
            {
                  path:"/home",
                  element:<Home/>,
            },
            {
                  path:"about",
                  element:<About/>
            },
             {
                  path:"register",
                  element:<Register/>
            },
             {
                  path:"login",
                  element:<Login/>
            },
             {
                  path:"product",
                  element:<Product/>
            },
             {
                  path:"product/:pid",
                  element:<Productd/>
            },
             {
                  path:"contact",
                  element:<Contact/>
            },
              {
                  path:"count",
                  element:<Count/>
            },
            // {
            //       path:"*",
            //       element:<About/>
            // },

      ]
   }
])

createRoot(document.getElementById('root')).render(


      <>
      <Themeprovider>
      <RouterProvider router = {router}/>
      </Themeprovider>
      </>
)
