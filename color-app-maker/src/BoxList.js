import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const add = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };
  const handleRemove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  const boxComponent = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      backgroundColor={box.backgroundColor}
      handleRemove={handleRemove}
    />
  ));
  return (
    <div>
        <NewBoxForm addBox ={add} />
        {boxComponent}
    </div>
  )
};
export default BoxList;