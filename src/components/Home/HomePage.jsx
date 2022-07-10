import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button, Box } from '@mui/material';

function HomePage() {

    const history = useHistory();

    const handleClick = () => {
        console.log('clicked');
    }
    
    const handleScores = () => {
        history.push('/scores');
    }

    const handleTournament = () => {
        history.push('/tournament');
    }

    const handleRules = () => {
        history.push('/rules');
    }

    const handleFree    = () => {
        history.push('/freeagents');
    }

    const handleTeams = () => {
        history.push('/teams');
    }

    return (
        <div>
            <h1>Welcome to the 4th Annual Beer Olympics</h1>
            <Box sx={{ flexGrow: 1, m: 'auto' }}>
                <Grid container columnSpacing={{ xs: 6 }} sx={{ justifyContent: 'center', flexDirection: 'column' }}>
                    <Grid sx={{ justifyContent: 'center', ml: '30%' }} item xs={10}>
                        <Grid item xs={6}>
                            <Button
                            sx={{ width: '130px', height: '60px' }}
                            variant='contained'
                            onClick={handleRules}>
                                Rules/Events
                            </Button>
                            <Button
                            sx={{ width: '130px', height: '60px' }}
                            variant='contained'
                            onClick={handleTeams}>
                                Teams
                            </Button>
                            <Button
                            sx={{ width: '130px', height: '60px' }}
                            variant='contained'
                            onClick={handleFree}>
                                Free Agents
                            </Button>
                            <Button
                            sx={{ width: '130px', height: '60px' }}
                            variant='contained'
                            onClick={handleScores}>
                                Scores
                            </Button>
                            <Button
                            sx={{ width: '130px', height: '60px' }}
                            variant='contained'
                            onClick={handleTournament}>
                                Tournament Bracket
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>



        </div>
    )
}

export default HomePage;