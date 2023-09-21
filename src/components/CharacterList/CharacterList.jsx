import React, { useState, useEffect } from 'react';
import { GetAllcharacters } from '../../functions/CharacterController';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

function CharacterList() {
    const [characters, setCharacters] = useState(null);
    const [initialPage, setInitialPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        GetAllcharacters(initialPage, setCharacters, setTotalPages);
    }, [initialPage]);

    const NextPage = () => {
        if (initialPage < totalPages) {
            setInitialPage(initialPage + 1);
        }
    };

    const PreviousPage = () => {
        if (initialPage > 1) {
            setInitialPage(initialPage - 1);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center mt-10 mb-10">
                <button
                    type="button"
                    onClick={PreviousPage}
                    disabled={initialPage === 1}

                    className={ initialPage === 1 ? 'cursor-not-allowed flex items-center cursor-block justify-center mr-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700  ':'flex items-center cursor-block justify-center mr-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                >
                    <HiArrowLeft />
                </button>

                <button
                    type="button"
                    onClick={NextPage}
                    disabled={initialPage === totalPages}
                    className={initialPage === totalPages ? 'cursor-not-allowed flex items-center justify-center ml-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400  ':'flex items-center justify-center ml-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                >
                    <HiArrowRight />
                </button>
            </div>
            <div className="Personajes">

                {characters != null ? (characters.map((character) => (
                    <Link  key={character.id} to={`/character/${character.id}`}>
                        <Card
                           
                            image={character.image}
                            name={character.name} />
                    </Link>

                ))) :
                    <div className="flex justify-center items-center mt-10 mb-10">
                        <img
                            src="/loading.gif"
                            width={206} />
                    </div>

                }



            </div>
            <div className="flex justify-center items-center mt-10 mb-10">
                <button
                    type="button"
                    onClick={PreviousPage}
                    disabled={initialPage === 1}
                    className={ initialPage === 1 ? 'cursor-not-allowed flex items-center cursor-block justify-center mr-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700  ':'flex items-center cursor-block justify-center mr-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                >
                    <HiArrowLeft />
                </button>

                <button
                    type="button"
                    onClick={NextPage}
                    disabled={initialPage === totalPages}
                    className={initialPage === totalPages ? 'cursor-not-allowed flex items-center justify-center ml-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400  ':'flex items-center justify-center ml-5 px-3 h-8 p-5 ml-0 text-3xl leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                >
                    <HiArrowRight />
                </button>
            </div>





        </>
    );
}

export default CharacterList;
