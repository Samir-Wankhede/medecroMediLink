import React from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import { redirect } from 'next/navigation';

const withUserAuthentication = (WrappedComponent) => {
    return (props) => {
        const { user } = useAuthContext();
        if (user && user.role!=="user") {
            return redirect('/models/doctor');
        }
        if (!user){
            return redirect('/');
        }
        return <WrappedComponent {...props} />;
    };
};

export default withUserAuthentication;