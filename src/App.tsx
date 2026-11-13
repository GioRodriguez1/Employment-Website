import { createBrowserRouter, RouterProvider } from 'react-router'
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'
import { PageLayout } from '@/components/layout/PageLayout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Coursework from '@/pages/Coursework'
import Experience from '@/pages/Experience'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
      { path: 'coursework', element: <Coursework /> },
      { path: 'skills', element: <Skills /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return (
    // Honour the OS "reduce motion" setting for all Motion animations.
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <RouterProvider router={router} />
      </LazyMotion>
    </MotionConfig>
  )
}
