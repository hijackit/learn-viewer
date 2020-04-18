import React, { useState, useRef, useEffect, useLayoutEffect, Children, Component } from "react";
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

      <DropleftButton >
        <ChildButton />
        <ChildButton />
        <ChildButton />
        <ChildButton />
      </DropleftButton>
    </div>
  )
}

function DropleftButton(props:any) {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  return(
    <div 
      className='toolbar-button'
      ref={ref}
      style={{position:'relative'}}
      onClick={() => {
          setShow(!show)
      }}>
        layout
        {show && <LeftPopover getParent={() => ref.current} > {props.children} </LeftPopover>}
      </div>
  )
}

interface ChildProps {
  getParent: () => HTMLElement,
  children: any
}

function LeftPopover(props: ChildProps) {

  const[right, setRight] = useState(0)
  const[height, setHeight] = useState(0)

  useLayoutEffect(() => {
    setRight(props.getParent().offsetWidth + 1)
    setHeight(props.getParent().getBoundingClientRect().height)
  })

  return (
    <div className='drop-left' style={{right: right, top: 0, height: height, width: '12em'}}>
      {props.children}
    </div>
  )
}


function ChildButton() {
  return (
    <span className='dropdown-child-button'>1x1</span>
  )
}

export default ButtonsToolbar;