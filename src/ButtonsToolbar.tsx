import React from "react";
import { OpenImageButton } from "./OpenImageButton";
import { Tool } from "./Tool";
import * as grid from "./Grid";

function ButtonsToolbar() {
  const [mouseTool, setMouseTool] = React.useState('ZOOM');
  const [verticalFlip, setVerticalFlip] = React.useState(false);
  const [horizontalFlip, setHorizontalFlip] = React.useState(false);
  const [link, setLink] = React.useState(false);

  return (
    <div>
      <OpenImageButton />

      <div className={'toolbar-button ' + (link ? 'selected' : '')}
        onClick={() => { 
          setLink(!link);
          grid.get().toggleLink();
        }}>Link</div> 

      <div className={'toolbar-button ' + (mouseTool == 'ZOOM' ? 'selected' : '')}
        onClick={() => {
          setMouseTool('ZOOM');
          grid.get().setLeftButton(Tool.ZOOM);
        }}>Zoom</div>

      <div className={'toolbar-button ' + (mouseTool == 'PAN' ? 'selected' : '')}
        onClick={() => {
          setMouseTool('PAN');
          grid.get().setLeftButton(Tool.PAN);
        }}>Pan</div>

      <div className={'toolbar-button ' + (mouseTool == 'ROTATE' ? 'selected' : '')}
        onClick={() => {
          setMouseTool('ROTATE');
          grid.get().setLeftButton(Tool.ROTATE);
        }}>Rotate</div>

      <div className="toolbar-button" 
        onClick={() => { 
          grid.get().fit();
        }}>Fit</div>

      <div className={'toolbar-button'}
        onClick={() => { grid.get().actualSize(); }}>Actual zize</div>

      <div className={'toolbar-button ' + (horizontalFlip ? 'selected' : '')}
        onClick={() => {
          setHorizontalFlip(!horizontalFlip);
          grid.get().toggleHorizontalFlip();
        }}>H-Flip</div>

      <div className={'toolbar-button ' + (verticalFlip ? 'selected' : '')}
        onClick={() => {
          setVerticalFlip(!verticalFlip);
          grid.get().toggleVerticalFlip();
        }}>V-Flip</div>
    </div>
  )
}

export default ButtonsToolbar;