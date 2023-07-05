export default function Header() {
    return(
        <div className="p-6 bg-cyan-500 rounded-md">
            <nav className='flex justify-between'>
            <h2 className="text-xl font-funky">run by KCL Robotics</h2>
            <ul className='flex items-center gap-2'>
                <button className="font-bold text-md text-textColour px-4 py-2 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour"> Menu</button> 
                <button className="font-bold text-md text-textColour px-4 py-2 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour"> Log in</button>
                <button className="font-bold text-md text-textColour px-4 py-2 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour"> Register</button>
            </ul>
            </nav>   
        </div>
    )
        
}