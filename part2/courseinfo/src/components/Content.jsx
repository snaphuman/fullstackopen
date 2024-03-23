import Part from "./Part";

const Content = ({ parts }) => 
  <>
  <ul>
      {
        parts.map(part =>
            <Part {...part} />
        )
    }

  </ul>
  </>;

export default Content;