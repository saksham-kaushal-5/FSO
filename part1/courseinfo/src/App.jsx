/* eslint-disable react/prop-types */
import './App.css'

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

// function Part({ name, exercise }) {
//   return <p>{part} {exercise}</p>
// }

const Part = ({name, exercise}) => {
  return <p>{name} {exercise}</p>
}

// function Content({ content }) {
//   return (
//     <div>
//       {content.map((ele, index) => (
//         <Part key={index} part={ele.part} exercise={ele.exercise} />
//       ))}
//     </div>
//   )
// }

const Content = ({part1, part2, part3}) => {
  return (
    <>
      <Part name={part1.name} exercise={part1.exercises}/>
      <Part name={part2.name} exercise={part2.exercises}/>
      <Part name={part3.name} exercise={part3.exercises}/>
    </> 
  )

}

// function Total({ exercises }) {
//   const sum = exercises.reduce((total, ele) => total + ele, 0)
//   return <p>Number of exercises {sum}</p>
// }

const Total = ({part1, part2, part3}) => {
  return (
    <p>No of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )
}

// function App() {
//   const course = 'Half Stack application development'
//   const content = [
//     { part: 'Fundamentals of React', exercise: 10 },
//     { part: 'Using props to pass data', exercise: 7 },
//     { part: 'State of a component', exercise: 14 }
//   ]

//   // Directly pass the content's exercise values to Total
//   const exercises = content.map(item => item.exercise)

//   return (
//     <div>
//       <Header course={course} />
//       <Content content={content} />
//       <Total exercises={exercises} />
//     </div>
//   )
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
  <div>
    <Header course={course} />
    <Content part1 = {part1} part2 = {part2} part3 = {part3}/>
    <Total part1 = {part1} part2 = {part2} part3 = {part3}/>
  </div>
  )
}

export default App
