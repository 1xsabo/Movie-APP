import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Main from './components/Main';
import Details from './components/Details';
function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Main/>,
    },
    {
      path: "/details/:imdbID",
      element: <Details/>,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
