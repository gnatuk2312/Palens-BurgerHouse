import React from 'react';
import PropTypes from 'prop-types';

const Burger = props => {
	const { image, name, price, desc, status } = props.details;
	const isAvailable = status === 'available';

	return (
		<li className='menu-burger'>
			<div className='image-container'>
				<img src={image} alt={name} />
			</div>
			<div className='burger-details'>
				<h3 className='burger-name'>{name}<span className='price'>{price} ₴</span></h3>
				<p>{desc}</p>
				<button
					className='buttonOrder'
					disabled={!isAvailable}
					onClick={() => props.AddToOrder(props.index)}
				>{isAvailable ? 'Замовити' : 'Тимчасово немає'}</button>
			</div>
		</li >
	);
};

Burger.propTypes = {
	details: PropTypes.shape({
		image: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		desc: PropTypes.string,
		status: PropTypes.string
	}),
	index: PropTypes.string,
	AddToOrder: PropTypes.func
};

export default Burger;

