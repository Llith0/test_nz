import { HomeIcon, CheckCircleIcon, ExternalLinkIcon } from '@heroicons/react/solid';

function Siderbar() {
    return(
        <>
            <div class="absolute lg:relative inset-x-0 bottom-0 flex flex-row lg:grid p-3 border-t border-black lg:space-y-2">
                <div class="basis-1/3 lg:basis-0 grid md:flex justify-items-center lg:items-center">
                    <HomeIcon className="h-5 w-5 text-black"/>
                    Accueil
                </div>
                <div class="basis-1/3 lg:basis-0 grid md:flex justify-items-center lg:items-center">
                    <ExternalLinkIcon className="h-5 w-5 text-black"/>
                    Playlist
                </div>
                <div class="basis-1/3 grid md:flex justify-items-center lg:items-center">
                    <CheckCircleIcon className="h-5 w-5 text-black"/>
                    Découvrir    
                </div>
            </div>
        </>
    );
};

export default Siderbar;