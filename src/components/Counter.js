import React, { useState } from 'react'

function Counter({ total, setTotal, firstBonus, lastBonus, perfectBonus, final }) {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    let bonus;

    const handleAddOne = () => {
        if (final) {
            setCount(count + 1);
            setTotal(total + 2);
            setScore(score + 2);
        }
        else {
            setCount(count + 1);
            setTotal(total + 1);
            setScore(score + 1);
        }

    }
    
    const handleMinusOne = () => {
        if (final) {
            setCount(count - 1);
            setTotal(total - 2);
            setScore(score - 2);
        }
        else {
            setCount(count - 1);
            setTotal(total - 1);
            setScore(score - 1);
        }
    }

    const handleBonus = (e) => {
        console.log(e.target.name);
        if (e.target.name === "First Made Bonus") {
            bonus = firstBonus;
        } else if (e.target.name === "Last Made Bonus") {
            bonus = lastBonus;
        } else {
            bonus = perfectBonus;
        }

        if (e.target.checked === true) {
            setScore(score + bonus);
            setTotal(total + bonus);
        }

        else {
            setScore(score - bonus);
            setTotal(total - bonus);
        }
        // if (e.target.checked === true) {
        //     setScore(score + firstBonus);
        //     setTotal(total + firstBonus);
        // }

        // else {
        //     setScore(score - firstBonus);
        //     setTotal(total - firstBonus);
        // }

    }

    // const handleLastBonus = (e) => {
    //     console.log(e.target.name);
    //     if (e.target.checked === true) {
    //         setScore(score + lastBonus);
    //         setTotal(total + lastBonus);
    //     }

    //     else {
    //         setScore(score - lastBonus);
    //         setTotal(total - lastBonus);
    //     }


    // }
    
    // const handlePerfectBonus = (e) => {
    //     console.log(e.target.name);
    //     if (e.target.checked === true) {
    //         setScore(score + perfectBonus);
    //         setTotal(total + perfectBonus);
    //     }

    //     else {
    //         setScore(score - perfectBonus);
    //         setTotal(total - perfectBonus);
    //     }

    // }

    return (
        <>
            <div className="counter">
                <button 
                    onClick={handleAddOne}
                    disabled={count === 10}
                >
                    +
                </button>
                <h3 className="count">{count}</h3>
                <button
                    onClick={handleMinusOne}
                    disabled={count === 0}
                >
                    -
                </button>
                <div className="bonus">
                    <div>
                        <input type="checkbox" onClick={handleBonus} name="First Made Bonus" />
                        <label>First In +{firstBonus}</label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleBonus} name="Last Made Bonus" />
                        <label>Last In +{lastBonus}</label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleBonus} name="Perfect Bonus" />
                        <label>All Made +{perfectBonus}</label>
                    </div>
                </div>
                <h3 className="score">Round Total: {score}</h3>
            </div>
        </>
    )
}

export default Counter;
