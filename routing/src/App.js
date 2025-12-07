import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import RouteLayout from "./pages/RouteLayout";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routerDefinitions);
//OR

const router = createBrowserRouter([
  {path: '/', element: <RouteLayout />, errorElement: <ErrorPage />, children: [
    {path: '/', element: <Home />},
    {path: '/products', element: <Products />},
    {path: '/products/:productId', element: <ProductDetail />},
  ]}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
