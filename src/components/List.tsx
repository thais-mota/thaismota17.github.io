import classNames from 'classnames';
import React from 'react';
import '../styles/list.scss';

interface IListProps {
    items: string[];
}

export default function List(props: IListProps) {
    const listClassNames = classNames(
        'list',
    );

    return (
        <ul className={listClassNames}>
            {props.items.map((item: string, index: number) => {
                return <li key={index}>{item}</li>;
            })}
        </ul>
    );
}
