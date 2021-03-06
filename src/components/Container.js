// Given a table of random users generated from the Random User API, when the user loads the page, a table of employees should render.

// The user should be able to:
// Sort the table by at least one category
// Filter the users by at least one property.

import React from "react";

function Container(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;