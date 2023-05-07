import React from 'react';
import './register.css'
import {Form, Field} from 'react-final-form';

const Register = () => {
  const onSubmit = (values: {email: string, password: string, passwordRepeat: string}) => {
    
  }

  return (
    <div className='register'>
      <h1 className="register-title">Зарегистрируйтесь</h1>
      <Form 
        onSubmit={onSubmit}
        render={
          ({handleSubmit, form, values}) => (
            <form className='register__form' onSubmit={handleSubmit}>
              <div className="register__email">
                <label htmlFor="email">Ваш email</label>
                <div className="std-input-wrap">
                  <Field 
                    name='email'
                    component='input'  
                    type='text'
                  />
                </div>
              </div>

              <div className="register__password">
                <label htmlFor="password">Ваш пароль</label>
                <div className="std-input-wrap">
                  <Field 
                    name='password'
                    component='input'
                    type='password'  
                  />
                </div>
              </div>

              <div className="register__password-repeat">
                <label htmlFor="password-repeat">Повторите пароль</label>
                <div className="std-input-wrap">
                  <Field 
                    name='passwordRepeat'
                    component='input'
                    type='password'  
                  />
                </div>
              </div>

              <button type='submit'>
                Отправить
              </button>
            </form>
          )
        }
      />
    </div>
  );
};

export default Register;