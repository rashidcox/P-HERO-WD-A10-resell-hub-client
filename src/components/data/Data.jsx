import { getProducts } from '@/app/lib/getData';
import React from 'react';

const Data = async() => {
    const data = await getProducts();
    return (
        <div>
            <h2>All data is: {data.length}</h2>
        </div>
    );
};

export default Data;