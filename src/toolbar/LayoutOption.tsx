import React from "react";
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: inline-block;
  padding: 0.5em;
  border-left: 1px solid #933;
  border-top: 1px solid #933;
  border-bottom: 1px solid #933;
  opacity: 0.7;
  background-color: #000;

  &:hover {
    opacity: 1;
  }
`

const StyledImg = styled.img`
  width: 2.5em;
`

function LayoutOption(props: any) {
  return (
    <StyledSpan className='layout-option' onClick={props.onClick}>
      <StyledImg src={props.icon} />
    </StyledSpan>
  )
}

export default LayoutOption;