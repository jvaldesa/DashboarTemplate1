import React from 'react'
import { RiArrowDownSLine, RiChat3Line, RiLogoutCircleLine, RiNotification3Line, RiSettings3Line, RiThumbUpLine } from 'react-icons/ri'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-2'>

        {/* Notificaciones */}
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className='absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>
                2
              </span>
            </MenuButton>
          }
          transition
          arrow
          arrowProps={{className:"bg-secondary-100"}}
          menuClassName="bg-secondary-100 p-4"
          align='end'
        >
          <h1 className='text-gray-300 text-center font-medium'>Notificaciones (2)</h1>
          <hr className='my-6 border-gray-500' />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
            >
              <img 
                src="https://img.freepik.com/foto-gratis/joven-empresario-traves-telefono-movil-oficina-mirando-camara_637285-8766.jpg" 
                alt="img" 
                className='w-8 h-8 object-cover rounded-full'
              />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Julio Valdés</span>{" "}
                  <span className='text-[8px]'>28/09/2023</span>
                </div>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
            >
              <RiThumbUpLine className='p-2 bg-blue-700 box-content rounded-full'/>
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Nuevo like</span>{" "}
                  <span className='text-[8px]'>28/09/2023</span>
                </div>
                <p> A Julio Valdés le gusta tu pub...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
            >
              <RiChat3Line className='p-2 bg-yellow-200 text-yellow-700 box-content rounded-full'/>
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Nuevo comentario</span>{" "}
                  <span className='text-[8px]'>28/09/2023</span>
                </div>
                <p> Julio Valdés ha comentado tu...</p>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-6 border-gray-500' />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
       

        {/* Dropdown Menu */}
        <Menu 
          menuButton={
            <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
              <img 
                src="https://img.freepik.com/foto-gratis/joven-empresario-traves-telefono-movil-oficina-mirando-camara_637285-8766.jpg" 
                alt="img" 
                className='w-6 h-6 object-cover rounded-full'
              />
              <span>Julio Valdés</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
          arrow
          arrowProps={{className:"bg-secondary-100"}}
          menuClassName="bg-secondary-100"
          align='end'
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/profile" className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <img 
                src="https://img.freepik.com/foto-gratis/joven-empresario-traves-telefono-movil-oficina-mirando-camara_637285-8766.jpg" 
                alt="img" 
                className='w-8 h-8 object-cover rounded-full'
              />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>Julio Valdés</span>
                <span className='text-xs text-gray-500'>jmavaldes@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/configuracion" className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/logout" className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiLogoutCircleLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </div>
  )
}
