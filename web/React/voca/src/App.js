import { BrowserRouter, Routes, Route } from 'react-router-dom';import Header from "./component/Header";
import Daylist from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
function App() {
  return <div className="App">
    <BrowserRouter>
      <Header />

      <Routes>

        <Route exact path="/" element={<Daylist />} />
        <Route path="/day/:day" element={<Day />} />
        <Route  element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
