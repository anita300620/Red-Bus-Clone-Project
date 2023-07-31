import { GoArrowSwitch } from 'react-icons/go'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import smallredbus from '../assets/smallredbus.png'
import '../App.css'

function Searchbar(props) {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    
    const navigate = useNavigate();

    async function searchbus() {
        const response = await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses');
        const data = await response.json();

        
        const results = data.filter((source) => source.source === from);
        props.setbuses(results);
        if(!from || !to){
            alert("please fill the source or destination")
        }else{
            navigate('/buslistcard');
        }
        
    }

    function switching() {
        setFrom(to);
        setTo(from);
    }

    return (
        <>
            <div className='home-page'>
                
                <div className="inputWrapper">
                    <label htmlFor="source" className='from'>FROM</label>
                    <input type='text' id='source' value={from} onChange={(e) => setFrom(e.target.value)} />
                </div>
                <button type='switch' className='switch' onClick={switching}><GoArrowSwitch size={20} /></button>
                <div className="inputWrapper">
                    <label className='to' htmlFor="destination">TO</label>
                    <input type='text' id='destination' value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
                <div className="inputWrapper">
                    <label className='date' htmlFor="date">DATE</label>
                    <input type='date' id='date' />
                </div>
                <button className='button1' type='search' onClick={searchbus}>Search buses</button>

            </div>
            <div style={{textAlign: 'center'}}>
                <img className='smallimg' src={smallredbus} />
            </div>
        </>
    )
}

export default Searchbar