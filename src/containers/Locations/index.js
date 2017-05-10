import React, { Component } from 'react';
import './Locations.css';
import { connect } from 'react-redux';
import AutoComplete from 'react-google-autocomplete';
import { addLocation, findProducts } from '../../actions';

const styles = {
	height: '30px',
	width: '300px',
	borderRadius: '5px',
	border: '1px solid grey',
	margin: '10px auto'
}

class Locations extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
		}
	}

	render() {
		const { findProductsAction } = this.props;

		return (
			<div className="Location" >
				<h2>Where are you?!</h2>
				<div className="Location-nameWrapper">
					<span>Enter you name</span>
					<input className="Location-name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
				</div>	
				<AutoComplete 
					style={styles}
					onPlaceSelected={(place) => {
						const startLatitude = place.geometry.location.lat();
						const startLongitude = place.geometry.location.lng();
						this.props.addLocationAction({ startLatitude, startLongitude })
					}}
					type={['address']}
					componentRestrictions={{country: "us"}}
				/>
				<AutoComplete 
					style={styles}
					onPlaceSelected={(place) => {
						const endLatitude = place.geometry.location.lat();
						const endLongitude = place.geometry.location.lng();
						this.props.addLocationAction({ endLatitude, endLongitude })
					}}
					type={['address']}
					componentRestrictions={{country: 'us'}}
				/>
				<button className="Location-button" onClick={() => findProductsAction(this.state.name)}>Find Location</button>
			</div>
		)
	}
}

//mapStateToProps


//disptach to help communicate between redux smart container and redux store via actions

const mapDispatchToProps = (disptach) => ({
	addLocationAction: (location) => disptach(addLocation(location)),
	findProductsAction: (name) => disptach(findProducts(name)),
})

export default connect(null, mapDispatchToProps)(Locations);