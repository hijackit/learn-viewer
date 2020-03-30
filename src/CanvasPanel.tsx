import { Panel } from "./Panel";
import React from "react";
import * as panels from "./panels";

interface CanvasPanelProps {
  id: number,
}

export function CanvasPanel(props: CanvasPanelProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const panel = panels.newPanel(canvasRef.current, props.id);

    let keydown = function (e: KeyboardEvent) {
      if (e.code === "ArrowLeft")
        panel.rotate(-10);
      else if (e.code === "ArrowRight")
        panel.rotate(10);
    };

    document.addEventListener('keydown', keydown);

    return function cleanup() {
      panels.disposePanel(panel);
      document.removeEventListener('keydown', keydown);
    };
  }, []);

  return (
    <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef}></canvas>
  );
}
