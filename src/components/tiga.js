import './tiga.css';
import { useState } from 'react';

const App = () => {
    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 1000));
    };

    return (
        <div>
            <h2>Angkanya Adalah {num}</h2>
            <button onClick={handleClick}>Klik Untuk Mendapatkan Angka Random</button>
        </div>
    );
};

export default App; 