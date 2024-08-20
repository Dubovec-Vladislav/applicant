import React from "react";
import "./App.css";
import { DatePicker, Steps } from "antd";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            description: "This is a description.",
          },
          {
            title: "In Progress",
            description: "This is a description.",
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description: "This is a description.",
          },
        ]}
      />
    </div>
  );
}

export default App;
