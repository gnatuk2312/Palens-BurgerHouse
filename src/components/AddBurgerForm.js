import React from 'react';

class AddBurgerForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createBurger = (event) => {
		event.preventDefault();
		const burger = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value || 0),
			status: this.statusRef.current.value,
			desc: this.descRef.current.value,
			image: this.imageRef.current.value
		}

		this.props.addBurger(burger);

		event.currentTarget.reset();

	}

	render() {
		return (
			<form className='burger-edit' onSubmit={this.createBurger}>
				<input ref={this.nameRef} name='name' type='text' placeholder='Назва' autoComplete='off'></input>
				<input ref={this.priceRef} name='price' type='text' placeholder='Ціна' autoComplete='off'></input>
				<select ref={this.statusRef} name='status' className='status'>
					<option value='available'>Доступно</option>
					<option value='unavailable'>Забрати з меню</option>
				</select>
				<textarea ref={this.descRef} name='desc' placeholder='Опис'></textarea>
				<input ref={this.imageRef} name='image' type='text' placeholder='Зображення' autoComplete='off'></input>
				<button type='submit'>Добавити в меню</button>
			</form>
		)
	}
}
export default AddBurgerForm; 