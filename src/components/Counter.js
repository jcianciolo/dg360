import React, { useState } from 'react'

function Counter({ total, setTotal, firstBonus, lastBonus, perfectBonus, final }) {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);

    const handleAddOne = () => {
        if (final) {
            setCount(count + 2);
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
            setCount(count - 2);
            setTotal(total - 2);
            setScore(score - 2);
        }
        else {
            setCount(count - 1);
            setTotal(total - 1);
            setScore(score - 1);
        }
    }

    const handleFirstBonus = (e) => {
        if (e.target.checked === true) {
            setScore(score + firstBonus);
            setTotal(total + firstBonus);
        }

        else {
            setScore(score - firstBonus);
            setTotal(total - firstBonus);
        }

    }

    const handleLastBonus = (e) => {
        if (e.target.checked === true) {
            setScore(score + lastBonus);
            setTotal(total + lastBonus);
        }

        else {
            setScore(score - lastBonus);
            setTotal(total - lastBonus);
        }


    }
    
    const handlePerfectBonus = (e) => {
        if (e.target.checked === true) {
            setScore(score + perfectBonus);
            setTotal(total + perfectBonus);
        }

        else {
            setScore(score - perfectBonus);
            setTotal(total - perfectBonus);
        }

    }

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
                        <input type="checkbox" onClick={handleFirstBonus} name="First Made Bonus" />
                        <label for="First Made Bonus">First Made Bonus</label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleLastBonus} name="Last Made Bonus" />
                        <label for="Last Made Bonus">Last Made Bonus</label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handlePerfectBonus} name="Perfect Bonus" />
                        <label for="Perfect Bonus">All Made Bonus</label>
                    </div>
                </div>
                <h3 className="score">Round Total: {score}</h3>
            </div>
        </>
    )
}

export default Counter;
