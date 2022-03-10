import DefaultCover from '../../public/img/default-album-art.png';
import Image from 'next/dist/client/image';

function MusicPlayer() {
    return(
        <>
            <div className="sticky bottom-[69px] md:bottom-0 bg-slate-800 z-auto inset-x-0 py-3 px-2 md:px-64">
                <div className="flex space-x-4">
                    <div className="">
                        <Image src={DefaultCover} width={48} height={48} />
                    </div>
                    <div className='grid'>
                        <p className='text-xs text-gray-400'>Default Artist</p>
                        <p className='text-gray-200'>Default Title</p>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <div>
                            00:00
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MusicPlayer;