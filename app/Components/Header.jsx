export default function Header() {
    return(
        <div className="p-6 bg-cyan-500 rounded-md">
            <nav className='flex justify-between'>
            <h2 className="text-xl font-funky">run by KCL Robotics</h2>
            <ul className='flex items-center gap-2'>
                <button className="font-bold text-sm text-textColour px-2 py-1 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour lg:text-md lg:px-4 lg:py-2"> Menu</button> 
                <button className="font-bold text-sm text-textColour px-2 py-1 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour lg:text-md lg:px-4 lg:py-2"> Login</button>
                <button className="font-bold text-sm text-textColour px-2 py-1 rounded-lg bg-slate-200 shadow-md
                    hover:bg-slate-100 focus:outline-none focus:ring focus:ring-textColour lg:text-md lg:px-4 lg:py-2"> Register</button>
            </ul>
            </nav>   
        </div>
    )
        
}