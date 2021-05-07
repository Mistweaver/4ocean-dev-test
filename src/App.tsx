import { Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import ApplicationBar from './components/header/ApplicationBar';

function App() {
	return (
		<div>
			<ApplicationBar />
			<div style={{padding: 10}}>
				<Grid container spacing={2}>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}></Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</div>
		</div>
	);
}

export default App;
