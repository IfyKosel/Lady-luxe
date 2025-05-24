import React from "react";
import gridtop1 from "../../Images/gridtop1.jpg";
import gridtop2 from "../../Images/gridtop2.jpg";
import gridtop3 from "../../Images/gridtop3.jpg";
import "./GridTop.css";

function GridTop() {
  const gridDetials = [
    {
      image: gridtop1,
      alt: "brown leather bag",
      h5: "SAVE 40%",
      h2: "LEATHER",
    },
    {
      image: gridtop2,
      alt: "yellow back pack",
      h5: "SAVE 60%",
      h2: "UNIQUE ARRIVAL",
    },
    {
      image: gridtop3,
      alt: "casual bag",
      h5: "SAVE 60%",
      h2: "CASUAL",
    },
  ];

  return (
    <>
      <div className="container-fluid py-2 grid-container">
        <div className="row py-5 px-2 ">
          {gridDetials.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="col-12 grid-image">
                <img src={item.image} alt={item.alt} className="w-100" />
                <span className="save-text">
                  <div>
                    <h5>{item.h5}</h5>
                    <h2>{item.h2}</h2>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GridTop;
