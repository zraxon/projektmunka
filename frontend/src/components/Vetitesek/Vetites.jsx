import React from 'react'

function Vetites({ vetites }) {
    return (
        <div className='bg-gray-400 rounded-2xl mb-5 p-3'>
            <h1 className='text-3xl'>Típus: {vetites.TPS_Tipus}</h1>
            <h2 className='text-2xl'>Ár: {vetites.AR} FT</h2>
        </div>
    )
}

export default Vetites
