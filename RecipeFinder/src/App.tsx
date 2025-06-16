import { useRef, useState, type FormEvent } from 'react';
import './App.css';
import { CiForkAndKnife } from 'react-icons/ci';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');

  async function getUrlInfo(name: string) {
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.meals === null) {
        return alert("Prato não encontrado")
      }
      console.log(data.meals);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function handleName(e: FormEvent) {
    e.preventDefault();
    const valor = inputRef.current?.value;

    if (valor) {
      setSearchValue(valor);
      getUrlInfo(valor);
    }
  }

  function handleSearch() {
    return (
      <>
        <p className="searchFor">Receita encontrada: "{searchValue}"</p>
        <div className="recipes">

          <div className="recipe">
            <img className="recipeImg" src="https://hips.hearstapps.com/hmg-prod/images/roast-chicken-recipe-2-66b231ac9a8fb.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=300:*" alt="" />
            <div className="recipeDetails">
              <h3 className="recipeName">Chicken Handi</h3>
              <h5 className="recipeClass">Chicken</h5>
            </div>
          </div>

          <div className="recipe">
            <img className="recipeImg" src="https://hips.hearstapps.com/hmg-prod/images/roast-chicken-recipe-2-66b231ac9a8fb.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=300:*" alt="" />
            <div className="recipeDetails">
              <h3 className="recipeName">Chicken Handi</h3>
              <h5 className="recipeClass">Chicken</h5>
            </div>
          </div>

          <div className="recipe">
            <img className="recipeImg" src="https://hips.hearstapps.com/hmg-prod/images/roast-chicken-recipe-2-66b231ac9a8fb.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=300:*" alt="" />
            <div className="recipeDetails">
              <h3 className="recipeName">Chicken Handi</h3>
              <h5 className="recipeClass">Chicken</h5>
            </div>
          </div>

          <div className="recipe">
            <img className="recipeImg" src="https://hips.hearstapps.com/hmg-prod/images/roast-chicken-recipe-2-66b231ac9a8fb.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=300:*" alt="" />
            <div className="recipeDetails">
              <h3 className="recipeName">Chicken Handi</h3>
              <h5 className="recipeClass">Chicken</h5>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
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
        </a>{' '}
      </details>

      <form className="searchRecipe" method="post" onSubmit={handleName}>
        <input type="text" ref={inputRef} required placeholder="Procure receitas" />
        <button>PROCURE</button>
      </form>

      {searchValue && handleSearch()}
    </>
  );
}

export default App;
