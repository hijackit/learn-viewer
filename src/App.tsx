import * as React from "react";
import { ThumbnailsPanel } from "./ThumbnailsPanel";
import ButtonsToolbar from "./toolbar/ButtonsToolbar";
import styled from 'styled-components';
import './index.css';
import { GridPanel } from "./GridPanel";

const FooterText = styled.div`
  display: inline-block;
`

export function App() {
  return (
    <div className="grid-wrapper">
        <div className="header">IMAGE VIEWER</div>
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
          <FooterText>Version 0.0.1</FooterText>
        </div>
    </div>
  )
}