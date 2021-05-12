import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import Cart from "../cart/CartComponent";
import MenuComponent from "./MenuComponent";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bar: {
			display: 'flex',
			flexGrow: 1
		},
		appBar: {
			backgroundColor: 'transparent'
		},
		title: {
			display: 'none',
			[theme.breakpoints.up('sm')]: {
			  display: 'block',
			},
			color: 'black'
		},
		sectionDesktop: {
			display: 'none',
			[theme.breakpoints.up('md')]: {
			  display: 'flex',
			},
		},
		sectionMobile: {
			display: 'flex',
			[theme.breakpoints.up('md')]: {
			  display: 'none',
			},
		},
		grow: {
			flexGrow: 1,
		},
	})
)


const ApplicationBar = () => {
	const classes = useStyles();
	return (
		<div className={classes.bar}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<MenuComponent />
					<Typography className={classes.title} variant="h6" noWrap>4Ocean</Typography>
					<SearchBar />
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Cart />
					</div>
					<div className={classes.sectionMobile}>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default ApplicationBar;