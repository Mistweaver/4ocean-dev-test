import { createStyles, fade, InputBase, makeStyles, Theme } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.black, 0.15),
			'&:hover': {
			  backgroundColor: fade(theme.palette.common.black, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
			  marginLeft: theme.spacing(3),
			  width: 'auto',
			},
			color: 'black'
		  },
		  searchIcon: {
			width: theme.spacing(7),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		  },
		  inputRoot: {
			color: 'inherit',
		  },
		  inputInput: {
			padding: theme.spacing(1, 1, 1, 7),
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
			  width: 200,
			},
		  },
	})
)

const SearchBar = () => {
	const classes = useStyles();

	return(
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<Search />
			</div>
			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
			/>
		</div>
	)
}

export default SearchBar;