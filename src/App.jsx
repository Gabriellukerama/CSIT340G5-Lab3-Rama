const Header = (props) => {
  return <h1>{props.course.name}</h1>
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
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.course.parts[0].units +
        props.course.parts[1].units +
        props.course.parts[2].units}
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
  const course = {
    name: 'Industry Elective 1',
    parts: [
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
  }

  const name = 'Gabriel Luke C. Rama'
  const code = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={name} code={code} section={section} />
    </div>
  )
}

export default App