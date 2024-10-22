import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />} />)
  );
  return <>
    <RouterProvider router={myRoute} />
  </>;
}

export default App;
