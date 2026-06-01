function App() {
  var isDone = true;

  const strikeThrough = {
    textDecoration: "line-through"
  };

  return (
    <div>
      <h1 style={isDone ? strikeThrough : null  }>Buy Milk</h1>
    </div>
  );
}

export default App;
