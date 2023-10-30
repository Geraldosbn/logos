import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ChurchHistory } from './pages/ChurchHistory/ChurchHistory.tsx'
import Home from './pages/Home/Home.tsx'
import { ChildrensArea } from './pages/ChildrensArea/ChildrensArea.tsx'
import { RulesOfFaith } from './pages/RulesOfFaith/RulesOfFaith.tsx'
import { Main } from './pages/Main/Main.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index path='/home' element={<Home />} />
          <Route path='/churchHistory' element={<ChurchHistory />} />
          <Route path='/ruleOfFaith' element={<RulesOfFaith />} />
          <Route path='/childrensArea' element={<ChildrensArea />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
