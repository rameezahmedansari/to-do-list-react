function Child({ desc, alertIt }) {
  const childData = "Rizwan";
  return (
    <div>
      <h1>Child Component</h1>
      <p>{desc}</p>
      <button onClick={() => alertIt(childData)}>Send to parent</button>
    </div>
  );
}

export default Child;
