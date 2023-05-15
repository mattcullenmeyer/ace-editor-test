import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Editor } from "./pages/Editor";

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Editor} />
    </BrowserRouter>
  );
};
