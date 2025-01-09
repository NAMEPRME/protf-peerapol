import React from 'react';
import {Grid2} from '@mui/material' ;

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
            rel="noopener noreferrer" href={link}>
            <i className={icon} />
        </a>
    );
}

export default SocialIcon;