import React from "react";

const Bubble = () => {
  const style = { area: [], gap: [] }; // div들을 담고 있는 객체
  let checkCircle = ''; // 현재 재생 중인 음성의 index가 무엇인 지 담는다.

  const makeColor = () => {
    // 랜덤 색상 추출하는 함수
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`; // rgb color code
  };

  for (let i = 0; i < 10; i++) {
    style.area.push(Math.ceil(Math.random() * (100 - 40) + 40)); // 동그라미
    style.gap.push(Math.ceil(Math.random() * (10 - 5) + 5)); // 간격
    // style.rgb.push(makeColor()); // 색상
  }

  // 사용자가 들은 음성들의 색상을 칠해준다.
  const changeColor = (index) => {
    let x = document.getElementById(index);
    checkCircle = x; // 바꿔치기
    checkCircle.style.backgroundColor = makeColor();
  }

  // ** 사용자가 누른 div만 랜덤한 색상으로 활성화 **
  const changeColor2 = (index) => {
    if(checkCircle === ''){ // 전에 눌렀던 게 없을 때
      let x = document.getElementById(index);
      x.style.backgroundColor = makeColor();
      checkCircle = x;
    }else if(parseInt(checkCircle.id) === index){
      console.log("눌렀던 거 또 누름")
    }else{ // 전에 눌렀던 음성이 있으면 다시 비활성화
      checkCircle.style.backgroundColor = "grey";
      let x = document.getElementById(index);
      checkCircle = x; // 바꿔치기
      checkCircle.style.backgroundColor = makeColor();
    }
  }

  // ** 사용자가 누른 div만 정해진 색상으로 활성화 **
  const changeColor3 = (index) => {
    if(checkCircle === ''){ // 전에 눌렀던 게 없을 때
      let x = document.getElementById(index);
      x.style.backgroundColor = 'purple';
      checkCircle = x;
    }else if(parseInt(checkCircle.id) === index){
      console.log("눌렀던 거 또 누름")
    }else{ // 전에 눌렀던 음성이 있으면 다시 비활성화
      checkCircle.style.backgroundColor = "grey";
      let x = document.getElementById(index);
      checkCircle = x; // 바꿔치기
      checkCircle.style.backgroundColor = 'purple'; // 정해진 색상으로만 활성화 되게
    }
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
              id={index}
              style={{
                width: `${item}px`,
                height: `${item}px`,
                backgroundColor: "grey",
                borderRadius: "50%",
                marginRight: `${style.gap[index]}px`,
                marginBottom: `-${style.gap[index]}px`,
              }}
              onClick={()=>{changeColor3(index)}}
            ></p>
          );
        })}
      </div>
    </div>
  );
};

export default Bubble;
