import React, { useState } from 'react';

import classes from './UserInput.module.css';

const initialState = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    "duration": 0,
}

const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        //......do something
        props.onCalculate(userInput);

    };

    const resetHandler = () => {
        setUserInput(initialState);
    };

    //we are amking generic handler function for change so in case we need to get value from each of the onchange in the input
    const changeHandler = (inputIdentifier, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [inputIdentifier]: +value,
            };

        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings (INR)</label>
                    <input
                        onChange={(event) => changeHandler('current-savings', event.target.value)}
                        value={userInput['current-savings']}
                        type="number"
                        id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings (INR)</label>
                    <input
                        onChange={(event) => changeHandler('yearly-contribution', event.target.value)}
                        value={userInput['yearly-contribution']}
                        type="number"
                        id="yearly-contribution" />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) => changeHandler('expected-return', event.target.value)}
                        value={userInput['expected-return']}
                        type="number"
                        id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) => changeHandler('duration', event.target.value)}
                        value={userInput['duration']}
                        type="number"
                        id="duration" />
                </p>
            </div>
            <p className={classes.actions}>
                <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default UserInput;