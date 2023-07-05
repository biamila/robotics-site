import {BsFillCircleFill} from "react-icons/bs"
import Image from "next/image";

const Equipment = ({item : {key, name, stock, img}}) =>  {
    return(
        <div className="mx-auto h-96 flex flex-col shadow-bottomShadow bg-slate-200 m-5 text-center rounded-lg dark:bg-cyan-600">
            <img className="object-cover rounded-t-md h-48" src={img} />   

            <div className="flex justify-between m-4 px-3">
                <h2 className="text-2xl">{name}</h2>
                <BsFillCircleFill className={ stock>0 ? "text-green-800 text-2xl" : "text-red-800 text-2xl" }/>
            </div>

            <h3 className="grow align-middle px-3">This is nice equipment. Use it with care</h3>
            
            <div className="pb-3 text-lg flex justify-evenly rounded-xl">
                <button className="font-bold text-md text-textColour px-4 py-2 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour">Save</button>
                <button className="font-bold text-md text-textColour px-4 py-2 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour">Checkout</button>
            </div>
        </div>

    )
}

export default Equipment;