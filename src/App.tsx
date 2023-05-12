import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Editor } from "./pages/Editor";

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/editor" exact component={Editor} />
    </BrowserRouter>
  );
};
