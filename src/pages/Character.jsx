import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetUniquecharacter } from '../functions/CharacterController'
const Character = () => {
    const params = useParams()
    const [character, setCharacter] = useState(null)


    useEffect(() => {
        GetUniquecharacter(params.id, setCharacter)

    }, [])
    return (
        <div className="personaje_contenedor">
        {character != null ? (
            <div>
                <h2> {character.name}</h2>
                <h4>ID: {character.id}</h4>
                
            </div>
        ):('Cargando personaje......') }
        
    </div>
    )
}

export default Character