import { HomeIcon, CheckCircleIcon, ExternalLinkIcon } from '@heroicons/react/solid';

function Sidebar() {
    return(
        <>
            <div class="fixed inset-x-0 bottom-0 md:top-0 md:left-0 md:right-0 p-3 md:w-[11rem] lg:w-[16rem] border-t border-black bg-slate-700 text-white md:divide-y">
                <div class="flex flex-row md:grid md:space-y-4 md:p-3">
                    <div class="basis-1/3 grid justify-items-center md:flex md:items-center">
                        <HomeIcon className="h-5 w-5 text-black md:mr-3"/>
                        Accueil
                    </div>
                    <div class="basis-1/3 grid justify-items-center md:flex">
                        <ExternalLinkIcon className="h-5 w-5 text-black md:mr-3"/>
                        Playlist
                    </div>
                    <div class="basis-1/3 grid justify-items-center md:flex">
                        <CheckCircleIcon className="h-5 w-5 text-black md:mr-3"/>
                        Découvrir    
                    </div>    
                </div>
                <div className='hidden md:block min-h-screen'>
                    <h1 className='py-5'>Mes playlists</h1>
                    <ul className='overflow-y-scroll h-[60vh] scrollbar-hide'>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                        <li>ok</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;