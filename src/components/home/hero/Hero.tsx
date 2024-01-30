import React from 'react';
import CustomLinkButton from '../../customButton/CustomLinkButton';
import "./hero.css"
const Hero = () => {
     return (
          <div className=' '>

               <div className=' hero  w-full h-[60vh] lg:h-[100vh] relative '>
                    <div className="overlay"></div>
                    <video className='video  overflow-hidden' src={"https://www.tallia.com/wp-content/uploads/2023/08/Tallia-F23-CAMPAIGN-VIDEO-FINAL-.mp4"} autoPlay loop muted />
                    <div className="content">
                         <div>
                              <CustomLinkButton title='shop new' path='/'></CustomLinkButton>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Hero;