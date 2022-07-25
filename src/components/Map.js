/*global kakao*/
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Map = () => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const container = useRef(null);

  const initMap = () => {
    const center = new kakao.maps.LatLng(36.6070385, 127.420712);
    const options = {
      center,
      level: 8,
    };
    const map = new kakao.maps.Map(container.current, options);
    setKakaoMap(map);

    var markerPosition = new kakao.maps.LatLng(36.6070385, 127.420712);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  };

  useEffect(() => {
    initMap();
  }, []);

  return <MapContainer id="KakaoMap" ref={container} />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  zindex: 0;
  margin: 0 auto;
`;

export default Map;
