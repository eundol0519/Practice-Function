import React from "react";

const Bubble = () => {
  const style = {area : [], gap : [], rgb : []};

  const makeColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      return `rgb(${r}, ${g}, ${b})`; // rgb color code
  }

  for (let i = 0; i < 10; i++) {
    style.area.push(Math.ceil(Math.random() * (100-50) + 40));
    style.gap.push(Math.ceil(Math.random() * (10-5) + 5));
    style.rgb.push(makeColor());
  }

  return (
    <div>
      <div
        style={{
          width: "23%",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {style.area.map((item, index) => {
          return (
            <p
              key={item}
              style={{
                width: `${item}px`,
                height: `${item}px`,
                backgroundColor: `${style.rgb[index]}`,
                borderRadius: "50%",
                marginRight: `${style.gap[index]}px`,
                marginBottom: `-${style.gap[index]}px`,
              }}
              onClick={()=>{style.check = true}}
            ></p>
          );
        })}
      </div>
    </div>
  );
};

export default Bubble;
