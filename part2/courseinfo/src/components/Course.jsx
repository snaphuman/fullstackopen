import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

  
  const Course = ({name, parts}) => {

    const add = (a, b) => a + b;

    const total = parts.map(part => part.exercises )
                       .reduce((total, excercise) => 
                        add(excercise, total), 0);

    return (
        <div>
            <Header course={name} />
            <Content parts={parts} />
            <Total sum={total} />
        </div>
    )

  }

  export default Course;
