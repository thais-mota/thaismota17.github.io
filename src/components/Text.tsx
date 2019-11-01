import classNames from 'classnames';
import React from 'react';
import '../styles/text.scss';

interface ITextProps {
    children: string;
}

export default function Text(props: ITextProps) {
    const textClassNames = classNames(
        'text',
    );

    return (
        <span className={textClassNames}>{props.children}</span>
    );
}
