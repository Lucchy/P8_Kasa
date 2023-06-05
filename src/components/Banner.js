import React from "react";

function Banner ({source, bannerTitle}) {
    return (
        <div className="banner">
            <img src={source} alt="Banner Kasa" className="banner-img"/>
            <h1>{bannerTitle}</h1>
        </div>
    )
}

export default Banner;