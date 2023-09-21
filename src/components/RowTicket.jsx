import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';

export const RowTicket = (props) => {

  const {id, description, estatus, fecha} = props

  let textColor = ''

  switch(estatus) {
    case "Abierto":
      textColor = "bg-yellow-500/10 text-yellow-500"
      break
    case "En proceso":
      textColor = "bg-blue-500/10 text-blue-500"
      break
    case "Cerrado":
      textColor = "bg-green-500/10 text-green-500"
      break
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl'>
      <div>
        <h5 className='md:hidden text-white font-bold mb-2'>ID</h5>
        <span>#{id}</span>
      </div>
      <div>
        <h5 className='md:hidden text-white font-bold mb-2'>Descripción</h5>
        <p>{description}</p>
      </div>
      <div>
        <h5 className='md:hidden text-white font-bold mb-2'>Estatus</h5>
        <span className={`py-1 px-2 ${textColor} rounded-lg`}>
          {estatus}
        </span>
      </div>
      <div>
        <h5 className='md:hidden text-white font-bold mb-2'>Fecha</h5>
        <span>{fecha}</span>
      </div>
      <div>
        <h5 className='md:hidden text-white font-bold mb-2'>Acciones</h5>
        <Menu
            menuButton={
              <MenuButton className="hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                Acciones
              </MenuButton>
            }
            transition
            arrow
            arrowProps={{className:"bg-secondary-100"}}
            menuClassName="bg-secondary-100 p-4"
            align='end'
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-2 flex-1"
              >
                Dashboard tickets
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-2 flex-1"
              >
                Información
              </Link>
            </MenuItem>
          </Menu>
      </div>
    </div>
  )
}
