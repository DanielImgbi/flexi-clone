import RootLayout from "../components/layouts/RootLayout";
import Home from "./Home/Home";
import { createBrowserRouter, createRoutesFromElements , Route } from "react-router-dom";
import Product from "./Product/Product";
import Career from "./Career/Career";
import Blog from "./Blog/Blog";

const rt = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< RootLayout/>}>
      <Route index  element={<Home />}/>
      <Route path="product" element={<Product />}/>
      <Route path="career" element={< Career />}/>
      <Route path="blog" element={<Blog/>}/>
      {/* <Route  path="contact"/> */}
    </Route>
  )
)

export default rt;