import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

function App() {
  const handleSubmit = async (value: string) => {
    const data = await value;
    console.log(data);
  };
  return (
    <div className={css.app}>
      <SearchBar handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
