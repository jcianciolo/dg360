import React, { useState } from 'react'

function Counter({ total, setTotal, firstBonus, lastBonus, perfectBonus }) {
    const [count, setCount] = useState(0);

    const handleAddOne = () => {
        setCount(count + 1);
        setTotal(total + 1);
    }
    
    const handleMinusOne = () => {
        setCount(count - 1);
        setTotal(total - 1);
    }

    const handleFirstBonus = (e) => {
        if (e.target.checked === true) {
            setCount(count + firstBonus);
            setTotal(total + firstBonus);
        }

        else {
            setCount(count - firstBonus);
            setTotal(total - firstBonus);
        }

    }

    const handleLastBonus = (e) => {
        if (e.target.checked === true) {
            setCount(count + lastBonus);
            setTotal(total + lastBonus);
        }

        else {
            setCount(count - lastBonus);
            setTotal(total - lastBonus);
        }


    }
    
    const handlePerfectBonus = (e) => {
        if (e.target.checked === true) {
            setCount(count + perfectBonus);
            setTotal(total + perfectBonus);
        }

        else {
            setCount(count - perfectBonus);
            setTotal(total - perfectBonus);
        }

    }

    return (
        <div className="button">
            <button onClick={handleAddOne}>Increment</button>
            <h3>Count: {count}</h3>
            <button onClick={handleMinusOne}>Decrement</button>
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
    )
}

export default Counter;
