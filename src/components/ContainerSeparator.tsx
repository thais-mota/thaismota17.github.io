import classNames from 'classnames';
import React from 'react';

export enum ContainerSeparatorSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

interface IContainerSeparatorProps {
    size?: ContainerSeparatorSize;
}

export default function ContainerSeparator(props: IContainerSeparatorProps) {
    const separatorClassNames = classNames(
        'containerseparator', {
        [`containerseparator-${props.size}`]: !!props.size,
    });
    return <div className={separatorClassNames}/>;
}
