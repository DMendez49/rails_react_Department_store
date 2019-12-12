import React from "react";
import Department from "./Department";

const Departments = (departments, ) => {
  // debugger
  return departments.map(department => (
    <Department key={department.id} {...department}/>
    ))
    // .catch(console.log)
};

export default Departments;


