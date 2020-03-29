import * as React from "react";
import * as ReactDOM from "react-dom";
import * as panels from "./panels";

import { App } from "./App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);

function loop() {
    panels.render();
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
