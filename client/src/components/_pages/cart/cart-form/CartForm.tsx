import React from 'react';
import './cartForm.css';
import {Form, Field} from 'react-final-form';

export type OrderDataType = {
  email: string
  name: string
  surename: string
  phone: string
  address: {
    locality: string
    house: string
    apartment: string
  }
  courierComment: string
}

type Props = {
  orderSum: number
}

const CartForm: React.FC<Props> = (props) => {
  const onSubmit = (values: any) => {
    console.log(values);
  }

  return (
    <div className='cart-form'>
      <Form 
        onSubmit={onSubmit}
        render={
          ( {handleSubmit} ) => (
            <form onSubmit={handleSubmit} className='cart-form-grid'>
              <div className="cart-form__fields">

                <h3>Личные данные</h3>

                <div className="cart-form__fields-item">
                  <p>Email</p>
                   <div className="std-input-wrap">
                    <Field name='email' component='input'/>
                  </div>
                </div> 

                <div className="cart-form__fields-item">
                  <p>Имя</p>
                   <div className="std-input-wrap">
                    <Field name='name' component='input'/>
                  </div>
                </div> 

                <div className="cart-form__fields-item">
                  <p>Фамилия</p>
                   <div className="std-input-wrap">
                    <Field name='surename' component='input'/>
                  </div>
                </div>
                
                <div className="cart-form__fields-item">
                  <p>Телефон</p>
                   <div className="std-input-wrap">
                    <Field name='phone' component='input'/>
                  </div>
                </div>

                <h3>Адрес</h3>

                <div className="cart-form__fields-item">
                  <p>Населенный пункт</p>
                   <div className="std-input-wrap">
                    <Field name='addressLocality' component='input'/>
                  </div>
                </div>

                <div className="cart-form__fields-item split-fields">
                  <div className="cart-form__fields-row">
                    <div className="cart-form__fields-item">
                      <p>Дом</p>
                      <div className="std-input-wrap">
                        <Field name='addressHouse' component='input'/>
                      </div>
                    </div>
                    <div className="cart-form__fields-item">
                      <p>Квартира/офис</p>
                      <div className="std-input-wrap">
                        <Field name='addressApartment' component='input'/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-form__fields-item">
                  <p>Комментарий для курьера</p>
                  <Field name='addressCourierComment' component='textarea'/>  
                </div>
              </div>

              <div className="cart-form__order-wrap">
                <div className="cart-form__order">
                  <div className="cart-form__order-row">
                    <p className="cart-form__order-title">доставка:</p>
                    <p className="cart-form__order-price number-font">0р.</p>
                  </div>
                  <div className="cart-form__order-row">
                    <p className="cart-form__order-title">итого:</p>
                    <p className="cart-form__order-price number-font">{props.orderSum}р.</p>
                  </div>
                  <button className='cart-form__order-btn' type='submit'>Оформиить заказ</button>
                </div>
              </div>
            </form>
          )
        }
      />
    </div>
  );
};

export default CartForm;