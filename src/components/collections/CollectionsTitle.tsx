import React from 'react';

interface CollectionsTitleProps {
     title: string;
}

const CollectionsTitle = ({ title }: CollectionsTitleProps) => {
     return (
          <div>
               <h1 className='text-center text-[20px]  uppercase md:text-[90px] lg:text-[100px] font-bold'>{title}</h1>
          </div>
     );
};

export default CollectionsTitle;