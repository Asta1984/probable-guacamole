import React from 'react';
import { Card } from './card';
import { Button} from './Button';
import CallbackForm from './callbackform';

const CourseGrid = () => {
  return (
    <div className="container w-4/5 mx-auto px-4">
      <h1 className="text-2xl font-medium text-center py-8 text-gray-300">
        Discover the perfect online course
      </h1>
      
      <div className="grid grid-cols-1 w-64 md:grid-cols-2 md:w-full lg:grid-cols-3 gap-16 mx-auto py-10 mb-20">
      <Card className="relative ... border border-gray-200 rounded-xl bg-gradient-to-tr from-blue-200 hover:shadow-md transition-shadow duration-300">
          <h3 className="font-medium p-4 text-gray-300">Class 6 - 10</h3>
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
          <h3 className="font-medium p-4 text-gray-300">NEET</h3>
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
          <h3 className="font-medium p-4 text-gray-300">JEE</h3>
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
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='hidden md:flex justify-center items-center'>
        <img 
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_auto,q_auto/v1730878962/oqfy1klihlgn0vmpy77w.webp?_upload_ref=ic_img_tool" 
          alt="Teacher" 
          className='w-full md:w-6/12'
        />
      </div>        
      <div className='w-full'>
        <CallbackForm />
      </div>
    </div>
    </div>
  );
};

export default CourseGrid;