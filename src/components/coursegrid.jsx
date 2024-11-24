import React from 'react';
import { Card } from './card';
import { Button} from './Button';

const CourseGrid = () => {
  return (
    <div className="container w-3/5 mx-auto px-4">
      <h1 className="text-2xl font-medium text-center py-8">
        Discover the perfect online course
      </h1>
      
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto py-10">
      <Card className="relative ... border border-gray-200 rounded-xl bg-gradient-to-tr from-blue-200 hover:shadow-md transition-shadow duration-300">
          <h3 className="font-medium p-4">Class 6 - 10</h3>
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp" 
              alt="Class 6-10"
              className="w-full h-full object-cover"
            />
            <>
            <Button variant="link" className='absolute bottom-0 left-0 ...'>View</Button>
            </>
          </div>
        </Card>

        <Card className="border border-gray-200 rounded-xl bg-gradient-to-tr from-blue-200 hover:shadow-md transition-shadow duration-300">
          <h3 className="font-medium p-4">NEET</h3>
          <div className="relative ... aspect-video w-full overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp" 
              alt="NEET"
              className="w-full h-full object-cover"
            />
            <>
            <Button variant="link" className='absolute bottom-0 left-0 ...'>View</Button>
            </>
          </div>
        </Card>

        <Card className="relative ... border border-gray-200 rounded-xl bg-gradient-to-tr from-blue-200 hover:shadow-md transition-shadow duration-300">
          <h3 className="font-medium p-4">Class 6 - 10</h3>
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp" 
              alt="Class 6-10"
              className="w-full h-full object-cover"
            />
            <>
            <Button variant="link" className='absolute bottom-0 left-0 ...'>View</Button>
            </>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseGrid;