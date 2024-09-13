import React, { useEffect } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import { redirect } from 'next/navigation';

const withLoggedinAuthentication = (WrappedComponent) => {
    return (props) => {
        const { user } = useAuthContext();
        useEffect(()=>{
            if (user) {
                return redirect(`/models/${user.role}`);
            }
        },[])
        if (user) {
            return redirect(`/models/${user.role}`);
        }
        return <WrappedComponent {...props} />;
    };
};

export default withLoggedinAuthentication;