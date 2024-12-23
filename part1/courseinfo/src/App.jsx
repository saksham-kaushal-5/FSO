/* eslint-disable react/prop-types */
import './App.css'

function Header({ course }) {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

function Part({ part, exercise }) {
  return <p>{part} {exercise}</p>
}

function Content({ content }) {
  return (
    <div>
      {content.map((ele, index) => (
        <Part key={index} part={ele.part} exercise={ele.exercise} />
      ))}
    </div>
  )
}

function Total({ exercises }) {
  const sum = exercises.reduce((total, ele) => total + ele, 0)
  return <p>Number of exercises {sum}</p>
}

function App() {
  const course = 'Half Stack application development'
  const content = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7 },
    { part: 'State of a component', exercise: 14 }
  ]

  // Directly pass the content's exercise values to Total
  const exercises = content.map(item => item.exercise)

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
