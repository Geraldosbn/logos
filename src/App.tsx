import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ChurchHistory } from './pages/ChurchHistory/ChurchHistory.tsx'
import Home from './pages/Home/Home.tsx'
import { ChildrensArea } from './pages/ChildrensArea/ChildrensArea.tsx'
import { RulesOfFaith } from './pages/RulesOfFaith/RulesOfFaith.tsx'
import { Main } from './pages/Main/Main.tsx'
import { Login } from './pages/Login/Login.tsx'
import { DataRegister } from './pages/DataRegister/DataRegister.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />}>
          <Route index path='/main/home' element={<Home />} />
          <Route path='/main/churchHistory' element={<ChurchHistory />} />
          <Route path='/main/ruleOfFaith' element={<RulesOfFaith />} />
          <Route path='/main/childrensArea' element={<ChildrensArea />} />
          <Route path='/main/dataRegister' element={<DataRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
