import PrivateRoute from '@/components/AuthProvider/PrivateRoute';
import DashboardSidebar from '@/components/useraccount/DashboardSidebar';
import React from 'react';

const layout = ({ children }: any) => {
    return (

        <>
            <PrivateRoute>
                <div className='container'>
                    <div className=' px-5 py-10'>
                        <div className=' flex justify-start gap-5'>
                            <DashboardSidebar></DashboardSidebar>
                            <div className=' w-full min-h-[60vh]'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </PrivateRoute>
        </>

    );
};

export default layout;