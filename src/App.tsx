import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ChurchHistory } from './pages/ChurchHistory/ChurchHistory.tsx'
import { Home } from './pages/Home/Home.tsx'
import { ChildrensArea } from './pages/ChildrensArea/ChildrensArea.tsx'
import { RulesOfFaith } from './pages/RulesOfFaith/RulesOfFaith.tsx'
import { Main } from './pages/Main/Main.tsx'
import { Login } from './pages/Login/Login.tsx'
import { DataRegister } from './pages/DataRegister/DataRegister.tsx'
import {
  CHILDRENS_AREA_PATH,
  CHURCH_HISTORY_PATH,
  DATA_REGISTER_PATH,
  MAIN_PATH,
  MEMBER_REGISTER_PATH,
  RULE_OF_FAITH_PATH,
  USER_REGISTER_PATH
} from './shared/constants/path.ts'
import { MemberRegister } from './pages/MemberRegister/MemberRegister.tsx'
import { UserRegister } from './pages/UserRegister/UserRegister.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path={MAIN_PATH}
          element={<Main />}>
          <Route
            index
            path={MAIN_PATH}
            element={<Home />}
          />
          <Route
            path={MEMBER_REGISTER_PATH}
            element={<MemberRegister />}
          />
          <Route
            path={USER_REGISTER_PATH}
            element={<UserRegister />}
          />
          <Route
            path={CHURCH_HISTORY_PATH}
            element={<ChurchHistory />}
          />
          <Route
            path={RULE_OF_FAITH_PATH}
            element={<RulesOfFaith />}
          />
          <Route
            path={CHILDRENS_AREA_PATH}
            element={<ChildrensArea />}
          />
          <Route
            path={DATA_REGISTER_PATH}
            element={<DataRegister />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
