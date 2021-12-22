import React, { useState, useEffect } from "react";
import music1 from './music/계곡의 비.MP3';
import music2 from './music/굵은비 번개.MP3';


const Music2 = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // btn1을 눌렀을 때 sound1.mp3 재생
    document.querySelector(".btn1").addEventListener("click", function () {
      const audio1 = new Audio(music1);
      audio1.loop = false; // 반복재생하지 않음
      audio1.volume = 0.2; // 음량 설정
      audio1.play(); // sound1.mp3 재생
    });

    // btn2를 눌렀을 때 sound2.mp3 재생
    document.querySelector(".btn2").addEventListener("click", function () {
      const audio2 = new Audio(music2);
      audio2.loop = true; // 반복재생하지 않음
      audio2.volume = 0.2; // 음량 설정
      audio2.play(); // sound2.mp3 재생
      setTimeout(function () {
        // 1초 후 sound2.mp3 일시정지
        audio2.pause();
      }, 5000)
    });
  });

  return (
    <div>
      <button className="btn1">play sound1</button>
      <button className="btn2">play sound2</button>
    </div>
  );
};

export default Music2;
