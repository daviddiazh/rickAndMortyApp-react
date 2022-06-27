import React, { Suspense, useEffect, useState } from 'react'
import { Loading } from './Loading';

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
        <main className={ darkMode ? 'main-bg-dark' : 'main-bg-light' }>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className={ darkMode ? 'main-randm-dark' : 'main-randm-light' }>
                        <div className='switch-mode'>
                            <p className={ darkMode ? 'current-page-dark' : 'current-page-light' }>Page {page}</p>
                            <button onClick={onSwitchMode} className='buttons-pages'>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
                        </div>
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
                        <div className='container-buttons-page'>
                            {
                                page > 1 
                                ? <button onClick={onPreviousPage}  className='buttons-pages'>{"< "} Page {page - 1}</button> : null
                            }
                        
                            {
                                page < 43 
                                ? <button onClick={onNextPage} className='buttons-pages'>Page {page + 1} {" >"}</button> 
                                : null
                            }
                        </div>
                    </div>
                )
            }
        </main>
    )
}
