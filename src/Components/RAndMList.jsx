import React, { Suspense, useEffect, useState } from 'react'

export const RAndMList = () => {

    const [ page, setPage ] = useState(1);
    const [ characters, setCharacters ] = useState([]);
    const [ darkMode, setDarkMode ] = useState(false);
    const [ loading, setLoading ] = useState(true)

    
    useEffect(() => {
        async function fetchData () {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const { results } = await data.json();
            setCharacters(results);
            setLoading(false)
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
    
    const onSwitchMode = () => {
        setDarkMode( darkMode ? false : true )
    }
    

    return (
        <>
            {
                loading ? (
                    <div>
                        <h1>LOADING......</h1>
                    </div>
                ) : (
                    <div className={ darkMode ? 'main-randm-dark' : 'main-randm-light' }>
                        <button onClick={onSwitchMode}>{darkMode ? 'Light mode' : 'Dark mode'}</button>
                        <div className={ darkMode ? 'list-randm-dark' : 'list-randm-light' }>
                            {
                                characters.map(character => (
                                    <div key={character.id} className={ darkMode ? 'card-randm-dark' : 'card-randm-light' }>
                                        <img src={character.image} />
                                        <div className={ darkMode ? 'info-randm-dark' : 'info-randm-light' }>
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
        </>
    )
}
