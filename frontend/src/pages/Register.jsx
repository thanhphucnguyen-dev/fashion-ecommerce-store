import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import register from '~/assets/register.webp'

const Register = () => {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('User Registered: ', { name, email, password })
    // TODO: xử lý đăng ký
  }

  return (
    <div
      className='flex'
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      }}
    >
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-md p-8 rounded-lg border shadow-sm'
          style={{
            backgroundColor: theme.palette.background.paper,
            borderColor: theme.palette.divider
          }}
        >
          <div className='flex justify-center mb-6'>
            <h2
              className='text-xl font-medium'
              style={{ color: theme.palette.primary.main }}
            >
              Rabbit
            </h2>
          </div>

          <h2 className='text-2xl font-bold text-center mb-6'>Hey there!</h2>
          <p className='text-center mb-6'>Enter your name, email and password to Register</p>

          {/* Name */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your name'
              style={{
                backgroundColor: theme.palette.background.default,
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary
              }}
            />
          </div>

          {/* Email */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your email address'
              style={{
                backgroundColor: theme.palette.background.default,
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary
              }}
            />
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your password'
              style={{
                backgroundColor: theme.palette.background.default,
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary
              }}
            />
          </div>

          <button
            type='submit'
            className='w-full p-2 rounded-lg font-semibold transition'
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
            }}
          >
            Sign Up
          </button>

          <p className='mt-6 text-center text-sm'>
            Already have an account?{' '}
            <Link to='/login' style={{ color: theme.palette.secondary.main }}>
              Login
            </Link>
          </p>
        </form>
      </div>

      <div
        className='hidden md:block w-1/2'
        style={{
          backgroundColor: theme.palette.background.neutral
        }}
      >
        <div className='h-full flex flex-col justify-center items-center'>
          <img
            src={register}
            alt='Register'
            className='h-[750px] w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Register
