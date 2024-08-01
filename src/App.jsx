import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./Auth/Login"
import { Home } from "./Home/Home"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
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
