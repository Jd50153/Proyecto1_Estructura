import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import { Home } from './pages/Home/Home'
import { UploadFileView } from './pages/UploadFile/UploadFileView'

export const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.UPLOADFILE} element={<UploadFileView />} />
      </Routes>
    </HashRouter>
  )
}

