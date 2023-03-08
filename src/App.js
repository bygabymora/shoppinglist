import React from 'react'
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Bag from "./components/Bag";

const App = () => {
  return (
    <div>
        <Bag />
        <div className="list-app">
        <ShoppingList />
      </div>
    </div>
  )
}

export default App