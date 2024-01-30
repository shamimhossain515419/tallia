import CollectionsTitle from '@/components/collections/CollectionsTitle';
import CollectionsVideo from '@/components/collections/CollectionsVideo';
import { summer } from '@/utils/summer';
import Image from 'next/image';
import React from 'react';

const page = () => {
     return (
          <div>
               <CollectionsTitle title="Spring/Summer2023" />
               <CollectionsVideo video="https://tallia.com/wp-content/uploads/2023/03/Tallia-SP23-Final.mp4"></CollectionsVideo>
               <div className=" max-w-[970px] mx-auto py-16">
                    <div className=" grid  lg:grid-cols-2  grid-cols-1    gap-3">
                         {
                              summer?.map((item, index) => <div className={`w-full ${item?.call == 1 ? " col-span-2" : ""}  `} key={index}>
                                   <Image className=" w-full h-full object-fill" src={item?.image} alt="image"></Image>
                              </div>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default page;