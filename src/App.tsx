import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ChurchHistory } from './pages/ChurchHistory/ChurchHistory.tsx'
import { Home } from './pages/Home/Home.tsx'
import { ChildrensArea } from './pages/ChildrensArea/ChildrensArea.tsx'
import { RulesOfFaith } from './pages/RulesOfFaith/RulesOfFaith.tsx'
import { Main } from './pages/Main/Main.tsx'
import { Login } from './pages/Login/Login.tsx'
import { DataRegister } from './pages/DataRegister/DataRegister.tsx'
import { mainPath } from './shared/constants/path.ts'
import { MemberRegister } from './pages/MemberRegister/MemberRegister.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path={mainPath} element={<Main />}>
          <Route index path={mainPath} element={<Home />} />
          <Route
            path={`${mainPath}/memberRegister`}
            element={<MemberRegister />}
          />
          <Route
            path={`${mainPath}/churchHistory`}
            element={<ChurchHistory />}
          />
          <Route path={`${mainPath}/ruleOfFaith`} element={<RulesOfFaith />} />
          <Route
            path={`${mainPath}/childrensArea`}
            element={<ChildrensArea />}
          />
          <Route path={`${mainPath}/dataRegister`} element={<DataRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
