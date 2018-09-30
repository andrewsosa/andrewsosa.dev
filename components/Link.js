import React from 'react';
import './Link.scss';

export default props => {
    const { header, ...other } = props;
    const className = header ? "ExtraPadding" : "RegularPadding";
    return <a className={className} {...props} />;
}

