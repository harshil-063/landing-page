import React from 'react';

async function fetchData() {
    return { message: 'hello' };
}

async function firstPage() {
    const data = await fetchData();

    return (
        
        <div>
            <h1 id="message" >{data.message}</h1>
        </div>
    );
}


export default firstPage;