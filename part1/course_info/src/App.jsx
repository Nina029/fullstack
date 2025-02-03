//Parts of the webpage 

const Header = (props) => {
  console.log(props)
  return (
    <div>
     <h1>{props.course}</h1>
    </div>
  )
}


const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}



const Content = () => {
 
  return (
    <div>
       <Part part='Fundamentals of React' exercises={10} />
      <Part part='Using props to pass data' exercises={7} />
      <Part part='State of a component' exercises={14} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}



const App = () => {

  //Number of exercises in each part
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

// Full content of the webpage using components
  return (
    <div>
      <Header course='Half Stack application development' />
      <Content  />
      <Total part='State of a component' exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
