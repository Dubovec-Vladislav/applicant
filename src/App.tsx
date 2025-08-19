import React from "react";
import "./App.css";
import { DatePicker, Steps } from "antd";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Button variant="contained">Contained</Button>
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
