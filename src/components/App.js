import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';
import base from '../base';


class App extends React.Component {

	static propTypes = {
		match: PropTypes.object
	}

	state = {
		burgers: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;

		const localStorageRef = localStorage.getItem(params.restaurantId);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		};

		this.ref = base.syncState(`${params.restaurantId}/burgers`, {
			context: this,
			state: 'burgers'
		});
	};

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	componentDidUpdate() {
		const { params } = this.props.match;
		localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))

	}

	addBurger = (burger) => {
		// 1. Робимо копію об'єкта state
		const burgers = { ...this.state.burgers };
		// 2. Добавити новий бургер в об'єкт burgers
		burgers[`burger${Date.now()}`] = burger;
		// 3. Записати наш новий об'єкт burgers в state
		this.setState({ burgers: burgers });
	};

	updateBurger = (key, updatedBurger) => {
		// 1. Робимо копію об'єкта state
		const burgers = { ...this.state.burgers };
		// 2. Обновляємо потріьний бургер
		burgers[key] = updatedBurger
		// 3. Записати наш новий об'єкт burgers в state
		this.setState({ burgers: burgers });
	};

	deleteBurger = (key) => {
		// 1. Робимо копію об'єкта state
		const burgers = { ...this.state.burgers };
		// 2. Удаляємо Бургер (оскільки тут є синхронізація з FireBase то прирівнюємо до null)
		burgers[key] = null;
		// 3. Записати наш новий об'єкт burgers в state
		this.setState({ burgers });

	}

	loadSampleBurgers = () => {
		this.setState({ burgers: sampleBurgers })
	};

	AddToOrder = (key) => {
		//1. Робимо копію об'єкта state
		const order = { ...this.state.order };
		//2. Добавити ключ до замовлення зі значенням 1, або обновити значення
		order[key] = order[key] + 1 || 1;
		// 3. Записати наш новий об'єкт burgers в state
		this.setState({ order: order });
	}

	deleteFromOrder = (key) => {
		//1. Робимо копію об'єкта state
		const order = { ...this.state.order };
		//2. Видаляємо бургер
		delete order[key];
		// 3. Записати наш новий об'єкт burgers в state
		this.setState({ order: order });
	}

	render() {
		return (
			<div className="burger-paradise">
				<div className="menu">
					<Header title="Palens BurgerHouse" />
					<ul className='burgers'>
						{Object.keys(this.state.burgers).map(key => {
							return <Burger
								key={key}
								index={key}
								AddToOrder={this.AddToOrder}
								details={this.state.burgers[key]}
							/>
						})}
					</ul>
				</div>
				<Order
					burgers={this.state.burgers}
					order={this.state.order}
					deleteFromOrder={this.deleteFromOrder}
				/>
				<MenuAdmin
					burgers={this.state.burgers}
					addBurger={this.addBurger}
					loadSampleBurgers={this.loadSampleBurgers}
					updateBurger={this.updateBurger}
					deleteBurger={this.deleteBurger}
				/>
			</div>
		);
	}
}
export default App;