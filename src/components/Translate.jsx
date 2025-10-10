import React from 'react';
import { interpolate } from '@docusaurus/Interpolate';
// Can't read it from context, due to exposing imperative API
import codeTranslations from '@generated/codeTranslations';

import parse from 'html-react-parser';

function getLocalizedMessage({ id, message, }) {
    if (typeof id === 'undefined' && typeof message === 'undefined') {
        throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');
    }
    return codeTranslations[(id ?? message)] ?? message ?? id;
}

// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near
// the text?
export default function Translate({ children, id, values, }) {
    if (children && typeof children !== 'string') {
        console.warn('Illegal <Translate> children', children);
        throw new Error('The Docusaurus <Translate> component only accept simple string values');
    }

    //**NG**
    const localizedMessage = getLocalizedMessage({ message: children, id });
    const interpolatedMessage = interpolate(localizedMessage, values); 
    
    return <>{parse(interpolatedMessage)}</>;
}
