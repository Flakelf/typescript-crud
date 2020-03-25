import { createGlobalStyle } from 'styled-components';

import { normalize } from './normalize';
import c00lbLackGROUND from './assets/c00lbLackGROUND.jpeg';
import { mainFont } from './variables/typography';

import 'react-toastify/dist/ReactToastify.css';
import './fonts/index.css';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    body {
        background: url(${c00lbLackGROUND}) center center;
    
        ${mainFont}
    }

    html, body, body > div:first-child {
    display: flex;
    width: 100%;
    height: 100%;
    }
da
`;
