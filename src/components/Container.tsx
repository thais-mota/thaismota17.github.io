import classNames from 'classnames';
import React from 'react';
import '../styles/container.scss';

interface IContainerProps {
    children: JSX.Element;
}

export default function Container(props: IContainerProps) {
    const containerClassNames = classNames(
        'container',
    );

    return (
        <div className={containerClassNames}>{props.children}</div>
    );
}
