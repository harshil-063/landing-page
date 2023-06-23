import React from 'react';

async function fetchData() {
    return { message: 'hello secondPage' };
}

async function secondPage() {
    const data = await fetchData();
    return <div>
        <h1 id="message" >{data.message}</h1>
    </div>;
}

export default secondPage;