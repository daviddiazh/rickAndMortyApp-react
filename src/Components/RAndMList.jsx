import React, { Suspense, useEffect, useState } from 'react'

export const RAndMList = () => {

    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const { results } = await data.json();
            setCharacters(results);
            console.log(results)
        }
        fetchData()
    }, [page])

    const onNextPage = () => {
        setPage(page + 1)
    }

    const onPreviousPage = () => {
        setPage(page - 1)
    }

    return (
        <div className='main-randm'>
            <div className='list-randm'>
                {
                    characters.map(character => (
                        <div key={character.id} className='card-randm'>
                            <img src={character.image} />
                            <div className='info-randm'>
                                <p>#{character.id}</p>
                                <p>{character.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
            page > 1 ? <button onClick={onPreviousPage}>Page {page - 1}</button> : null
            }{
            page < 43 ? <button onClick={onNextPage}>Page {page + 1}</button> : null
            }
        </div>
    )
}
