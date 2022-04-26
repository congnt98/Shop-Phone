import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';


export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const searchparams = useSearchParams()
        const navigate = useNavigate();
        const params = useParams();
        return (
            <Component
                with={{ navigate, params, searchparams }}
                {...props}
            />
        );
    };

    return Wrapper;
};
