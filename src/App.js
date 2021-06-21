import "./App.css";
import Search from "./Search";
import MainCity from "./MainCity";
import NextDay from "./NextDay";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <MainCity />
        <NextDay />
        <NextDay />
        <NextDay />
        <NextDay />
      </div>
      <a
      class="personal-info"
      href="https://github.com/barbaraoleszek/weather-project-react"
      >Site by Barbara Oleszek</a
    >
    </div>
  );
}