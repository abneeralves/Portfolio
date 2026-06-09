import Image from "next/image"
import { Exo_2, Bebas_Neue, Anton } from "next/font/google"

const Exo = Exo_2({ subsets: ['latin'], weight: '400' })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const anton = Anton({ subsets: ['latin'], weight: '400' })

type Project = {
    image: string,
    title: string,
    describe: string,
    featured: boolean,
    skill: string[],
    mediaType: 'image' | 'video'
    linkProject: string
}

const projects: Project[] = [
    {
        image: '/imageProjects/video-porsche.mp4',
        title: 'Landing Page Porsche',
        featured: true,
        describe: '',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/typescript.svg', '/SVGs/tailwind.svg', '/SVGs/react.svg', '/SVGs/nextjs.svg'],
        mediaType: 'video',
        linkProject: 'https://github.com/abneeralves/SitePorsche'
    },
    {
        image: '/imageProjects/image-mario.png',
        title: 'Projeto Mario Bros',
        featured: false,
        describe: '',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/javascript.svg', '/SVGs/react.svg', '/SVGs/vite.svg'],
        mediaType: 'image',
        linkProject: 'https://github.com/abneeralves/Site-Mario'
    },
    {
        image: '/imageProjects/image-netflix.png',
        title: 'Projeto Netflix',
        featured: false,
        describe: '',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/javascript.svg', '/SVGs/react.svg', '/SVGs/vite.svg', '/SVGs/api.svg'],
        mediaType: 'image',
        linkProject: 'https://github.com/abneeralves/CloneNetflix'
    }
]

export default function Projects() {
    return (
        <div id="projetos" className="bg-white h-full">
            <div className="relative flex justify-center items-end" data-aos="fade-right">
                <div className="flex justify-center items-center mt-64">
                    <div className="z-20 absolute">
                        <h1 className={`sm:text-8xl text-6xl text-[#ffd401] mt-16 ${BebasN.className}`}>Projetos.</h1>
                    </div>
                    <div className="z-10 absolute flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 lg:size-32 text-[#171330] mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                        <h2 className={`sm:text-9xl text-7xl text-[#171330] ${BebasN.className}`}>Projects</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-32 px-5">
                <ul className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-5 max-w-[1700px] w-full mx-auto">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            className={`relative overflow-hidden group cursor-pointer rounded-3xl bg-[#171330] ${project.featured
                                    ? 'xl:col-start-1 xl:col-span-2 xl:row-span-2 xl:row-start-1'
                                    : ''
                                }`}
                            data-aos="fade-up"
                        >
                            <div className={`w-full overflow-hidden ${project.featured ? 'h-[700px]' : 'w-full h-full'
                                }`}>
                                {project.mediaType === 'video' ? (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    >
                                        <source src={project.image} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">

                                <h1 className={`text-white text-4xl mb-2 ${anton.className}`}>
                                    {project.title}
                                </h1>

                                <div className="flex gap-2 mb-3">
                                    {project.skill.map((icon, i) => (
                                        <Image key={i} src={icon} alt="icon" width={22} height={22} />
                                    ))}
                                </div>

                                <a
                                    href={project.linkProject}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center w-full py-2 bg-[#ffd401] text-[#0A0E1A] hover:bg-[#B39501] transition-colors rounded-lg gap-2 ${Exo.className}`}
                                >
                                    Ver mais no GitHub
                                    <svg className="size-5" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.92 12.183c0-1.586-.604-2.864-1.585-3.83.172-.547.398-1.763-.229-3.321 0 0-1.114-.348-3.628 1.315a12.695 12.695 0 0 0-3.081-.366c-1.154 0-2.322.143-3.409.44-2.596-1.747-3.74-1.391-3.74-1.391-.748 1.847-.287 3.215-.145 3.554-.883.936-1.414 2.133-1.414 3.594 0 1.111.128 2.099.44 2.964l.325.732c.879 1.614 2.606 2.655 5.677 2.983-.434.289-.885.779-1.062 1.612-.594.28-2.475.966-3.603-.944 0 0-.633-1.148-1.842-1.235 0 0-1.174-.017-.08.722 0 0 .782.367 1.326 1.738 0 0 .705 2.342 4.114 1.593v2.417s-.076.857-.867 1.143c0 0-.469.312.034.497 0 0 2.205.174 2.205-1.604v-2.643s-.09-1.047.429-1.404v4.332s-.032 1.031-.576 1.421c0 0-.362.646.433.468 0 0 1.517-.211 1.584-1.967l.035-4.383h.363l.033 4.383c.076 1.748 1.59 1.967 1.59 1.967.793.179.429-.468.429-.468-.54-.389-.579-1.421-.579-1.421v-4.297c.52.402.436 1.369.436 1.369v2.643c0 1.777 2.2 1.604 2.2 1.604.505-.186.036-.498.036-.498-.793-.286-.867-1.143-.867-1.143v-3.461c0-1.346-.574-2.056-1.137-2.435 3.277-.318 4.845-1.368 5.572-2.99-.015.027.26-.726.26-.726.25-.859.325-1.855.325-2.963h-.002z" />
                                    </svg>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}