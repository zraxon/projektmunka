import { useContext } from "react"

import ImageContext from "../context/ImageContext"

function Image({path,imagename,imageid}) {
    
    const {imgDelete}=useContext(ImageContext);
  return (
    <div className="group cursor-pointer relative">
    <img
      src={`${import.meta.env.VITE_BASE_URL}${path}${imagename}`}
      alt={imagename}
      className="w-48 mx-auto object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button onClick={()=>{imgDelete(imageid);}} className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        Törlés
      </button>
    </div>
  </div>
  )
}

export default Image