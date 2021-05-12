import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './ApplicationStore';
import { Server } from 'miragejs';

new Server({
	routes() {
		this.namespace = '/admin/api/2021-04';
		this.get('/collections', () => {
			return[
				{
					id: 1,
					name: 'Around the House',
					handle: 'around_the_house',
					products: [
						{id: 4, name: "Snake Plant", sku: "#495FJALKF8", price: 24.99, inventory: 10, imageSrc: "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1607646080/vendor/2350/catalog/product/2/0/20200304122155_file_5e5ef4a3ccb60_5e5ef7b7cd5fa_5fd24afc227de._5fd24afe325f6..jpg", description: "Make sure your home looks like an Instagram post!  Water and sunlight required."},
						{id: 5, name: "HAL 9000", sku: "#495FJALKF7", price: 159.99, inventory: 25, imageSrc: "https://static01.nyt.com/images/2018/05/15/arts/01hal-voice1/merlin_135847308_098289a6-90ee-461b-88e2-20920469f96a-superJumbo.jpg", description: "Tired of your boring Alexa?  Try the HAL 9000, the newest in home automation!"},
						{id: 6, name: "Life-Sized T-Rex Skeleton", sku: "#495FJALKF5", price: 50000, inventory: 10, imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/FMNH_SUE_Trex.jpg/800px-FMNH_SUE_Trex.jpg", description: "Full sized replica of the main character from the movie Jurassic Park.  Some assembly required."}

					]
				},
				{
					id: 2,
					name: 'Potent Potables',
					handle: 'final_jeopardy',
					products: [
						{id: 8, name: "The Sean Connery", sku: "#495FJALKFE", price: 80085, inventory: 10, imageSrc: "https://cdn.cms.prod.nypr.digital/images/51615jeopardy.2e16d0ba.fill-661x496.jpg", description: "As crude, prickly, and offensive as the man himself"},
						{id: 7, name: "Beer30", sku: "#495FJALKF6", price: 10.99, inventory: 10, imageSrc: "https://cdn.totalfratmove.com/wp-content/uploads/2013/06/6811f73679d19edfb5f399eb1d780f992120850085.jpg", description: "By far the worst beer I have ever drank.  I only had two, and each one left me with crippling abdominal pain for the next 2 hours."},
						{id: 9, name: "Squeeze-It's", sku: "#495FJALKFW", price: 6.99, inventory: 10, imageSrc: "https://imgix.bustle.com/rehost/2016/9/13/975c8aaf-aa92-4af8-bd64-56fcf103c5f4.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg", description: "One of the coolest drinks ever.  Seriously how could they discontinue this?!  It's amazing and I used to pretend the caps were little space-ships.  Probably not very eco-friendly however."}

					]
				},
				{
					id: 3,
					name: 'Lawn Defense Systems',
					handle: 'wut',
					products: [
						{id: 10, name: "Flamethrower", sku: "#495FJALKFX", price: 1000, inventory: 10, imageSrc: "https://img.themanual.com/image/themanual/the-boring-company-flamethrower-v2.jpg", description: "14,000 BTU's of prime lawn scorcher.  Effective against ants, termites, and neighborhood youths!  Note: not legal in all 50 states."},
						{id: 11, name: "Super Soaker 2000", sku: "#495FJALKFZ", price: 120.00, inventory: 50, imageSrc: "https://i.ytimg.com/vi/eOyKxeZ5brM/maxresdefault.jpg",description: "The greatest squirt gun ever manufactured.  So powerful it was issued a recall and a lower-powered version was released.  One shot usually ended your opponents day."},
						{id: 12, name: "Sentry Turret", sku: "#495FJALKFY", price: 10123.99, inventory: 1000, imageSrc: "https://i.makeagif.com/media/8-21-2014/ZuF_Gh.gif", description: "Apeture Science's premiere home defense system.  IFF is a little shaky but it should work!"}

					]
				}

			]
		})
	}
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

