import About from '@/components/about'
import ArtExcel from '@/components/artexcel'
import Blog from '@/components/blog'
import CitaGratuita from '@/components/cita-gratuita'
import Hero from '@/components/hero'
import Katherin from '@/components/katherin'
import Navbar from '@/components/navbar'
import RespiraSalud from '@/components/respira-salud'
import Servicios from '@/components/servicios'
import Testimonios from '@/components/testimonios'

const Home = () => {
  return (
    <main
      className='flex flex-col gap-y-32 relative px-[3.125rem] min-h-screen font-sans bg-main'
    >
      <Navbar />
      <Hero />
      <About />
      <RespiraSalud />
      <Katherin />
      <Servicios />
      <ArtExcel />
      <CitaGratuita />
      <Testimonios />
      <Blog />
    </main>
  )
}


export default Home