import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiLockLine, RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const ForgetPassword  = () => {

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
      <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
        Recuperar <span className="text-primary">contraseña</span>
      </h1>
      <form className='mb-8'>
        
        <div className="relative mb-8">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
            placeholder='Correo electrónico'
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-700 transition-colors"
          >
            Enviar instrucciones
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 items-center">
        <span className="flex items-center gap-2">
          ¿Ya tienes cuenta?{" "}
          <Link className="text-primary hover:text-gray-100 transition-colors" to="/auth">Ingresa</Link>
        </span>
        <span className="flex items-center gap-2">
          ¿No tienes cuenta?{" "}
          <Link className="text-primary hover:text-gray-100 transition-colors" to="/auth/registro">Registrate</Link>
        </span>
      </div>
    </div>
  )
}
