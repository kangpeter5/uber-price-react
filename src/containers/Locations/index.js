import React, { Component } from 'react';
import './Locations.css';
import { connect } from 'react-redux';
import AutoComplete from 'react-google-autocomplete';

const styles = {
	height: '30px',
	width: '300px',
	borderRadius: '5px',
	border: '1px solid grey',
	margin: '10px auto'
}

class Locations extends Component {
	render() {
		return (
			<div className="Location" >
				<h2>Where are you?!</h2>
				<AutoComplete 
					style={styles}
					onPlaceSelected={(place) => {
						console.log('place: ', place);
						const startLatitude = place.geometry.location.lat();
						console.log('Start Latitude: ', startLatitude);
						const startLongitude = place.geometry.location.lng();
						console.log('Start Longitude: ', startLongitude);
					}}
					type={['address']}
					componentRestrictions={{country: "us"}}
				/>
			</div>
		)
	}
}

export default connect()(Locations);