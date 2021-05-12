import { Grid } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import './App.css';
import ApplicationBar from './components/header/ApplicationBar';
import CollectionRow from './components/products/CollectionRow';

function App() {
	const [data, setData] = React.useState([]);

	

	// using a hook here to try something new
	// pass empty array to ensure single execution
	React.useEffect(() => {
		axios.get('/admin/api/2021-04/collections').then(response => {
			setData(response.data);
			// return Promise.resolve(response);
		})
		.catch((error) => {
			console.error(error);
			// return Promise.resolve(error.response);
		});
	}, []);

	return (
		<div>
			<ApplicationBar />
			<div style={{padding: 10}}>
				<Grid container spacing={2}>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}>
						<div style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
							{
								data.map(collection => (
									<CollectionRow collection={collection} />
								))
							}
						</div>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</div>
		</div>
	);
}

export default App;
