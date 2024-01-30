import CollectionsTitle from "@/components/collections/CollectionsTitle";
import CollectionsVideo from "@/components/collections/CollectionsVideo";
import WinterImage from "@/components/collections/WinterImage";

const page = () => {
     return (
          <div>
               <CollectionsTitle title="FALL/WINTER2023" />
               <CollectionsVideo video='https://www.tallia.com/wp-content/uploads/2023/08/Tallia-F23-CAMPAIGN-VIDEO-FINAL-.mp4'></CollectionsVideo>

               <WinterImage></WinterImage>
          </div>
     );
};

export default page;