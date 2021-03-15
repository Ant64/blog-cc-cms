import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Login from "./components/Login";

function App() {
  const [logIn, setlogIn] = React.useState(false);
  const onSubmit = (isLogIn) => setlogIn(isLogIn);

  return (
    <div className="App">
      <AppBar logIn={logIn} onSubmit={onSubmit} />
      <Login />
    </div>
  );
}

export default App;
