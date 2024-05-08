import Image from 'next/image'
import FtAbner from '../../public/FtAbner.jpg'

export default function Main () {
    return (
        <main className="flex flex-col items-center justify-center bg-blue-600 h-full">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fill-opacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,245.3C274.3,224,343,128,411,128C480,128,549,224,617,224C685.7,224,754,128,823,101.3C891.4,75,960,117,1029,160C1097.1,203,1166,245,1234,218.7C1302.9,192,1371,96,1406,48L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg> */}
            
            <div className='grid grid-cols-3 gap-4 bg-gray-900 h-3/6 w-5/6 rounded-2xl'>
                <div className='col-span-1 flex items-center justify-center p-5'>
                    <Image className='w-full h-full rounded-xl' src={FtAbner} alt='Foto Abner'/>
                </div>

                <div className='col-span-2 flex flex-col items-center mt-5'>
                    <h1 className='text-white text-3xl '>Deixa eu me Apresentar.</h1>
                    <p></p>
                </div>
            </div>
        </main>
    )
}