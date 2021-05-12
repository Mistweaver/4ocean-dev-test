import { Divider, Drawer, IconButton, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";

interface Props {}

const MenuComponent = (props: Props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	function openMenu() {
		setMenuOpen(true);
	}

	function closeMenu() {
		setMenuOpen(false);
	}

	return (
		<>
			<IconButton onClick={openMenu} aria-label="cart" style={{ marginRight: 10 }}>
				<Menu fontSize="large" />
			</IconButton>
			<Drawer anchor="left" open={menuOpen} onClose={closeMenu}>
				<div style={{
					width: 300,
					height: '100%',
					backgroundColor: 'transparent',
					color: 'black',
					padding: 15
				}}>
					<List 
						component="nav"
						aria-label="main mailbox folders"
						subheader={
							<ListSubheader component="div" id="nested-list-subheader">
							  Welcome!
							</ListSubheader>
						  }
					>
						<ListItem button>
							<ListItemText primary="Best Sellers" />
						</ListItem>
						<ListItem button>
							<ListItemText primary="New Products" />
						</ListItem>
						<ListItem button>
							<ListItemText primary="Browse Collections" />
						</ListItem>
						<ListItem button>
							<ListItemText primary="See Local Products" />
						</ListItem>
					</List>
					<Divider />
					<List component="nav" aria-label="secondary mailbox folders">
						<ListItem button>
							<ListItemText primary="My Account" />
						</ListItem>
						<ListItem button>
							<ListItemText primary="Logout" />
						</ListItem>
					</List>
				</div>
			</Drawer>
		</>
	)
}

export default MenuComponent;