import React from 'react';
import { Card } from "./card";

export function CardSlider3() {
  return (
    <div className="flex justify-center items-center w-8/12">
      <Card>
        {/* Desktop Image - Hidden on small screens */}
        <img
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1731570115/desktop_b1jw5i.webp"
          alt="Desktop Version"
          className="hidden md:block"
        />
        
        {/* Mobile Image - Hidden on larger screens */}
        <img
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1731570104/mobile_d1ror1.webp"
          alt="Mobile Version"
          className="block md:hidden"
        />
      </Card>
    </div>
  );
}

export default CardSlider3;