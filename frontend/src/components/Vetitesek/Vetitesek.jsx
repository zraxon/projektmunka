import React, { useContext, useEffect } from 'react'
import Vetites from './Vetites.jsx'
import VetitesContext from '../../context/VetitesekContext.jsx'

function Vetitesek() {
    const {VetitesekFunc, Vetitesek} = useContext(VetitesContext)

    useEffect(() => {
        const fetchData = async () => { await VetitesekFunc() }
        fetchData()
    }, [])

    return (
        <div className='absolute text-6xl text-white w-4/5 p-10 bg-gray-500 left-[10%] mt-10 rounded-2xl'>
            <h1 className='mb-10 text-center bg-blue-500 rounded-2xl p-4'>Vetítések</h1>
            {Vetitesek.map((vetites,i) => (<Vetites key={i} vetites={vetites}/>))}
        </div>
    )
}

export default Vetitesek
