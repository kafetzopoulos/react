import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngridient/BurgerIngredient';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients) //returns an array of string objects
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />; //example: igKey is salad and i is the ammount of it
            }); //[,]
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (ingredients.length === 0) {
        ingredients = <p>yes hello? no ingredient?</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;