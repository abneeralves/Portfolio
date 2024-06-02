import { Bebas_Neue } from "next/font/google"

const BebasN = Bebas_Neue({subsets: ['latin'], weight: '400'})

export default function Footer () {
    return (
        <div className="flex flex-col items-center bg-blue-950 h-full" style={{ backgroundImage: 'radial-gradient(circle at center, #111837 15%, #09090b 70%)'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#172554" fill-opacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,245.3C274.3,224,343,128,411,128C480,128,549,224,617,224C685.7,224,754,128,823,101.3C891.4,75,960,117,1029,160C1097.1,203,1166,245,1234,218.7C1302.9,192,1371,96,1406,48L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>

            <div className="relative flex justify-center items-end">
                <div className="flex justify-center items-center mt-32">
                    <div className="z-20 absolute">
                        <h1 className={`sm:text-7xl text-6xl text-blue-300 mt-16 ${BebasN.className}`}>Contatos.</h1>
                    </div>

                    <div className="z-10 absolute flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-blue-900 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                        <h2 className={`sm:text-9xl text-8xl text-blue-900 ${BebasN.className}`}>Contacts</h2>
                    </div>
                </div>  
            </div>  
        </div>
    )
}