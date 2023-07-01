import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ROUTES from './constants/route'
import Layout from './pages/_Layout'

import Home from './pages/home/index'
import NotFound from './pages/errors/notFound'

import TreeLayout from './pages/trees/pageLayout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />

          {/* Anxiowaldosiaticist */}
          {ROUTES.AXIO.paths.map((item) => (
            <Route
              key={item.id}
              path={ROUTES.AXIO.base + item.path}
              element={<TreeLayout artist="axio" name={item.path} />}
            />
          ))}

          {/* katsuragi.wav */}
          {ROUTES.KATWAV.paths.map((item) => (
            <Route
              key={item.id}
              path={ROUTES.KATWAV.base + item.path}
              element={<TreeLayout artist="kat-wav" name={item.path} />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
