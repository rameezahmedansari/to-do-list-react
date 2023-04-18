import React from "react";

const Student = ({ name, age, address }) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h2>{age}</h2>
      <p>{address}</p>
    </div>
  );
};

export default Student;
