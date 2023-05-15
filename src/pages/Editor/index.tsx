import React from "react";
import AceEditor from "react-ace";
import { config } from "ace-builds";
import "ace-builds/src-noconflict/mode-html";
import jsWorkerUrl from "ace-builds/src-noconflict/worker-html";
config.setModuleUrl("ace/mode/html_worker", jsWorkerUrl);

export const Editor = (): React.ReactElement => {
  return (
    <div style={{ height: "100vh", maxWidth: "100vw" }}>
      <AceEditor
        onChange={() => {}}
        mode="html"
        height="100%"
        width="100%"
        setOptions={{ showLineNumbers: true }}
        fontSize={14}
        showGutter={true}
        tabSize={2}
      />
    </div>
  );
};
