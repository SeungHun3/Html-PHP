import './App.css';

function App() {

  const name = "Seunghun";
  const naver =
  {
    name: "네이버",
    url: "https://naver.com",
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "#f0f",
          backgroundColor: "green",
        }}
      >
        Hello, {name}
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
