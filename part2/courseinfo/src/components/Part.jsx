

const Part = ({ name, id, exercises }) => 
  <li key={id}>
    {name} {exercises}
  </li>;

export default Part;
