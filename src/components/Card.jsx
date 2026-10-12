import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
        <a href={props.elem.url} target='_blank '>
         <div className='h-60 w-55 '>
         <img className='h-full  object-cover rounded-xl' src={props.elem.download_url} alt="" />
         
      </div>
      <h2>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Card