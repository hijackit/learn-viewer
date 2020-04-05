import React from "react";
import * as grid from "./Grid";

interface GridPanelProps {

}

export function GridPanel(props: GridPanelProps) {
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    grid.init(ref.current);
  }, []);

  return (
    <div ref={ref}></div>
  )
}