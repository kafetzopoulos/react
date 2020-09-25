import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Skase: <strong>{props.price.toFixed(2)}</strong> γιουρα</p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientDeduction(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className={classes.Orderutton}
            disabled={!props.purchaseable}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;