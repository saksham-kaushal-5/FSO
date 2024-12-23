/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './App.css'

function Header(props){
  console.log(props)
  
  return (
  <>
    <div>
      <h1>{props.course}</h1>
    </div>
  </>
  )
}

function Part({part, exercise}){
  
  return(
    <p>{part} {exercise}</p>
  )
}

function Content({content}){
  console.log(content)

  return(
    <>
    <div>
      {content.map((ele) => (
        <Part part = {ele.part} exercise = {ele.exercise} />
      ))}
    </div>
    </>
  )
}

function Total({exercise}){
  console.log(exercise)
  let sum = exercise.reduce((total,ele) => total + ele, 0)
  return (
    <>
    <p>Number of exercises {sum}</p>
    </>

  )
}



function App() {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise:7},
    {part: 'State of a component', exercise:14}
  ]

  const exercises = content.map(item => item.exercise)

  return (
    <>
    <div>
      <Header course = {course}/>
      <Content content = {content}/>
      <Total exercise={exercises}/>
    </div>
    </>
  )
}

export default App
