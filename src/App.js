import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "7102b39c";
  const YOUR_APP_KEY = "71f1d24e448b826f4066a3f7c86a1f9c";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&healthLabels`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Ingredients</h1>
      <p1>Write an ingridient and we will tell what all you can make with it</p1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
        <select className="app_healthLabels">
          <option onClick={()=> sethealthLabels("vegan")}>Vegan</option>
        </select>
      </form>

      <div className="app__recipes">
      {
        recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;