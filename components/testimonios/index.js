import React from 'react'
import Title from '../common/Title'
import Testimonio from './Testimonio'

const testimonios = [
  {
    message: '“What I like about this private online meeting formula is that wherever I am in the world I can follow my training. Katherine has been my sports coach for a year. She is attentive, progressive, motivating and adaptable! It\'s a great formula.Thank you Katherin for your dedication.I highly recommend her.”',
    name: 'Nathalie',
    age: 61
  },
  {
    message: '“Estoy disfrutando mucho de las clases de yoga, me he iniciado en la práctica gracias a ti y lo estoy disfrutando una barbaridad. Kath encuentra muy bien el equilibrio entre el dinamismo físico y la parte más mental/espiritual. He mejorado mi flexibilidad y el control sobre cuerpo y mente. Reconozco que en la meditación tengo tendencia a desconectar un poco, pero estoy seguro de que con práctica lo lograré también.”',
    name: 'Santi',
    age: 30
  },
  {
    message: '“A mi el Yoga y Meditación salvaron mi vida, fue la cura a mi ansiedad. También mi hija de 7 años se suma a las clases, las dos hemos aprendido muchísimo este último año y no podemos estar más que agradecidas con Katy.”',
    name: 'Alexandra',
    age: 38
  },
  {
    message: '“Gracias a Kath me he iniciado en la práctica del yoga y la meditación. Había probado varios centros sin resultado hasta que llegué a sus clases, a las que llevo asistiendo aproximadamente un año y medio; ¡Estoy encantada! Ella ha conseguido motivarme para practicar estas disciplinas, adoro el yoga gracias a Kath.”',
    name: 'Ángela',
    age: 29
  },
  {
    message: '“No creía que podía ser posible eliminar esos patrones que llevo arrastrando desde que tengo uso de razón, Esos pensamientos, formas de actuar negativas...no sabía que eran rencores, trauma y falta de amor, dolor de un duelo muy intenso, el sentimiento de inferioridad, la falta de autoconfianza personal y el eterno sentimiento de culpa sin causa. Pero Gracias a Katherine que es una excelente terapeuta y a este método me siento cada vez mejor.... super recomendado . Gracias Katherin”',
    name: 'Yeseli',
    age: 43
  },
  {
    message: '“Con Katherin he empezado un proceso terapéutico de profundización y liberación del condicionamiento educativo- sociocultural. Estoy viendo los frutos de manera muy orgánica y natural, donde mi estado general se aproxima a la serenidad y observación de la experiencia sin juicio. Su manera de acompañar, muy conectada entre cielo y tierra, como la medicina tradicional china o la ayurveda tienen como base. Recomiendo hacer proceso con ella, pues las dimensiones del ser se abren como puertas y la liberación emocional y transgeneracional se produce a un nivel profundo.”',
    name: 'Victoria',
    age: 33
  },
]

const Testimonios = () => {
  return (
    <section>
      <Title>TESTIMONIOS</Title>
      <div className='flex flex-col items-center justify-center w-full'>
        {testimonios.map(({ message, name, age }, index) => (
          <div key={`test-${index}`} className='max-w-[56.25rem] w-full'>
            <Testimonio
              name={name}
              age={age} >
              {message}
            </Testimonio>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonios