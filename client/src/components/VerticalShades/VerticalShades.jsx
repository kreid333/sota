import React from 'react';
import IMG from "../../images/gallery/verticalshades/IMG_5145.jpg"
import IMG1 from "../../images/gallery/verticalshades/IMG_5164.jpg"


const VerticalShades = () => {
    return (
        <div className="row">
            <div className="col-sm-6 mb-3 imgDiv">
                <img className="w-100 h-100 galleryImg" src={IMG} alt=""/>
            </div>
            <div className="col-sm-6 mb-3 imgDiv">
                <img className="w-100 h-100 galleryImg" src={IMG1} alt=""/>
            </div>
        </div>
    );
};

export default VerticalShades;