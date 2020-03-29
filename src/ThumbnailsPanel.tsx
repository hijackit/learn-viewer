import { Thumbnail } from "./Thumbnail";
import React from "react";

interface ThumbnailsPanelProps {
  openImage: (url: string) => void;
}

export function ThumbnailsPanel(props: ThumbnailsPanelProps) {
  return (<div className="left-column">
    <Thumbnail onClick={() => props.openImage('images/hand_0.jpg')} title='Hands' />
    <Thumbnail onClick={() => props.openImage('images/camping.jpg')} title='Camping' />
    <Thumbnail onClick={() => props.openImage('images/dino.jpg')} title='Dino' />
    <Thumbnail onClick={() => props.openImage('images/rock.jpg')} title='Rockefeller' />
    <Thumbnail onClick={() => props.openImage('images/sf.jpg')} title='San Francisco' />
  </div>);
}
