import { useRef, useState, type FormEvent } from 'react';
import './App.css';
import { CiForkAndKnife } from 'react-icons/ci';

type recipe = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strArea: string;
  strMealThumb: string;
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [meal, setMeal] = useState<recipe[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  async function fetchMeals(name: string) {
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.meals === null) {
        setSearchValue('Receita não encontrada');
        setMeal([]);
        return alert('Prato não encontrado');
      }

      setSearchValue(`Receita encontrada "${name}"`);
      setMeal(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  function handleName(e: FormEvent) {
    e.preventDefault();
    const valor = inputRef.current?.value.trim();

    if (valor) {
      setInputValue(valor);
      fetchMeals(valor);
    }
  }

  function handleSearch() {
    return (
      <>
        <p className="searchFor">{searchValue}</p>
        <div className="recipes">
          {meal.length > 0 &&
            meal.map(prop => (
              <div className="recipe" key={prop.idMeal}>
                <img className="recipeImg" src={prop.strMealThumb} alt="" />
                <div className="recipeDetails">
                  <h3 className="recipeName">{prop.strMeal}</h3>
                  <div className="recipeClass">
                    <h5>{prop.strCategory}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }

  return (
    <>
      <main className="wrapper">
        <header>
          <h1 className="headerIcon">
            <CiForkAndKnife /> Recipe Finder
          </h1>
          <p>Encontre receitas deliciosas do mundo todo</p>
        </header>

        <details>
          Data from <summary>Saiba mais</summary>
          <a target="_blank" href="https://www.themealdb.com/">
            TheMealDB
          </a>
        </details>

        <form className="searchRecipe" method="post" onSubmit={handleName}>
          <input type="text" ref={inputRef} required placeholder="Procure receitas" />
          <button>PROCURE</button>
        </form>

        {searchValue && handleSearch()}
      </main>
    </>
  );
}

export default App;
