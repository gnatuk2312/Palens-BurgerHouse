import React from 'react';
import PropTypes from 'prop-types';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';


const MenuAdmin = props => {

	return (
		<div className='menu-admin'>
			<h2>Керування меню</h2>
			{Object.keys(props.burgers).map(key => {
				return <EditBurgerForm
					key={key}
					index={key}
					burger={props.burgers[key]}
					updateBurger={props.updateBurger}
					deleteBurger={props.deleteBurger}
				/>
			})}
			<AddBurgerForm addBurger={props.addBurger} />
			<button onClick={props.loadSampleBurgers}>Загрузити бургери</button>
		</div>
	);
};

MenuAdmin.propTypes = {
	burgers: PropTypes.object,
	deleteBurger: PropTypes.func,
	updateBurger: PropTypes.func,
	addBurger: PropTypes.func,
	loadSampleBurgers: PropTypes.func
};

export default MenuAdmin;
