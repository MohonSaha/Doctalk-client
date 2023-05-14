import React, { createContext, useState } from 'react';



export const stateContext = createContext();

const StateChange = ({children}) => {

    const [control, setControl] = useState(false);

    const stateAuthInfo = {
        control,
        setControl
    }


    return (
        <stateContext.Provider value={stateAuthInfo}>
            {children}
        </stateContext.Provider>
    );
};

export default StateChange;