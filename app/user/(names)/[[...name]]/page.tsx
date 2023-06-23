// @flow
import * as React from 'react';

type Props = {
    params: { name: string },
    searchParams: any,
};

export const page = ({ params , searchParams  }: Props) => {
    console.log(searchParams);
    return (
        <div>
            other name: {params.name}
        </div>
    );
};

export default page;