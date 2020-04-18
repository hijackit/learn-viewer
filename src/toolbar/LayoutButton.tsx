import React, { useState } from "react"
import { PopLeft } from "./PopLeft";
import LayoutOption from "./LayoutOption";
import * as grid from "../Grid";
import layout1x1 from './icons/1x1.png';
import layout2x1 from './icons/2x1.png';
import layout1x2 from './icons/1x2.png';
import layout2x2 from './icons/2x2.png';
import layout3x3 from './icons/3x3.png';
import layout3x2 from './icons/3x2.png';
import layout2x3 from './icons/2x3.png';

function LayoutButton(props: any) {
  const [show, setShow] = useState(false)

  return (
    <div
      className='toolbar-button'
      style={{ position: 'relative' }}
      onClick={() => setShow(!show)}>
      layout
      {show && 
        <PopLeft>
          <LayoutOption icon={layout1x1} onClick={() => grid.get().setLayout(1,1)}/>
          <LayoutOption icon={layout2x1} onClick={() => grid.get().setLayout(2,1)}/>
          <LayoutOption icon={layout1x2} onClick={() => grid.get().setLayout(1,2)}/>
          <LayoutOption icon={layout2x2} onClick={() => grid.get().setLayout(2,2)}/>
          <LayoutOption icon={layout3x2} onClick={() => grid.get().setLayout(3,2)}/>
          <LayoutOption icon={layout2x3} onClick={() => grid.get().setLayout(2,3)}/>
          <LayoutOption icon={layout3x3} onClick={() => grid.get().setLayout(3,3)}/>
        </PopLeft>
      }
    </div>
  )
}

export default LayoutButton;