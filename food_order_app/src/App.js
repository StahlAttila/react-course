import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  }

  const hideCartHandler = () => {
    setIsCartOpen(false);
  }

  return (
    <Fragment>
      {isCartOpen && <Cart onHide={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
