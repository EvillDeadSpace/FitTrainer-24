import { useState } from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Global.css";
import Home from "./pages/Home";

import Wraper from "./Wraper";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Wraper>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Layout setProgress={setProgress} />
      </Wraper>
    </>
  );
}

export default App;
