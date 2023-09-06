import React from "react";

export default function CrossIconBrodcamp({
                                              bg,
                                              bg1,
                                              bg2,
                                              bg3,
                                              bg4,
                                              bg5,
                                              bg6,
                                              bg7,
                                              bg8,
                                              bg9,
                                              bg10,
                                              bgBanner,
                                              bgBanner1,
                                              bgBanner2,
                                              bgBanner3,
                                              bgBanner4,
                                              bgBanner5,
                                              bgBanner6,
                                              bgBanner7,
                                              bgBanner8,
                                              bgBanner9,
                                              bgBanner10,
                                          }) {
    // Define an object to map prop names to their respective image URLs
    const imageUrls = {
        bg: "/images/main-banner/cross-icon.png",
        bg1: "/images/main-banner/cross-icon-1.png",
        bg2: "/images/main-banner/cross-icon-2.png",
        bg3: "/images/main-banner/cross-icon-3.png",
        bg4: "/images/main-banner/cross-icon-4.png",
        bg5: "/images/main-banner/cross-icon-5.png",
        bg6: "/images/main-banner/cross-icon-6.png",
        bg7: "/images/main-banner/cross-icon-7.png",
        bg8: "/images/main-banner/cross-icon-8.png",
        bg9: "/images/main-banner/cross-icon-9.png",
        bg10: "/images/main-banner/cross-icon-10.png",
        bgBanner: "/images/main-banner/banner-icon.png",
        bgBanner1: "/images/main-banner/banner-icon-1.png",
        bgBanner2: "/images/main-banner/banner-icon-2.png",
        bgBanner3: "/images/main-banner/banner-icon-3.png",
        bgBanner4: "/images/main-banner/banner-icon-4.png",
        bgBanner5: "/images/main-banner/banner-icon-5.png",
        bgBanner6: "/images/main-banner/banner-icon-6.png",
        bgBanner7: "/images/main-banner/banner-icon-7.png",
        bgBanner8: "/images/main-banner/banner-icon-8.png",
        bgBanner9: "/images/main-banner/banner-icon-9.png",
        bgBanner10: "/images/main-banner/banner-icon-10.png",
    };

    // Determine the selected background image URL based on the provided props
    const selectedBgImage = imageUrls[bg] || imageUrls[bgBanner];
    console.log(bg1)
    return (
        <>
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${selectedBgImage})` }} />
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${bg5 || bgBanner5})` }} />
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${bg6 || bgBanner6})` }} />
            <div className="pattern-layer-four" style={{ backgroundImage: `url(${bg || bgBanner})` }} />
            <div className="pattern-layer-five" style={{ backgroundImage: `url(${bg1 || bgBanner1})` }} />
            <div className="pattern-layer-six" style={{ backgroundImage: `url(${bg2 || bgBanner2})` }} />
            <div className="pattern-layer-seven" style={{ backgroundImage: `url(${bg8 || bgBanner8})` }} />
            <div className="pattern-layer-eight" style={{ backgroundImage: `url(${bg5 || bgBanner5})` }} />
            <div className="pattern-layer-nine" style={{ backgroundImage: `url(${bg10 || bgBanner10})` }} />
            <div className="pattern-layer-ten" style={{ backgroundImage: `url(${bg9 || bgBanner9})` }} />
            <div className="pattern-layer-eleven" style={{ backgroundImage: `url(${bg3 || bgBanner3})` }} />
            <div className="pattern-layer-tweleve" style={{ backgroundImage: `url(${bg4 || bgBanner4})` }} />
        </>
    );
}