import React from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import { redirect } from 'next/navigation';

const withDoctorAuthentication = (WrappedComponent) => {
    return (props) => {
        const { user } = useAuthContext();
        if (user && user.role!=="doctor") {
            return redirect('/models/user');
        }
        if (!user){
            return redirect('/');
        }
        return <WrappedComponent {...props} />;
    };
};

export default withDoctorAuthentication;