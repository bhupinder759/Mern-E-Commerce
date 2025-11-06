import CommonForm from '@/components/common/CommonForm';
import { loginFromControls } from '@/config';
import { loginUser } from '@/store/auth-slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner"


const AuthLogin = () => {

  const initialState = {
      email : '',
      password: '',
    }
  
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    function onSubmit (event) {
      event.preventDefault();
      dispatch(loginUser(formData)).then((data) => {
        if (data?.payload?.success) {
          toast.success(data.payload.message);
          // navigate('/dashboard')
        } else {
          toast.error(data?.payload?.message || 'Invalid credentials', { variant: 'destructive' });
          console.error(data?.payload?.message || 'Login failed');
        }
      }).catch((error) => {
        toast.error(error.message || 'Login failed', { variant: 'destructive' });
        console.error(error);
      });

    }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground" >
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Sign In
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFromControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthLogin
