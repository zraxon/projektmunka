import React, { useContext, useEffect } from 'react'
import Jegy from './Jegy'
import JegyContext from '../../context/JegyarakContext'

function Jegyarak() {
    const {Jegyek, jegyArak} = useContext(JegyContext)

    useEffect(() => {
        const fetchData = async () => { await Jegyek() }
        fetchData()
    }, [])

    return (
        <div className='absolute text-6xl text-white w-2/5 p-10 bg-gray-500 left-[30%] mt-10 rounded-2xl'>
            <h1 className='mb-10'>Jegyárak</h1>

            {jegyArak.map((jegy,i) => (<Jegy key={i} jegy={jegy}/>))}
        </div>
    )
}

export default Jegyarak