import { Card, CardSlider } from "./card";
import { Button } from './Button';
import { CardSlider2 } from "./cardslider2";
import { CardSlider3 } from "./cardslider3";


export function Hero() {
    return (
      <>          
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
          <div className="grid grid-cols-2 gap-8 px-80 py-16 items-center">
            {/* Left Column - Text */}
            <div className="text-wrap">
              <h2 className="text-4xl font-medium mb-4">Online coaching that<br/>delivers results</h2>
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
            <div className="flex justify-end w-full">
              <CardSlider />
            </div>
          </div>
        </div>

        <>
          <h1 className="text-3xl font-medium mb-4 flex justify-center p-6"> Why ALLEN Online</h1>
          <div className="grid grid-cols-4 gap-10 px-20 w-full">
            {/* Kota Faculty Card */}
            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
              <Card className="flex flex-col items-center text-center h-full">
                <img src="/1_dfic0f.svg" alt="Kota Faculty" className="w-16 h-16 mb-4"/>
                <h2 className="text-2xl font-medium mb-3">Kota Faculty</h2>
                <p className="text-gray-600 text-left">
                  Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years
                </p>
              </Card>
            </div>

            {/* Proven Results Card */}
            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
              <Card className="flex flex-col items-center text-center h-full">
                <img src="/2_ddboz0.svg" alt="Proven Results" className="w-16 h-16 mb-4"/>
                <h2 className="text-2xl font-medium mb-3">Proven Results</h2>
                <p className="text-gray-600 text-left">
                  Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams
                </p>
              </Card>
            </div>

            {/* Learning Tools Card */}
            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
              <Card className="flex flex-col items-center text-center h-full">
                <img src="/3_ivbkv8.svg" alt="Learning Tools" className="w-16 h-16 mb-4"/>
                <h2 className="text-2xl font-medium mb-3">Learning Tools</h2>
                <p className="text-gray-600 text-left">
                  24x7 doubt resolution and customized study material to test, and improve continuously
                </p>
              </Card>
            </div>

            {/* Mentor Support Card */}
            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
              <Card className="flex flex-col items-center text-center h-full">
                <img src="/4_ar5ewd.svg" alt="Mentor Support" className="w-16 h-16 mb-4"/>
                <h2 className="text-2xl font-medium mb-3">Mentor Support</h2>
                <p className="text-gray-600 text-left">
                  Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents
                </p>
              </Card>
            </div>
          </div>
          <div className="flex justify-center items-center m-8">
            <Button className="rounded-full m-6">Explore Online Courses</Button>
          </div>
        </>
        <>
          <h1 className="text-3xl font-medium mb-4 flex justify-center p-6">What's Trending</h1>
          <div className="flex justify-center mb-20">
            <CardSlider2/>         
          </div>
          <h1 className="text-3xl font-medium mb-4 flex justify-center p-6">Meet our Champions</h1>
          <div className="flex justify-center mb-20">
            <CardSlider3/>         
          </div>
          <>
            <div className="grid grid-cols-2 w-8/12 mx-64 gap-10 mb-10 ">{['JEE2024', 'NEET2024'].map((exam) => (
              <div key={exam} className="border border-gray-200 bg-sky-500/100 h-12 rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
                <Card>
                <div className="flex justify-between items-center">
                  <h1 className="text-nowrap text-start">View {exam} Results</h1>
                  <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_auto,q_auto/v1731073629/bymo8br5tzitwj8v2yx7.svg?_upload_ref=ic_img_tool" 
                  alt="arrowicon" className="ml-64 w-8"/>
                </div>
                </Card>
              </div>
              ))}
            </div>
          </>
        </>
      </>
    );
};