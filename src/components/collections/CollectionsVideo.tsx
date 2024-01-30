
interface VideoPath {
     video: string
}
const CollectionsVideo = ({ video }: VideoPath) => {
     return (
          <div className=" w-full overflow-hidden">
               <div className="  w-full overflow-hidden">
                    <div className=" w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[95vh] overflow-hidden">
                         <video className=" w-full h-full object-cover"   controls>
                              <source className=" w-full overflow-hidden" src={video} type="video/mp4" />
                         </video>
                    </div>
                    
               </div>
          </div>
     );
};

export default CollectionsVideo;