import React, { useEffect, useState, useRef } from "react";
import Toggle from "./Toggle";
import useTitleInput from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
    );
    const data = await res.json();
    setDishes(data);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div
      className="main-wrapper"
      ref={ref}
      onClick={() => ref.current.classList.add("clicked")}
    >
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
      {dishes.map(dish => (
        <article key={dish.name} className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span key={ingredient}>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
