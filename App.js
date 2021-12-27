import "./App.css";
import React from "react";
import MapContainer from "./MapContainer";
import MapContainer2 from "./MapContainer2";
import MapContainer3 from "./MapContainer3";
import Music from "./Music";
import Music2 from "./Music2";
import Timer from "./Timer";

import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to={"/container"}>시도1</Link> &nbsp;
      <Link to={"/container2"}>시도2</Link> &nbsp;
      <Link to={"/container3"}>마커 이벤트 추가</Link> &nbsp;
      <Link to={"/multiFile"}>파일 여러 개 올리기</Link>
      <Link to={"/timer"}>타이머</Link>
      <br></br>
      <br></br>
      <br></br>
      <Music
        urls={[
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        ]}
      />
      <br />
      <br />
      <Music2></Music2>
      <Route path="/container" exact component={MapContainer}></Route>
      <Route path="/container2" exact component={MapContainer2}></Route>
      <Route path="/container3" exact component={MapContainer3}></Route>
      <Route path="/music" exact component={Music}></Route>
      <Route path="/timer" exact component={Timer}></Route>
    </div>
  );
}

export default App;
