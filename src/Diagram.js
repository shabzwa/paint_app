import CanvasDraw from "react-canvas-draw";

// import ColorPicker, { useColor } from "react-color-palette";
import { useState } from "react";
function Diagram() {
  const [canvas, setBrush] = useState("#FCA5A5");
  const [brush, setThick] = useState(50);
  // const [color, setColor] = useColor("hex", "#121212");
  // const c = "#FCA5A5";
  const style = {
    width: brush + "px",
    background: canvas,
    marginLeft: "50%"
  };
  console.log(style.width);
  return (
    <div className="container">
      <CanvasDraw
        ref={(canvasDraw) => (this.modify = canvasDraw)}
        brushColor={canvas}
        brushRadius={brush}
        canvasHeight="50vh"
        hideGrid={true}
        canvasWidth="80vw"
      />
      {/* <button
        onClick={() => {
          setBrush("#7F1D1D");
        }}
      >
        color
      </button> */}
      <button
        onClick={() => {
          this.modify.undo();
        }}
      >
        UNDO
      </button>
      <button
        onClick={() => {
          this.modify.clear();
        }}
      >
        CLEAR
      </button>
      {/* <button
        onClick={() => {
          this.modify.getSaveData();
        }}
      >
        SAVE
      </button> */}
      {/* <ColorPicker width={200} height={200} color={color} onChange={setColor} />
      ;
      <Palette /> */}
      <br />
      <label>Colour picker</label>
      <input
        style={{ background: { canvas } }}
        type="color"
        value={canvas}
        onChange={(event) => {
          console.log(event.target.value);
          setBrush(event.target.value);
        }}
      />

      <br />
      <label>Brush Thickness</label>
      {/* <input
        type="color"
        value={canvas}
        onChange={(event) => {
          console.log(event.target.value);
          setBrush(event.target.value);
        }}
      /> */}
      <div className="thickness" style={style}></div>
      <input
        min="2"
        max="50"
        type="range"
        onChange={(event) => {
          console.log(event.target.value);
          setThick(event.target.value);
        }}
      />
    </div>
  );
}
export default Diagram;
