import React, { useRef } from "react";

const { kakao } = window;
// 스크립트로 kakao maps api를 심어서 가져오면 window 전역 객체에 들어가게 된다.
// 그리고 그걸 사용하려면 window에서 kakao 객체를 뽑아서 사용하면 된다.

// 정기적으로 위치 정보 얻기
const MapContainer2 = props => {
  const [latitude, setLatitude] = React.useState();
  const [longtitude, setLogintitude] = React.useState();
  const [load, setLoad] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!latitude && !longtitude && load === 0) {
        window.location.reload();
        console.log("2")
      }
    }, 500);

    // Geolocation API에 액세스할 수 있는지를 확인
    if (navigator.geolocation) {
      //위치 정보를 정기적으로 얻기
      navigator.geolocation.watchPosition(function (pos) {
        setLatitude(pos.coords.latitude);
        setLogintitude(pos.coords.longitude);
      });
    } else {
      alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }

    // 카카오 지도 API 사용
    const container = document.getElementById("myMap");

    const options = {
      center: new kakao.maps.LatLng(latitude, longtitude),
      level: 1,
    };
    const map = new kakao.maps.Map(container, options); // 지도를 생성합니다.

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(latitude, longtitude);

    // 마커를 생성 합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시 되도록 설정합니다
    marker.setMap(map);

    map.relayout();

    return () => {
      clearTimeout(timer);
    };
  }, [latitude, longtitude]);
  // useEffect를 이용하여 렌더링 될 때 지도를 띄우는 데, 2번째 인자로 []를 줘서 처음 렌더링 될 때 한번만 띄우게 한다.

  return (
    <div>
      <div
        style={{ margin: "auto", width: "500px", height: "500px" }}
        id="myMap"
      ></div>
      <p>위도 : {latitude}</p>
      <p>경도 : {longtitude}</p>
    </div>
  );
};

export default MapContainer2;
