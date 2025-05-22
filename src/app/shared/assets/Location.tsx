"use client";

import React, { type ReactElement, useEffect, useRef, useState } from "react";
import Script from "next/script";

import { Button } from "../components/buttons/Button";
import TextInput from "../components/inputs/TextInput";

declare global {
  interface Window {
    kakao: {
      maps: any;
    };
  }
}
const KAKAO_ADMIN_KEY = process.env.NEXT_PUBLIC_KAKAO_ADMIN_KEY;

const Location = (): ReactElement => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState<any[]>([]);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (!mapRef.current || !isKakaoLoaded) return;

    const initializeMap = (): void => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3
      };
      const mapInstance = new window.kakao.maps.Map(container, options);
      setMap(mapInstance);
    };

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        console.log("Kakao Maps API 로드 완료");
        initializeMap();
      });
    }
  }, [isKakaoLoaded]);

  const searchPlaces = (): void => {
    if (!window.kakao || !window.kakao.maps || !searchQuery) return;

    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(searchQuery, (data: any[], status: string) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(data);
      } else {
        console.error("검색 결과가 없습니다.");
      }
    });
  };

  const selectPlace = (place: any): void => {
    if (!map) return;

    const { x, y } = place;

    const coords = new window.kakao.maps.LatLng(y, x);
    map.setCenter(coords);

    const marker = new window.kakao.maps.Marker({
      position: coords
    });
    marker.setMap(map);
  };

  return (
    <div className="w-full h-full">
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_ADMIN_KEY}&libraries=services&autoload=false`}
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Kakao script loaded");
          if (window.kakao && window.kakao.maps) {
            setIsKakaoLoaded(true);
          } else {
            console.error("Kakao Maps API 로드 실패");
          }
        }}
      />

      {/* 지도 표시 영역 */}
      <div ref={mapRef} className="w-full h-[70vh]"></div>

      {/* 검색 기능 */}
      <div className="p-4 ">
        <div className="flex flex-col gap-2">
          <TextInput
            type="text"
            placeholder="장소를 검색하세요"
            value={searchQuery}
            onChange={(value) => setSearchQuery(value)}
            className="w-full p-2 border rounded"
          />
          <Button onClick={searchPlaces}>검색</Button>
        </div>

        {/* 검색 결과 표시 */}
        {places.length > 0 && (
          <ul className="mt-4 space-y-2">
            {places.map((place, index) => (
              <li
                key={index}
                className="p-2 border rounded cursor-pointer hover:bg-gray-100"
                onClick={() => selectPlace(place)}
              >
                {place.place_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Location;
