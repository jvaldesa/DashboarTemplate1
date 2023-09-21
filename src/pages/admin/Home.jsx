import React from 'react'
import { CardTicket } from '../../components/CardTicket'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { RowTicket } from '../../components/RowTicket'
import tickets from './data'

export const Home = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-4xl text-white'>Good morning Jvaldes!</h1>
        <div className='flex items-center gap-2 text-3xl'>
          <RiArrowLeftSLine className='hover:cursor-pointer hover:text-white transition-colors' />
          <RiArrowRightSLine className='hover:cursor-pointer hover:text-white transition-colors' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8'>
        <CardTicket
          ticket = 'total'
          totalTickets = '145,000'
          text = 'Tickets totales'
        />
        <CardTicket
          ticket="pending"
          totalTickets="5,000"
          text="Tickets pendientes"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets en proceso"
        />
        <CardTicket
          ticket="close"
          totalTickets="10,000"
          text="Tickets cerrados"
        />
      </div>
      <div>
        <h1 className='text-2xl text-white my-10'>Tickets más recientes</h1>
      </div>
      <div className='bg-secondary-100 p-8 rounded-xl'>
        <div className='hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4'>
          <h5>ID</h5>
          <h5>Descripción</h5>
          <h5>Estatus</h5>
          <h5>Fecha</h5>
          <h5>Acciones</h5>
        </div>
        <div>
          {
            tickets.map(ticket => {
              console.log(ticket.id);
              return(
                <RowTicket
                  key = {ticket.id}
                  id = {ticket.id}
                  description = {ticket.description}
                  estatus = {ticket.estatus}
                  fecha = {ticket.fecha}
                />)
            })
          }
          {/* <RowTicket
            id = "25546"
            description = "Mi computadora no prende"
            estatus = "Abierto"
            fecha = "28 octubre 2022"
          />
          <RowTicket
            id = "25546"
            description = "Mi computadora no prende"
            estatus = "En proceso"
            fecha = "28 octubre 2022"
          />
          <RowTicket
            id = "25546"
            description = "Mi computadora no prende"
            estatus = "Cerrado"
            fecha = "28 octubre 2022"
          /> */}
        </div>
      </div>
    </div>
  )
}
