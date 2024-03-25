import React from 'react';

const PageTitle = ({ title }: any) => {
    return (
        <div>
            <h1 className='text-2xl text-black font-medium my-4'>{title}</h1>
        </div>
    );
};

export default PageTitle;