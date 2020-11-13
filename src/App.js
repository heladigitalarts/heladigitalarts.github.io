import React from "react";

import logo from './logo-jpg.jpg';
import './App.css';

import Masony from "react-masonry-component";

// Dome dummy content
const PHOTOS = [
	{
	  imageUrl: './images/ryan.jpg',
	},
	{
		imageUrl: './images/jason.jpg',
	},
	{
		imageUrl: './images/priyanka.jpg',
	  },
	  {
		imageUrl: './images/raini.jpg',
	  },

  ];

console.log(PHOTOS);
  
  // Masory Options
  const masonryOptions = {
	fitWidth: false,
	columnWidth: 300,
	gutter: 30,
	itemSelector: ".photo-item",
  };

function App() {
	return (
		<div className="App">
			<header className="Hda-header" >
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<div className="Hda-Masony" >
			<Masony
				className={"photo-list"}
				elementType={"ul"}
				options={masonryOptions}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
			>
				{PHOTOS.map((photo) => (
				<li className={`photo-item`}>
					<img src={photo.imageUrl} alt="" />
				</li>
				))}
			</Masony>
			</div>
		</div>
	);
}

export default App;
