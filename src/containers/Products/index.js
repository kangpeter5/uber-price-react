import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';

export class Products extends Component{

	render() {
		const { products } = this.props;
		return (
			<div className="Products">
				<h2>I am {this.props.params.name}</h2>
				<div className="Products-list" >
					{products.map((product) => {
						return (
							<div className="Products-item">
								<h2>{product.display_name}</h2>
								<h3>{product.estimate}</h3>
							</div>
						)
					})}
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	products: state.products
})

export default connect(mapStateToProps)(Products);