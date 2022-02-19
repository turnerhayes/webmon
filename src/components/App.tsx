import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {PetHouse} from './PetHouse';

export default () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <div>
                <PetHouse></PetHouse>
            </div>
        </React.Fragment>
    );
};