import React from 'react';

const CommonTitle = ({ text }: any) => {
     return (
          <div>
               <h1 className=' pb-6 text-[28px]  secondary  font-normal'>{text}</h1>
          </div>
     );
};

export default CommonTitle;