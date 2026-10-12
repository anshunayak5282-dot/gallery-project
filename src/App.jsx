import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

    const [userData, setuserData] = useState([])

    const [index, setIndex] = useState(1)

    const getData = async()=>{
      const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      
      setuserData(response.data)
      console.log(response.data)
    }

    useEffect(function(){
      getData()
    },[index])

   let printUserData = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading......</h3>

   if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
   }

  return (
    <div className=' overflow-auto h-screen p-4 bg-black text-white px-40'>
           {/* <button
           onClick={getData}
            className='bg-green-400 px-10 py-2 rounded'>
              Click</button> */}

              <div className='flex flex-wrap gap-5 mt-10'>
                    {printUserData}
              </div>

              <div className='flex justify-center items-center gap-6 p-4'>
                   <button
                   style={{opacity: index == 1 ? 0.6 : 1}}
                    className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black
                     px-4 py-2 rounded font-semibold'
                     onClick={()=>{
                      if(index>1){
                        setIndex(index-1)
                        setuserData([])
                      }
                     }}
                     >
                      Prev
                      </button>
                      <h3>Page:{index}</h3>
                   <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black px-4 py-2
                    rounded font-semibold'
                    onClick={()=>{
                      setuserData([])
                      setIndex(index+1)
                    }}
                    >
                      Next
                      </button>
                          
              </div>
           
     
    </div>
  )
}

export default App