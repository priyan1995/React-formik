import React, { useContext } from 'react';
import { PageContext } from '../Context';

export const ContextInnerTwo = () => {

    const { test } = useContext(PageContext)

    return (
        <>
            {test}


        </>

    )
}