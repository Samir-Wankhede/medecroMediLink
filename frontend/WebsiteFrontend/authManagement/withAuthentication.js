import React from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import { redirect } from 'next/navigation';

const withAuthentication = (WrappedComponent) => {
    return (props) => {
        const { user } = useAuthContext();
        if (!user) {
            return redirect('/');
        }
        return <WrappedComponent {...props} />;
    };
};

export default withAuthentication;