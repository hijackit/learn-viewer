import { Panel } from "./Panel";
import React from "react";
import * as panels from "./panels";

interface CanvasPanelProps {
  id: number,
  visible: boolean,
}

export function CanvasPanel(props: CanvasPanelProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>();

  React.useEffect(() => {
    panels.newPanel(canvasRef.current, props.id);
  }, []);

  return (
    <div style={{display: props.visible ? '' : 'none'}} >
      <canvas style={{ width: '100%', height: '100%' }}  className="test" ref={canvasRef} onContextMenu={e => e.preventDefault()}></canvas>
    </div>
  ); 
}
