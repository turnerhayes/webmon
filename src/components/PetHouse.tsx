import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { PetHouseSvg } from './PetHouseSvg';
import { petSlice, MAX_HEALTH, MAX_HUNGER } from '../redux/slices/pet';
import { State } from '../redux/store';

const PetHouse = () => {
    const dispatch = useDispatch();
    const currentHunger = useSelector((state: State) => state.pet.hunger);
    const currentHealth = useSelector((state: State) => state.pet.health);
    const poopCount = useSelector((state: State) => state.pet.poops);

    const onFeedClick = React.useCallback(() => {
        dispatch(petSlice.actions.feed());
    }, [dispatch, petSlice]);

    const onHealClick = React.useCallback(() => {
        dispatch(petSlice.actions.heal());
    }, [dispatch, petSlice]);

    const onCleanupClick = React.useCallback(() => {
        dispatch(petSlice.actions.cleanUp());
    }, [dispatch, petSlice]);

    return (
        <Box sx={{ border: 1 }}>
            <PetHouseSvg poopCount={poopCount} />
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
            }}>
                <Box>
                    Hunger: {currentHunger}/{MAX_HUNGER}
                </Box>
                <Box>
                    Health: {currentHealth}/{MAX_HEALTH}
                </Box>
                <Button variant="contained" onClick={onFeedClick}>
                    Feed
                </Button>
                <Button variant="contained" onClick={onHealClick}>
                    Heal
                </Button>
                <Button variant="contained" onClick={onCleanupClick}>
                    Clean up
                </Button>
            </Box>
        </Box>
    );
};

export { PetHouse };
