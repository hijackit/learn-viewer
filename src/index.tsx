import * as React from "react";
import * as ReactDOM from "react-dom";
import * as panels from "./panels";
import * as grid from "./Grid";

import { App } from "./App";

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

// function loop() {
//     panels.render();
//     window.requestAnimationFrame(loop);
// }

// window.requestAnimationFrame(loop);
