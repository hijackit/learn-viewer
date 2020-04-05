import * as React from "react";
import { ThumbnailsPanel } from "./ThumbnailsPanel";
import { CanvasPanel } from "./CanvasPanel";
import { OpenImageButton } from "./OpenImageButton";
import { getPanel, getPanels } from "./panels";
import { Tool } from "./Tool";
import ButtonsToolbar from "./ButtonsToolbar";
import styled from 'styled-components';
import './index.css';
import { GridPanel } from "./GridPanel";
import * as grid from './Grid';

const FooterButton = styled.div`
  display: inline-block;
  width: 4em;
  cursor: pointer;
`

export function App() {
  return (
    <div className="grid-wrapper">
        <div className="header">ROSSI MARIO</div>
        <div className="left-column">
          <ThumbnailsPanel />
        </div>
        <div className="main-area">
          <GridPanel />
        </div>
        <div id="right-column">
          <ButtonsToolbar />
        </div>
        <div className="footer">
          <FooterButton onClick={e=>grid.get().setLayout(1,1)}>1x1</FooterButton>
          <FooterButton onClick={e=>grid.get().setLayout(1,2)}>1x2</FooterButton>
          <FooterButton onClick={e=>grid.get().setLayout(2,1)}>2x1</FooterButton>
          <FooterButton onClick={e=>grid.get().setLayout(2,2)}>2x2</FooterButton>
          <FooterButton onClick={e=>grid.get().setLayout(2,3)}>2x3</FooterButton>
          <FooterButton onClick={e=>grid.get().setLayout(3,2)}>3x2</FooterButton>
          <FooterButton onClick={e=>grid.get().setLayout(3,3)}>3x3</FooterButton>
        </div>
    </div>
  )
}