import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./Auth/Login"
import { Home } from "./Home/Home"
import { Landing } from "./Landing/Landing"
import { Signup } from "./Auth/Signup"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/home',
      element: <Home/>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
