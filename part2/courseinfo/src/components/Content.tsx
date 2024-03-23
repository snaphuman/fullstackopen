import React from "react";
import Part from "../components/Part";

const Content = ({ parts }) => {



    return (
        <>
            <Part title={ parts[0].name} count={ parts[0].count } />
            <Part title={ parts[1].name} count={ parts[1].count } />
            <Part title={ parts[2].name} count={ parts[2].count } />
        </>
    )
}

export default Content;