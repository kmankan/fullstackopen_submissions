const Course = ({course}) => {
  return (
    <div> 
      <h2>Web Development Curriculum</h2>
          {course.map((framework,index) => (
            <div key={framework.id}>
              <h3>{framework.name}</h3>
              <Content parts={framework.parts}/>
              <h4>
                total of {framework.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)} exercises
              </h4>
            </div>
          ))}
    </div>
  )
}


const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <div key={part.id}>
          {part.name} {part.exercises}
        </div>
    ))}
    </div>
  )
}

export default Course