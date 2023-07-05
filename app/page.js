import Image from 'next/image'
import Header from "./Components/Header.jsx"
import Equipment from './Components/Equipment.jsx'

export default function Home() {

  const itemTest = [{"key": "1", "name":"Hammer", "stock":5, "img" : "hammer.jpg"},
                    {"key": "2", "name":"Saw", "stock":2, "img":"saw.jpg"},
                    {"key": "3", "name":"3D Printer", "stock":0, "img":"threeDPrinter.jpg"},
                    {"key": "4", "name":"Arduino", "stock":1, "img":"arduino.jpg" },
                    {"key": "1", "name":"Hammer", "stock":5, "img":"hammer.jpg"},
                    {"key": "1", "name":"Hammer", "stock":5, "img":"hammer.jpg"},
                    {"key": "2", "name":"Saw", "stock":2, "img":"saw.jpg" }]

  return (
    /* Header */
    <div className="m-5">
      <Header />

      <section>

        <div className='mx-auto py-20 max-w-xl' >
          <h2 className='text-left'>The newest</h2>
          <h1 className=' text-center font-subscribe text-9xl'>Wheatstone Labs</h1>
          <h2 className='text-right'>website</h2>
        </div>

      </section>

      <section>
        <div>
          <h2 className='text-xl p-2 text-center font-light bg-cyan-500/30 rounded-md dark:bg-bgColour'>Equipaments </h2>
          
           
        </div>
          <div className='flex flex-wrap gap-4'>
          {itemTest.map( (equipment) => (
            <Equipment item={equipment}/>
            
          ))}
          </div>
      </section>

    </div>
  )
}
