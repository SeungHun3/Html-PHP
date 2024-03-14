import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import Daylist from "./component/DayList.tsx";
import Day from "./component/Day.tsx";
import EmptyPage from "./component/EmptyPage";
import CreateWord from './component/CreateWord.tsx';
import CreateDay from './component/CreateDay';

function App() {
  return <div className="App">
    <BrowserRouter>
      <Header />

      <Routes>

        <Route exact path="/" element={<Daylist />} />
        <Route path="/day/:day" element={<Day />} />
        <Route  element={<EmptyPage />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
