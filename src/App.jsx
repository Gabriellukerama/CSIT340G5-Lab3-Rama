const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} units={props.units1} />
      <Part name={props.part2} units={props.units2} />
      <Part name={props.part3} units={props.units3} />
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
  const part1 = 'Data Analytics 1'
  const units1 = 3
  const part2 = 'Information Management 2'
  const units2 = 3
  const part3 = 'Project Management for IT'
  const units3 = 3

  const name = 'Gabriel Luke C. Rama'
  const code = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App