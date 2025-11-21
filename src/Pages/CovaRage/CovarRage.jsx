import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const CovarRage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
 // console.log(serviceCenters);
 const mapRaf = useRef(null);


  const handleSearch = e => {
    e.preventDefault();
    
    const location = e.target.location.value;
    const district = serviceCenters.find( c => c.district.toLowerCase().includes(location.toLowerCase()) );
    if(district){
        const coord = [district.latitude, district.longitude];
       // console.log(coord);
       
       // go to the location
       mapRaf.current.flyTo(coord, 12)
        
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl font-semibold ">
        We are available in 64 districts
      </h2>
      {/* search box */}
      <div className="py-2">
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" name="location" required placeholder="Search" />
          </label>
        </form>
      </div>
      {/* map section */}
      <div className="border mt-3 w-full h-[740px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[740px]"
          ref={mapRaf}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> service area :{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CovarRage;
