import { Drawer, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useState } from "react";

interface Props {

}

const MenuComponent = (props: Props) => {
	const [menuOpen, setMenuOpen ] = useState(false);

	function openMenu() {
		setMenuOpen(true);
	}

	function closeMenu() {
		setMenuOpen(false);
	}

	return(
		<>
			<IconButton onClick={openMenu} aria-label="cart" style={{marginRight: 10}}>
				<Menu fontSize="large" />
			</IconButton>
			<Drawer anchor="left" open={menuOpen} onClose={closeMenu}>
                    <div style={{
                        width: 480,
                        height: '100%',
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: 15
                    }}></div>
			</Drawer>
		</>
	)
}

export default MenuComponent;