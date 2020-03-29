import React from "react";

export interface ThumbnailProps {
  onClick: VoidFunction;
  title: string;
}

export function Thumbnail(props: ThumbnailProps) {
  return (<div className="thumbnail" onClick={props.onClick}>{props.title}</div>);
}
