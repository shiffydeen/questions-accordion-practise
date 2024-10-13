import React, { useState } from 'react'
import data from './data.js'
import SingleQuestion from './Question.jsx'


function App() {
  const questions = data;

  // const toggleDisplay = () => {
  //   setDisplay(!display)
  // }

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
          <section className="info">
            {questions.map((question) => {
              return  <SingleQuestion key={question.id} {...question} />
            })}
        </section>
      </div>
    </main>
  )
}

export default App
