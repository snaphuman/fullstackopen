import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

  
  const Course = ({course, parts}) => {

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
        </div>
    )

  }

  export default Course;
