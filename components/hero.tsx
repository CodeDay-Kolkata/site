import Draggable from 'react-draggable';
import { useContext } from 'react';

import { DraggableContext } from '../context/DraggableContext';

const Hero = () => {
  const { draggable } = useContext(DraggableContext);

  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-0 lg:h-screen bg-[#adabe7] gap-y-4">
      <Draggable disabled={!draggable}>
        <div className="w-10/12 p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-[#ff686b] lg:w-auto">
          <h1 className="text-6xl font-bold text-center sm:text-8xl lg:text-9xl">
            CodeDay Kolkata
          </h1>
        </div>
      </Draggable>
      <Draggable disabled={!draggable}>
        <div className="w-10/12 mx-auto sm:w-1/2">
          <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
            <p className="text-lg font-bold sm:text-xl">
              💜⚡️ a day-long coding event for high school students, where they
              learn, make friends, and have a blast.
            </p>
          </div>
        </div>
      </Draggable>
      <Draggable disabled={!draggable}>
        <p className="text-lg font-bold sm:text-xl mt-10">
          (try dragging stuff in this website)
        </p>
      </Draggable>
    </div>
  );
};

export default Hero;
