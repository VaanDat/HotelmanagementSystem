import Clock from 'react-live-clock';

export default function Liveclock() {
    return (

        <div className='translate-x-[700px] translate-y-[550px]'>
            <div className="text-[#363434]">
            Reported at
            </div>
            <div id="render-item" className='bg-white py-3 px-7 rounded-md font-mont font-neon text-xl mt-2 absolute w-[200px] h-[100px]'>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'VN'} date={''} />
                
                <div className='translate-y-5'><Clock format={'ddd, MMM D YYYY'} ticking={true} timezone={'VN'} date={''} /></div>
            </div>
        </div>


    )
}