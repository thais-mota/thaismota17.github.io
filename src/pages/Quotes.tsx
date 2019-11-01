import React from 'react';

interface IQuoteProps {
    name: string;
}

export default function Quotes(props: IQuoteProps) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Test Quotes Page</p>
        </div>
    );
}
