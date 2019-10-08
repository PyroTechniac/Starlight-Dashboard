import React, { useGlobal } from 'reactn';
import { Route, Redirect } from 'react-router-dom';

export default ({ authState, component: Component, componentProps, ...rest }) => {
    const [global] = useGlobal();
    return (
        <Route
            {...rest}
            render={props =>
                !global.authenticated ? (
                    <Component {...componentProps} {...props} />
                ) : (
                        <Redirect to="/" />
                    )
            }
        />
    );
};