import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'

const CitaGratuita = () => {
  return (
    <section>
      <Title>CITA GRATUITA</Title>
      <div className='flex flex-col'>
        <Subtitle>
          Reserva una primera<br />
          <span className='font-bold'>cita gratuita </span>para conocernos
        </Subtitle>
        <div className='flex sm:flex-row mt-[5.75rem]'>
          <p className=' max-w-[34.1875rem] w-full mt-16'>¡Estás a solo un paso de comenzar tu viaje hacia una vida más equilibrada y plena! Reservar una cita es fácil y rápido.<br /><br />
            Simplemente completa el formulario de reserva en mi web y selecciona la fecha y hora que mejor se adapten a tu agenda.<br /><br />
            Estoy emocionada de trabajar contigo y brindarte el apoyo necesario para alcanzar tus metas. ¡No esperes más y reserva tu cita hoy mismo!
          </p>
          <div className='max-w-[27.56rem] w-full sm:ml-[8.31rem]'>
            <form className='flex flex-col gap-[3.38rem]'>
              <input placeholder='Nombre *' />
              <input placeholder='Apellidos *' />
              <input placeholder='Teléfono *' />
            </form>
            <button className='min-w-[27.56rem] w-full mt-[3.38rem]'>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CitaGratuita