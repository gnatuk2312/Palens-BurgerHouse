import React from 'react';
import PropTypes from 'prop-types';

const AddBurgerForm = props => {

	const nameRef = React.createRef();
	const priceRef = React.createRef();
	const statusRef = React.createRef();
	const descRef = React.createRef();
	const imageRef = React.createRef();

	const createBurger = event => {
		event.preventDefault();
		const burger = {
			name: nameRef.current.value,
			price: parseFloat(priceRef.current.value || 0),
			status: statusRef.current.value,
			desc: descRef.current.value,
			image: imageRef.current.value
		}

		props.addBurger(burger);

		event.currentTarget.reset();

	}

	return (
		<form className='burger-edit' onSubmit={createBurger}>
			<input ref={nameRef} name='name' type='text' placeholder='Назва' autoComplete='off'></input>
			<input ref={priceRef} name='price' type='text' placeholder='Ціна' autoComplete='off'></input>
			<select ref={statusRef} name='status' className='status'>
				<option value='available'>Доступно</option>
				<option value='unavailable'>Недоступно</option>
			</select>
			<textarea ref={descRef} name='desc' placeholder='Опис'></textarea>
			<input ref={imageRef} name='image' type='text' placeholder='Зображення' autoComplete='off'></input>
			<button type='submit'>Добавити в меню</button>
		</form>
	);
};

AddBurgerForm.propTypes = {
	addBurger: PropTypes.func
};

export default AddBurgerForm; 