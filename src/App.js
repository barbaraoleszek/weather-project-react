import "./App.css";
import Search from "./Search";
import NextDay from "./NextDay";



export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        
        <NextDay />
        <NextDay />
        <NextDay />
        <NextDay />
        <NextDay />
      </div>
      <a
      className="personal-info"
      href="https://github.com/barbaraoleszek/weather-project-react"
      >Site by Barbara Oleszek</a
    >
    </div>
  );
}