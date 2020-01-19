import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Hello world</h1>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
