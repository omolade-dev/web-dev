function App() {
  var count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
