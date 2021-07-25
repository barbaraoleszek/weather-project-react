import "./App.css";
import Search from "./Search";




export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
       
      </div>
      <a
      className="personal-info"
      href="https://github.com/barbaraoleszek/weather-project-react"
      >Site by Barbara Oleszek</a
    >
    </div>
  );
}