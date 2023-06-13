import { useState } from "react";
import "./App.css";

type Rect = {
  type: "rect";
  width: number;
  height: number;
};

function App() {
  const [shapes, setShapes] = useState<Rect[]>([]);

  const addShape = () => {
    setShapes([...shapes, { type: "rect", width: 100, height: 100 }]);
  };

  return (
    <>
      <div>
        <button onClick={addShape}>Add Shape</button>
        {shapes.map((shape, index) => (
          <div key={index}>
            {shape.type === "rect" && (
              <div
                style={{
                  width: shape.width,
                  height: shape.height,
                  backgroundColor: "red",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
