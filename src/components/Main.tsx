import Image from 'next/image'
import FtAbner from '../../public/FtAbner.jpg'

export default function Main () {
    return (
        <main className="flex flex-col items-center bg-blue-600 h-full">
            <div className=''>
                <h2 className="text-white text-5xl mx-auto my-24">Sobre Mim</h2>
            </div>
            
            <div className='grid grid-cols-3 gap-4 bg-zinc-200 h-4/6 w-5/6 rounded-2xl'>
                <div className='col-span-1 flex items-center justify-center p-5'>
                    <Image className='w-full h-full rounded-xl' src={FtAbner} alt='Foto Abner'/>
                </div>

                <div className='col-span-2'>

                </div>
            </div>
        </main>
    )
}