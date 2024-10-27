import React, { useState } from 'react'
import data from './data.js'
import SingleQuestion from './Question.jsx'


function App() {
 
  

  return (
    <>
    <main>
      <div className="container">
        <h3>Questions and Answers</h3>
        <section className="info">
          {data.map((question) => {
          return <SingleQuestion key={question.id} {...question}/>
          })}
        </section>
       
      </div>
    </main>
    </>
  )
}

export default App
