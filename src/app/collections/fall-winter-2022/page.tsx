import CollectionsTitle from '@/components/collections/CollectionsTitle';
import CollectionsVideo from '@/components/collections/CollectionsVideo';
import WinterImage from '@/components/collections/WinterImage';
import React from 'react';

const page = () => {
     return (
          <div>
               <CollectionsTitle title="FALL/WINTER2022" />
               <CollectionsVideo video="https://tallia.com/wp-content/uploads/2023/05/talliaf221.mp4"></CollectionsVideo>
               <WinterImage></WinterImage>
          </div>
     );
};

export default page;