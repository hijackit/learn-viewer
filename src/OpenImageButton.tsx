import React from "react";

interface OpenImageButtonProps {
  setImage: (bitmap: ImageBitmap) => void;
}
export function OpenImageButton(props: OpenImageButtonProps) {
  const fileInput = React.useRef<HTMLInputElement>();
  return (<div>
    <div className="toolbar-button" onClick={() => {
      fileInput.current.click();
    }}>Open..</div>

    <input type="file" ref={fileInput} accept="image/*" style={{ display: "none" }} onChange={e => {
      let input = e.target;
      var reader = new FileReader();
      reader.onload = function () {
        var dataURL = reader.result.toString();
        const image = new Image();
        image.onload = function () {
          createImageBitmap(image).then(bitmap => props.setImage(bitmap));
        };
        image.onerror = function (error) {
          console.error('error loading selected image')
        }
        image.src = dataURL;
      };
      reader.readAsDataURL(input.files[0]);
    }} />
  </div>);
}
