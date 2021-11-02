import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const onCloseHandler = () => {
    setIsCartOpen(false);
  }

  const onOrderHandler = () => {
    console.log("Ordering....");
    setIsCartOpen(false);
  }

  return (
    <Fragment>
      {isCartOpen && <Cart onClose={onCloseHandler} onOrder={onOrderHandler}/>}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
