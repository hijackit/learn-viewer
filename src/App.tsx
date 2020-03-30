import * as React from "react";
import { ThumbnailsPanel } from "./ThumbnailsPanel";
import { CanvasPanel } from "./CanvasPanel";
import { OpenImageButton } from "./OpenImageButton";
import { getPanel } from "./panels";
import { Tool } from "./Panel";

export interface HelloProps { compiler: string; framework: string; }

export function App(props:HelloProps) {
  const [mouseTool, setMouseTool] = React.useState('PAN');
  const [verticalFlip, setVerticalFlip] = React.useState(false);
  const [horizontalFlip, setHorizontalFlip] = React.useState(false);

  return (
    <div className="grid-wrapper">
        <div className="header">ROSSI MARIO</div>
        <ThumbnailsPanel />
        <div className="main-area">
          <CanvasPanel id={0}/>
        </div>
        <div id="right-column">
          <OpenImageButton />
          <div className="toolbar-button" onClick={() => {getPanel(0)?.fit()}}>Fit</div>
          <div className={'toolbar-button ' + (mouseTool=='PAN' ? 'selected' : '')} 
            onClick={() => {
              setMouseTool('PAN');
              getPanel(0).setLeftButtonTool(Tool.PAN);
              }}>Pan</div>
          <div className={'toolbar-button ' + (mouseTool=='ZOOM' ? 'selected' : '')} 
            onClick={() => {
              setMouseTool('ZOOM');
              getPanel(0).setLeftButtonTool(Tool.ZOOM);
            }}>Zoom</div>
          <div className={'toolbar-button ' + (mouseTool=='ROTATE' ? 'selected' : '')} 
            onClick={() => {
              setMouseTool('ROTATE');
              getPanel(0).setLeftButtonTool(Tool.ROTATE);
            }}>Rotate</div>
          <div className={'toolbar-button'} 
            onClick={() => {getPanel(0)?.setZoom(1)}}>1:1</div>
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
        <div className="footer">footer</div>
    </div>
  )
}
