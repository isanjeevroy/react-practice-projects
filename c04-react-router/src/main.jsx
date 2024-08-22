import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import {Layout, Home, Support, Contact, About, User, Courses, Dsa, Java} from './Index'
import  Github, { gitInfo } from './pages/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      <Route path='courses' element={<Courses />}>
        <Route path='dsa' element={<Dsa />} />
        <Route path='java' element={<Java />} />
      </Route>

      <Route path='support' element={<Support />} />
      <Route path='user/:id' element={<User/>}/>

      <Route loader={gitInfo} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
