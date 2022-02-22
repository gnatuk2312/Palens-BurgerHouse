import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
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

	AddToOrder = (key) => {
		//1. Робимо копію об'єкта state
		const order = { ...this.state.order };
		//2. Добавити ключ до замовлення зі значенням 1, або обновити значення
		order[key] = order[key] + 1 || 1;
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