import React, { useState } from "react";

function Satu() {
    const [showKelompok, setShowKelompok] = useState(false);
    const hideKelompok = () => {
        setShowKelompok(!showKelompok);
    };
    return (
        <div className="App">
            {
                <div>
                    <h1>Tugas Modul 3 Praktikum RPLBK Kelompok 02</h1>
                    <div className="ViewKelompok">
                        <div
                            className="ViewKelompok1"
                            style={{
                                display: showKelompok === true ? "flex" : "none",
                            }}
                        >
                            <p>Defin Friko Fahdani 21120119130054</p>
                            <p>Muhammad Abinaya Isaqofi 21120119130039</p>
                            <p>Ega Oktabrianto 21120119130066</p>
                            <p>Nurhaidah 21120119120003</p>
                        </div>
                        <button className="Button" onClick={hideKelompok}>
                            {showKelompok !== true ? "Show" : "Hide"}
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Satu;
