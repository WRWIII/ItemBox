import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    function handleCountUp() {
        setCount(prevCount => prevCount + 1);
    }

    function handleCountDown() {
        setCount(prevCount => prevCount - 1);
    }

    function handleReset() {
        setCount(0);
    }
    

    return (
        <>
        <h1>Hey</h1>
        <p>Now we're making some sense</p>
        { like === false ?
        <button onClick={() => setLike(true)}>Like</button> 
        :
        <button onClick={() => setLike(false)}>Unlike</button> }
        <button onClick={handleCountUp}>Count Up</button>
        <button onClick={handleCountDown}>Count Down</button>
        <button onClick={handleReset}>Reset</button>
        <br></br>
        <i>{count}</i>
        </>
    )
}

export default Navbar;