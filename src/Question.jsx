import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Question({title, info}) {
    const [display, setDisplay] = useState(false)

    return (
       <article className="question">
            <header>
                <h4>{title}</h4>
                <button 
                className="btn"
                onClick={() => {
                    setDisplay(prev => !prev)
                }}>
                    {display ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
                {display === true && <p>{info}</p>}
            </header>
       </article>
    )
}