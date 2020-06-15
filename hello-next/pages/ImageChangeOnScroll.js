import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <div>
            {[balloon-bw, balloon, cupcake-bw, cupcake].map (partyId => {
                return (
                    <div key={partyId} >
                        <ImageToggleOnScroll
                        primaryImg={`/static/${partyId}.jpg`}
                        secondaryImg={`/static/${partyId}.jpeg`}
                        alt="" 
                    />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnScroll;