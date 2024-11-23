import React from 'react';
import { Card, CardContent } from './card';

const ProfileCards = () => {
  const profileData = [
    {
      name: "SARTH PATIL",
      description: "I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule. The course structure, from daily homework to post-class handouts, was well-organized.",
      exam: "NEET-UG 2024",
      score: "Score 710/720",
      photo: "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=48&q=100",
    },
    {
      name: "SEKH GALIB RAZA",
      description: "I took NEET in 2023 but didn't achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score.",
      exam: "NEET-UG 2024",
      score: "Score 690/720",
      photo: "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FGalib-128x128_1_ktw4sw.webp&w=48&q=100",
    },
    {
      name: "AVIK DAS",
      description: "I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!",
      exam: "JEE Adv. 2024,",
      score: "AIR 69",
      photo: "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FAvik-128x128_vbkt1r.webp&w=48&q=100",
    },
    {
      name: "SHIFA FATIMA",
      description: "I came to know about ALLEN's Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition.",
      exam: "NEET-UG 2024",
      score: "Score 696/720",
      photo: "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FShifa-128x128_yjuigd.webp&w=48&q=100",
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
        <div className="grid grid-cols-4 gap-40 animate-scroll space-x-10 p-11">
      {profileData.map((profile, index) => (
        <Card key={`${profile.name}-${index}`} className="border border-gray-200 rounded-xl w-64 hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-5 ">
            <img src="https://allen.in/quotes.svg" alt="quote" className=" -my-3 mb-4"/>
            <p className="text-xs text-gray-600 mb-7">{profile.description}</p>
            <div className="flex items-center gap-3">
              <img 
                src={profile.photo} 
                alt={profile.name} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-sm">{profile.name}</h4>
                <p className="text-xs text-gray-600">{profile.exam}</p>
                <p className="text-xs font-medium text-gray-800">{profile.score}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default ProfileCards;