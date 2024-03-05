import Image from 'next/image';
import React from 'react';

const Avatar = ({ avatar }) => {
    return (
        <div>
            <Image
                className=" w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded  object-cover"
                width={100}
                height={100}
                src={avatar}
                alt="image"
            ></Image>
        </div>
    );
};

export default Avatar;