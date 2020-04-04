import * as React from "react";
import { ThumbnailsPanel } from "./ThumbnailsPanel";
import { CanvasPanel } from "./CanvasPanel";
import { OpenImageButton } from "./OpenImageButton";
import { getPanel, getPanels } from "./panels";
import { Tool } from "./Panel";
import ButtonsToolbar from "./ButtonsToolbar";
import styled from 'styled-components';
import './index.css';
import { GridPanel } from "./GridPanel";
import * as grid from './Grid';

// const Grid = styled.div<{columns:number, rows:number}>`
//   display: grid;
//   grid-gap: 1px;
//   background-color: #933;
//   width: 100%;
//   height: 100%;
//   grid-template-columns: repeat(${props => props.columns}, 1fr);
//   grid-template-rows: repeat(${props => props.rows}, 1fr);
// `

const FooterButton = styled.div`
  display: inline-block;
  width: 4em;
  cursor: pointer;
`

export function App() {
  // const panelGrid = React.useRef<HTMLDivElement>();
  const [layout, setLayout] = React.useState([2,2]);

  // const canvasPanels = [];

  // initialize all the panels
  // for (let index = 0; index < 9; index++) {
  //   let visiblePanels = layout[0]*layout[1];
  //   canvasPanels.push(<CanvasPanel key={index} id={index} visible={index < visiblePanels}/>);
  // }

  return (
    <div className="grid-wrapper">
        <div className="header">ROSSI MARIO</div>
        <div className="left-column">
          <ThumbnailsPanel />
        </div>
        <div className="main-area">
          {/* <Grid rows={layout[0]} columns={layout[1]} 
            onMouseMove={e => getPanels().forEach(p => p.onMouseMove(e.nativeEvent))}
            onMouseUp={e => getPanels().forEach(p => p.onMouseUp(e.nativeEvent))}
            > 
            {canvasPanels}
          </Grid> */}
          <GridPanel />
        </div>
        <div id="right-column">
          <ButtonsToolbar />
        </div>
        <div className="footer">
          <FooterButton onClick={e=>grid.get().setLayout(1,1)}>1x1</FooterButton>
          <FooterButton onClick={e=>setLayout([1,2])}>1x2</FooterButton>
          <FooterButton onClick={e=>setLayout([2,1])}>2x1</FooterButton>
          <FooterButton onClick={e=>setLayout([2,2])}>2x2</FooterButton>
          <FooterButton onClick={e=>setLayout([3,2])}>3x2</FooterButton>
          <FooterButton onClick={e=>setLayout([2,3])}>2x3</FooterButton>
          <FooterButton onClick={e=>setLayout([3,3])}>3x3</FooterButton>
        </div>
    </div>
  )
}