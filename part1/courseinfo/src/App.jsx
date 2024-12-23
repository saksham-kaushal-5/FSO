/* eslint-disable react/prop-types */
import './App.css';

const Header = ({ course }) => (
  <div>
    <h1>{course}</h1>
  </div>
);

const Part = ({ part, exercise }) => (
  <p>{part} {exercise}</p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((ele, index) => (
      <Part key={index} part={ele.part} exercise={ele.exercise} />
    ))}
  </div>
);

const Total = ({ exercises }) => {
  const sum = exercises.reduce((total, ele) => total + ele, 0);
  return <p>Number of exercises {sum}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7 },
    { part: 'State of a component', exercise: 14 },
  ];

  // Directly pass the content's exercise values to Total
  const exercises = parts.map(item => item.exercise);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
