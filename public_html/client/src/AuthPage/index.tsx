// отключил максимальную длину строки для svg
/* eslint-disable max-len */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputGroupTextLeft from '../components/InputGroupTextLeft';
import useAuth from '../hook/useAuth';
import HttpAuth from '../http/HttpAuth';

type UserSubmitForm = {
  login: string,
  password: string
}

const AuthPage = () => {
  const { control, handleSubmit } = useForm<UserSubmitForm>();
  const navigate = useNavigate();

  const user = useAuth();

  async function onSubmit(data: UserSubmitForm) {
    const { login, password } = data;
    const response = await HttpAuth.send({ login, password });

    if (response.status === 200) {
      const { token, userId } = response.data;
      user?.signIn({ token, userId }, () => {
        console.log('успешная авторизация');
        localStorage.setItem('token', response.data?.token);
        localStorage.setItem('userId', response.data?.userId);
        navigate('/');
      });
    }
  }

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div>
        <h4>Авторизация</h4>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: '330px' }}>
          <InputGroupTextLeft
            type="text"
            label="Логин"
            name="login"
            value=""
            placeholder="Введите логин"
            control={control}
            required
            text='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>'
          />
          <InputGroupTextLeft
            type="password"
            label="Пароль"
            name="password"
            value=""
            placeholder="Введите пароль"
            control={control}
            required
            text='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
          </svg>'
          />
          <Button type="submit">Войти</Button>
        </Form>
      </div>
    </div>
  );
};

export default AuthPage;
