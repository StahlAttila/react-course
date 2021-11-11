import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsFetching(true);
      setError(null);

      const response = await axios.get(
        "https://food-order-app-82eb9-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      const meals = [];
      for (const key in response.data) {
        const meal = { ...response.data[key], id: key };
        meals.push(meal);
      }

      setMeals(meals);
      setIsFetching(false);
    };

    fetchMeals().catch((err) => {
      setIsFetching(false);
      setError(err.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isFetching && (
          <Loader type="TailSpin" color="#8a2b06" height={80} width={80} />
        )}
        {!isFetching && !error && <ul>{mealsList}</ul>}
        {!isFetching && error && <p>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
