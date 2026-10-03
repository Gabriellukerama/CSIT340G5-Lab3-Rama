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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.parts[0].units + props.parts[1].units + props.parts[2].units}
    </p>
  )
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
  const parts = [
    {
      name: 'Data Analytics 1',
      units: 3
    },
    {
      name: 'Information Management 2',
      units: 3
    },
    {
      name: 'Project Management for IT',
      units: 3
    }
  ]

  const name = 'Gabriel Luke C. Rama'
  const code = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App