import './App.css';
import Card from './Routes/cart/Card';
import Heart from '../src/Routes/Heart/Heart';
import Home from './Routes/home/Home'
import SinglePage from './components/SinglePage/SinglePage';
import Footertop from './components/foootertop/Footertop';
import Footer from './components/footer/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {


  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/heart",
        element: <Heart></Heart>,
      },

      {
        path: "/card",
        element: <Card></Card>,
      },
      {
        path: "/singlePage",
        element: <SinglePage></SinglePage>,
      },
      {
        path: "/single-page/:id",
        element: <></>,
      },
    ]
  );
  return (
    <div className="App">

      <RouterProvider router={router} />
      {/* <Home /> */}
      {/* <Footertop /> */}
      {/* <Footer /> */}



    </div>
  );
}

export default App;
