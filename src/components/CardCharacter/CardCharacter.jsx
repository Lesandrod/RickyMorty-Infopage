import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetUniquecharacter } from '../../functions/CharacterController'
const CardCharacter = () => {
    const params = useParams()
    const [character, setCharacter] = useState(null)


    useEffect(() => {
        GetUniquecharacter(params.id, setCharacter)

    }, [])
    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                {character != null ? (
                    <div className='flex flex-col    justify-center items-center bg-lime-700 rounded-xl'>
                        <div className="name text-white text-3xl p-4">
                            {character.name}
                        </div>

                        <div className="flex flex-col md:flex-row bg-slate-700 ">
                            <div className="left ">
                                <img src={character.image} alt="" />

                            </div>
                            <div className="right  m-5  bg-slate-700 rounded-xl">

                                <div className={character.status === 'Alive' ? 'w-4 h-4 rounded-full bg-green-500' : (character.status === 'Dead' ? 'w-4 h-4 rounded-full bg-red-500' : 'w-4 h-4 rounded-full bg-neutral-500')}></div>
                                <h4>Estado: {character.status}</h4>
                                <h4>Especie: {character.species}</h4>
                                <h4>Tipo: {character.type === '' ? '----' : character.type}</h4>
                                <h4>Género: {character.gender}</h4>
                                <h4>Origen: {character.origin.name}</h4>
                                <h4>Ubicación: {character.location.name}</h4>


                            </div>
                        </div>


                    </div>
                ) : ('Cargando personaje......')}

            </div>

        </>
    )
}

export default CardCharacter