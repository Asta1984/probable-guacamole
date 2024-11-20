import { Card, CardSlider } from "./card";
import { Button } from './Button';

export function Hero() {
    return (
        
        <div className="bg-white">
        {/* Card Section */}
        <div className="justify-self-center m-28 w-4/6 -mt-9 mb-0">
          <Card>
            <img
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1731936188/cox0rhomr0wt26wbymnr.webp?_upload_ref=ic_img_tool"
              alt="allencard1"
            />
          </Card>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-2 gap-8 px-16 py-16 items-center">
          {/* Left Column - Text */}
          <div className="text-wrap">
            <h2 className="text-4xl font-medium mb-4">
              Online coaching that delivers results
            </h2>
            <p className="text-base mb-8">
              Explore our online courses
            </p>
            <div className="flex gap-4">
              <Button variant="outline">NEET</Button>
              <Button variant="outline">JEE</Button>
              <Button variant="outline">Grade 6-10</Button>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="flex justify-end w-4/5">
            <CardSlider />
          </div>
        </div>
      </div>
    );
};