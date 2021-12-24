import React from "react";
import ReactWordcloud from "react-wordcloud";

const words = [
  {
    text: "told",
    value: 64,
  },
  {
    text: "mistake",
    value: 400,
  },
  {
    text: "thought",
    value: 100,
  },
  {
    text: "bad",
    value: 30,
  },
  {
    text: "동원",
    value: 64,
  },
  {
    text: "참치",
    value: 400,
  },
  {
    text: "24",
    value: 100,
  },
  {
    text: "귀여움",
    value: 30,
  },
];

const SimpleWordcloud = () => {
  return <ReactWordcloud words={words} />;
};

export default SimpleWordcloud;
