import { useState } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Certificates from './components/Certificates/Certificates'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Layout'



function App() {
  const router = createBrowserRouter([{
path:'',
element:<Layout/>,
errorElement: <Error/>,
children:[
  {index:true , element:<Home/>},
  {path:"/about" , element:<About/>},
  {path:"/projects" , element:<Projects/>},
  {path:"/skills" , element:<Skills/>},
  {path:"/contact" , element:<Contact/>},
  {path:"/certificates" , element:<Certificates/>},





]}])
  return (
    <main>
      <RouterProvider router={router}/>
        
    </main>
  )
}

export default App
