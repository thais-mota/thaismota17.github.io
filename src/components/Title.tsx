import classNames from 'classnames';
import React from 'react';
import '../styles/title.scss';

interface ITitleProps {
    children: string;
}

export default function Title(props: ITitleProps) {
    const textClassNames = classNames(
        'title',
    );

    return (
        <span className={textClassNames}>{props.children}</span>
    );
}
