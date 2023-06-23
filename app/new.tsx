import React from 'react';

async function fetchData() {
    return { message: 'hello' };
}

async function StaticPage() {
    const data = await fetchData();

    return (
        <div>
            <h1>{data.message}</h1>
        </div>
    );
}


export default StaticPage;