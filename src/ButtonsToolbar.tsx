import { getPanel } from "./panels";
import React from "react";
import { OpenImageButton } from "./OpenImageButton";
import { Tool } from "./Panel";

function ButtonsToolbar() {
  const [mouseTool, setMouseTool] = React.useState('ZOOM');
  const [verticalFlip, setVerticalFlip] = React.useState(false);
  const [horizontalFlip, setHorizontalFlip] = React.useState(false);

  return (
    <div>
      <OpenImageButton />
      <div className="toolbar-button" onClick={() => { getPanel(0)?.fit() }}>Fit</div>
      <div className={'toolbar-button ' + (mouseTool == 'PAN' ? 'selected' : '')}
        onClick={() => {
          setMouseTool('PAN');
          getPanel(0).setLeftButtonTool(Tool.PAN);
        }}>Pan</div>
      <div className={'toolbar-button ' + (mouseTool == 'ZOOM' ? 'selected' : '')}
        onClick={() => {
          setMouseTool('ZOOM');
          getPanel(0).setLeftButtonTool(Tool.ZOOM);
        }}>Zoom</div>
      <div className={'toolbar-button ' + (mouseTool == 'ROTATE' ? 'selected' : '')}
        onClick={() => {
          setMouseTool('ROTATE');
          getPanel(0).setLeftButtonTool(Tool.ROTATE);
        }}>Rotate</div>
      <div className={'toolbar-button'}
        onClick={() => { getPanel(0)?.setZoom(1) }}>1:1</div>
      <div className={'toolbar-button ' + (horizontalFlip ? 'selected' : '')}
        onClick={() => {
          setHorizontalFlip(!horizontalFlip);
          getPanel(0)?.toggleHorizontalFlip();
        }}>H-Flip</div>
      <div className={'toolbar-button ' + (verticalFlip ? 'selected' : '')}
        onClick={() => {
          setVerticalFlip(!verticalFlip);
          getPanel(0)?.toggleVerticalFlip();
        }}>V-Flip</div>
    </div>
  )
}

export default ButtonsToolbar;