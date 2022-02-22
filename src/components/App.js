import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';


class App extends React.Component {

	state = {
		burgers: {},
		order: {}
	};

	addBurger = (burger) => {
		// 1. Робимо копію об'єкта state
		const burgers = { ...this.state.burgers };
		// 2. Добавити новий бургер в об'єкт burgers
		burgers[`burger${Date.now()}`] = burger;
		// 3. Записати наш новий об'єкт burgers в state
		this.setState({ burgers: burgers });
	};

	loadSampleBurgers = () => {
		this.setState({ burgers: sampleBurgers })

	};

	render() {
		return (
			<div className="burger-paradise">
				<div className="menu">
					<Header title="Palens BurgerHouse" />
				</div>
				<Order />
				<MenuAdmin
					addBurger={this.addBurger}
					loadSampleBurgers={this.loadSampleBurgers}
				/>
			</div>
		);
	}
}
export default App;