import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiLockLine, RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
        <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
          Iniciar <span className="text-primary">sesión</span>
        </h1>
        <form className='mb-8'>
          <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100'>
            <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt=""
              className='w-4 h-4'
            />
            Ingresar con google

          </button>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
              placeholder='Correo electrónico'
            />
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword? "text": "password"}
              className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
              placeholder='Contraseña'
            />
            {
              showPassword? (
                <RiEyeOffLine onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"/>
              ) : (
                <RiEyeLine onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"/>
              )
            }
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-700 transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-4 items-center">
          <Link className="hover:text-primary transition-colors" to="/olvide-password">¿Olvidaste tu contraseña?</Link>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?{" "}
            <Link className="text-primary hover:text-gray-100 transition-colors" to="/registro">Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
