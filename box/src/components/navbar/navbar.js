import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [like, setLike] = useState(false);
    

    return (
        <>
        <h1>Hey</h1>
        <p>Now we're making some sense</p>
        { like === false ?
        <button onClick={() => setLike(true)}>Like</button> 
        :
        <button onClick={() => setLike(false)}>Unlike</button> }
        </>
    )
}

export default Navbar;