import { useState } from "react";
import { RiEyeFill, RiEyeOffFill, RiLockFill, RiMailFill } from "react-icons/ri";

export const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='bg-secondary-100 p-8 rounded-xl'>
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white'>Iniciar sesión</h1>
      <form className=''>
        <button className='flex items-center gap-4 mb-8'>
          <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt=""
            className='w-4 h-4'
          />
          Ingresar con google

        </button>
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
            placeholder='Correo electrónico'
          />
        </div>
        <div className="relative">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword? "text": "password"}
            className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
            placeholder='Contraseña'
          />
          {
            showPassword? (
              <RiEyeOffFill onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"/>
            ) : (
              <RiEyeFill onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"/>
            )
          }
        </div>
      </form>
    </div>
  )
}
