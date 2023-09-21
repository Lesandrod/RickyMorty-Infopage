import React from 'react'
import style from './Card.module.css'


const Card = (props) => {

    return (
        <>
       
            <div className="transition duration-300 ease-in-out transform hover:scale-110 m-5  relative flex w-auto flex-col rounded-xl bg-slate-700 bg-clip-border text-gray-700 shadow-2xl">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl  bg-clip-border text-gray-700 shadow-lg shadow-lime-400">
                <img className={style.img} src={props.image ? props.image : '/loading.gif'} alt={props.name} />
                </div>
                <div className="p-6 text-center">
                    <h4 className=" text-white mb-1 text-base font-semibold block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {props.name ? props.name : 'Cargando.....'}
                    </h4>
                    
                </div>
                
            </div>
            
        </>
    )
}

export default Card