import { useRef, type FormEvent } from 'react';
import './App.css';
import { CiForkAndKnife } from 'react-icons/ci';

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  function printarName(e: FormEvent) {
    e.preventDefault();
    alert(inputRef.current?.value);
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
        Data from{' '}
        <summary>Saiba mais</summary>
        <a target="_blank" href="https://www.themealdb.com/">
          TheMealDB
        </a>{' '}
      </details>

      <form className="searchRecipe" method='post' onSubmit={printarName}>
        <input type="text"  required ref={inputRef} placeholder='Procure receitas'/>
        <button>PROCURE</button>
      </form>
    </>
  );
}

export default App;
