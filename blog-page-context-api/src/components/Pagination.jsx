import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

  const { page, totalPages, handlePageChange } = useContext(AppContext);


  return (
    <div className='flex  py-3 fixed bottom-0 w-full bg-slate-800 text-white text-xl justify-evenly'>
      <div className='flex gap-2'>

        {
          page > 1 && <button onClick={() => handlePageChange(page - 1)}>previous</button>
        }

        {
          page < totalPages && <button onClick={() => handlePageChange(page + 1)}>next</button>
        }

      </div>

      <div>
        <p>{`page ${page} of ${totalPages}`}</p>
      </div>
    </div>
  )
}

export default Pagination