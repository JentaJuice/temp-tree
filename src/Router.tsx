import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ROUTES from './Constants/route'
import Layout from './Pages/_Layout'

import Home from './Pages/Home/index'
import NotFound from './Pages/Errors/notFound'

import TreeLayout from './Pages/Trees/pageLayout'

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
