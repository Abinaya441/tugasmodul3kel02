import logo from '../logo.svg';
import data from './data.json';
import React, { useState } from "react";
import "./components.css";

function Dua() {
    const [pencarian, setSearchTerm] = useState("");
    return (
        <div className="App">
            <input className='TextArea'
                type="text"
                value={pencarian}
                onChange={event => setSearchTerm(event.target.value)}
                placeholder="NIM Mahasiswa"
            />
            {
                data.filter(post => {
                    if (pencarian === '') {
                        return null;
                    } else if (post.nim.toString() === pencarian) {
                        return post;
                    }
                }).map((post) => (
                    <div className="box" key={post.nim}>
                            <div className="img-profile">
                            <img src={logo} className="App-logo" alt="logo" />
                            </div>
                        <table border={0}>
                            <tr><td>Nama Lengkap</td> <td> - </td> <td>{post.nama_lengkap}</td> </tr>
                            <tr><td>Nama Panggilan</td> <td> - </td> <td>{post.nama_panggilan}</td> </tr>
                            <tr><td>No Telp.</td> <td> - </td> <td>{post.nomor_telepon}</td> </tr>
                            <tr><td>ID LINE</td> <td> - </td> <td>{post.id_line}</td> </tr>
                            <tr><td>Tanggal Lahir</td> <td> - </td> <td>{post.tanggal_lahir}</td> </tr>
                            <tr><td>NIM</td> <td> - </td> <td>{post.nim}</td> </tr>
                            <tr><td>Email</td> <td> - </td> <td>{post.email}</td> </tr>
                            <tr><td>Hobi</td> <td> - </td> <td>{post.hobi}</td> </tr>
                        </table>
                    </div>
                ))
            }
        </div>
    );
}

export default Dua;
