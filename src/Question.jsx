import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Question({title, info}) {

    const [expanded, setExpanded] = useState(false);
   
    return (
      <>
      <article className="question">
            <header>
                <h4>{title}</h4>
                <button 
                className="btn"
                onClick={() => setExpanded(!expanded)}>
                    {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
        {expanded && <p>{info}</p>}
        </article>
      </>
    )
}