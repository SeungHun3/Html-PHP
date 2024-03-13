import './App.css';
import Hello from './component/Hello';
function App() {

  const name = "Seunghun";
  const naver =
  {
    name: "네이버",
    url: "https://naver.com",
  }

  return (
    <div className="App">
      <Hello age = {10} height = {160}/>
    </div>
  );
}

export default App;
