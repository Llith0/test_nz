import Sidebar from '../conponents/sidebar/sidebar';
import ProfileBar from '../conponents/profileBar/profileBar';
import MusicPlayer from '../conponents/musicPlayer/musicPlayer';
import {Helmet} from "react-helmet";

export default function Home() {
  return (
    <>
    <Helmet>
      <body className='dark:bg-slate-700 dark:text-white'/>
    </Helmet>
    <div className='flex'>
      <div className='md:w-[11rem] lg:w-[16rem]'>
          <Sidebar />  
      </div>
      <div className='flex-1 mt-[12rem] md:mt-0'>
        <div className="mb-64">
          ok
        </div>
        <div className="mb-64">
          ok
        </div>
        <div className="mb-64">
          ok
        </div>
        <div className="mb-64">
          ok
        </div>  
      </div>
      <div className='md:w-[8rem] lg:w-[16rem]'>
        <ProfileBar />
      </div>
    </div>
    <MusicPlayer />
    </>
  )
}