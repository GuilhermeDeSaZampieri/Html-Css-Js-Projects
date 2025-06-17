import { useRef, useState, type FormEvent } from 'react';
import './App.css';
import { CiForkAndKnife } from 'react-icons/ci';
import { FaArrowLeft, FaYoutube } from 'react-icons/fa';

type recipe = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strArea: string;
  strMealThumb: string;
  strYoutube: string;
  strIgredient: [];
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [meal, setMeal] = useState<recipe[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [showRecipe, setShowRecipe] = useState(null);

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
      fetchMeals(valor);
    }
  }

  function handleSearch() {
    const handleClick = (recipe: any) => {
      setShowRecipe(showRecipe === recipe.idMeal ? null : recipe);
    };
    const handleBackClick = (e: any) => {
      e.stopPropagation();
      setShowRecipe(null);
    };

    return (
      <>
        <p className="searchFor">{searchValue}</p>
        <div className="recipes">
          {meal.length > 0 &&
            meal.map(prop => (
              <div key={prop.idMeal}>
                <div className="recipe" onClick={() => handleClick(prop.idMeal)}>
                  <img className="recipeImg" src={prop.strMealThumb} alt="" />
                  <div className="recipeDetails">
                    <h3 className="recipeName">{prop.strMeal}</h3>
                    <div className="recipeClass">
                      <h5>{prop.strCategory}</h5>
                    </div>
                  </div>
                </div>

                {showRecipe === prop.idMeal && (
                  <div className="recipeInfo">
                    <div className="buttonBack">
                      <button className="btnBack" onClick={handleBackClick}>
                        {' '}
                        <FaArrowLeft /> Back To Home{' '}
                      </button>
                    </div>

                    <img src={prop.strMealThumb} alt="" />
                    <h3 className="recipeName">{prop.strMeal}</h3>
                    <div className="recipeClass">
                      <h5>{prop.strCategory}</h5>
                    </div>

                    <div className="instructions">
                      <h3>Instructions</h3>
                      <p>{prop.strInstructions}</p>
                    </div>

                    <div className="igredients">
                      <h3>Ingredients</h3>
                      <a className="youtube" href={prop.strYoutube} >
                        <FaYoutube /> Watch Youtube
                      </a>
                    </div>

                  </div>
                )}
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
