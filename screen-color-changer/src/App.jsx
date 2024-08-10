import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("white")
  return (
    <>
      <div className='w-full h-screen'
        style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 rounded-full'>
            <button
              onClick={() => setcolor('red')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg text-white '
              style={{ backgroundColor: "red" }} >Red</button>
            <button
              onClick={() => setcolor('green')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg text-white '
              style={{ backgroundColor: "green" }} >Green</button>
            <button
              onClick={() => setcolor('blue')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg text-white'
              style={{ backgroundColor: "blue" }} >Blue</button>
            <button
              onClick={() => setcolor('pink')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "pink" }} >Pink</button>
            <button
              onClick={() => setcolor('purple')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg text-white '
              style={{ backgroundColor: "purple" }} >Purple</button>
            <button
              onClick={() => setcolor('olive')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg text-white '
              style={{ backgroundColor: "olive" }} >Olive</button>
            <button
              onClick={() => setcolor('yellow')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg text-black'
              style={{ backgroundColor: "yellow" }} >Yellow</button>
            <button
              onClick={() => setcolor('gray')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg text-white '
              style={{ backgroundColor: "gray" }} >Gray</button>
            <button
              onClick={() => setcolor('gold')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg '
              style={{ backgroundColor: "gold" }} >Gold</button>
            <button
              onClick={() => setcolor('black')}
              className=' outline-none px-4 py-1 rounded-full shadow-lg  text-white'
              style={{ backgroundColor: "black" }} >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


