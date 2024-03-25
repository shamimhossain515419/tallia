
import { pagesData } from '@/utils/pagesData';
import Link from 'next/link';
import React from 'react';

const layout = ({ children }: any) => {
    return (
        <>
            <div className='container'>
                <div className=' grid md:grid-cols-7 gap-5 py-10 '>
                    <div className='md:col-span-2 space-y-2'>
                        {
                            pagesData.map((item: any, i: any) => <Link className='block underline hover:opacity-80' key={i} href={`/pages/${item?.path_name}`}> {item?.name} </Link>)
                        }
                    </div>
                    <div className='md:col-span-5'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default layout;