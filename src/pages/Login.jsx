import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';
import { loginService } from '../features/auth/authService';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email().required("Email required"),
  password: Yup.string().required("Password required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { isAuthenticated } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    try {
      const user = await loginService(data);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginSuccess(user));
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => navigate('/dashboard'), 1500);
    }
  }, [isAuthenticated, navigate]);


  return (
    <>
      {isAuthenticated ? (
        <div className="text-center mt-10">
          <h1 className="text-xl text-green-600 font-semibold">You are already logged in! Redirecting...</h1>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input {...register("email")} placeholder="Email" className="w-full border p-2" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
            <div>
              <input {...register("password")} type="password" placeholder="Password" className="w-full border p-2" />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
