import classNames from 'classnames';
import React from 'react';
import '../styles/socialmedias.scss';

export default function SocialMediaIcons() {
    const textClassNames = classNames(
        'socialmedias',
    );

    return (
        <div className={textClassNames}>
            <a href="https://www.facebook.com/thais.mota.3532" target="_blank">
                <img src={require('../images/Facebook.png')} />
            </a>
            <a href="https://www.instagram.com/thais.motta/" target="_blank">
                <img src={require('../images/Instagram.png')} />
            </a>
            <a href="https://www.linkedin.com/in/tha%C3%ADs-mota-5143b7152/" target="_blank">
                <img src={require('../images/Linkedin.png')} />
            </a>
            <a href="https://twitter.com/thaismota1_" target="_blank">
                <img src={require('../images/Twitter.png')} />
            </a>
            <a href="https://github.com/thaismota17" target="_blank">
                <img src={require('../images/Github.png')} />
            </a>
        </div>
    );
}
