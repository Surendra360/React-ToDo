import React from 'react'

const App = () => {
  return (
    <>

      <div className='bg-green-100 shadow-md px-5 py-6 text-3xl font-bold flex items-center justify-center'>To Do</div>
      
      <div className='mt-10 bg-gray-200 px-10 py-10 flex item-center justify-center'>
        <input className='border-b border-black p-1 outline-none' type="text" />
        <button className='ml-2 px-2 py-1 rounded bg-gray-600 text-white' >submit</button>
      </div>


    </>
  
  )
}

export default App