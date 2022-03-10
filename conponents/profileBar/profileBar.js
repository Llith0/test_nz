import Image from "next/image";
import defaultPicture from "../../public/img/default-profile-pic.jpg";
import { ChevronDownIcon } from '@heroicons/react/solid';

function ProfileBar() {
    return (
        <>
            <div className="absolute md:fixed inset-x-0 md:left-auto md:right-auto md:inset-y-0 md:w-[8rem] lg:w-[16rem]">
                <div className="grid space-y-4">
                    <div className="flex justify-end md:justify-center">
                        <div className="flex items-center m-3 p-3 bg-pink-800 rounded-full">
                            <Image src={defaultPicture} width={32} height={32} className="rounded-full"/>
                            <div className="mx-3 md:hidden lg:block">test test2</div>
                            <ChevronDownIcon  className="h-5 w-5"/>
                        </div>
                    </div>
                    <div className="flex flex-nowrap md:grid space-x-12 md:space-x-0 overflow-x-scroll md:overflow-y-scroll scrollbar-hide md:h-[75vh] md:space-y-4">
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                        <div class="grid shrink-0 justify-items-center lg:flex lg:items-center lg:space-x-4 lg:justify-center">
                            <div>
                                <Image src={defaultPicture} width={48} height={48} className="rounded-full"/>
                            </div>
                            <div>ok</div>   
                        </div>
                    </div>   
                </div>    
            </div>
        </>
    );
};

export default ProfileBar;