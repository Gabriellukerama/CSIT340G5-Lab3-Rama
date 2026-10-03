const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.code} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Industry Elective 1'
  const part1 = {
    name: 'Data Analytics 1',
    units: 3
  }
  const part2 = {
    name: 'Information Management 2',
    units: 3
  }
  const part3 = {
    name: 'Project Management for IT',
    units: 3
  }

  const name = 'Gabriel Luke C. Rama'
  const code = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App