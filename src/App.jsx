import './App.css'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import { Home } from './pages/Home/Home'
import { UploadFileView } from './pages/UploadFile/UploadFileView'
import { WorldSteps } from './pages/StepIsland/WorldSteps'
import { ComponentRiddle } from './pages/Riddle/ComponentRiddle'
import { useState } from 'react'

export const App = () => {
  const [hasStartedGame, setHasStartedGame] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home setHasStartedGame={setHasStartedGame} />} />
        <Route path={routes.UPLOADFILE} element={<UploadFileView setHasStartedGame={setHasStartedGame} />} />
        <Route
          path={routes.WORLDSTEPS}
          element={hasStartedGame ? <WorldSteps /> : <Navigate to={routes.HOME} />}
        />
        <Route
          path={routes.RIDDLE}
          element={hasStartedGame ? <ComponentRiddle /> : <Navigate to={routes.HOME} />}
        />
      </Routes>
    </HashRouter>
  )
}

