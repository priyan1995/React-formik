import React from 'react';
import { ContextInner } from './Context/ContextInner';
import { ContextInnerTwo } from './Context/ContextInnerTwo';

export const PageContext = React.createContext({})

export const Context = () => {

    // const test = 'Text';   

    return (
        <>
            <h2>Context Page</h2>
            {/* <ContextInner test={test} /> */}

            <PageContext.Provider
                value={
                    {
                        test: 'Page Context'
                    }
                }
            >
                <ContextInnerTwo />
            </PageContext.Provider>


        </>


    )
}