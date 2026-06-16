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
        title: 'Projeto Porsche',
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
        <div id="projetos" className="relative overflow-hidden bg-white h-full before:absolute before:inset-0 before:bg-[linear-gradient(rgba(23,19,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,19,48,0.03)_1px,transparent_1px)] before:bg-[size:50px_50px] before:pointer-events-none">

            <div className="relative z-10 flex flex-col items-center mt-10" data-aos="fade-up">
                <span className={`text-[#171330]/50 text-xs tracking-[0.4em] uppercase mb-4 ${Exo.className}`}>
                    meu trabalho
                </span>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-[2px] bg-[#ffd401]" />
                        <h2 className={`text-[#171330] sm:text-9xl text-5xl ${BebasN.className}`}>
                            Projetos<span className="text-[#ffd401]">.</span>
                        </h2>
                    <div className="w-12 h-[2px] bg-[#ffd401]" />
                </div>

                <p className={`text-[#171330]/40 text-sm mt-3 tracking-widest uppercase ${Exo.className}`}>
                    {projects.length} Projetos selecionados
                </p>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-5 mt-10">
                <ul className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-3 max-w-[1700px] w-full mx-auto">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            className={`relative overflow-hidden group cursor-pointer rounded-2xl shadow-lg ${project.featured
                                    ? 'xl:col-start-1 xl:col-span-2 xl:row-span-2 xl:row-start-1'
                                    : ''
                                }`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-full overflow-hidden ${project.featured ? 'h-[620px]' : 'h-[305px]'}`}>
                                {project.mediaType === 'video' ? (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    >
                                        <source src={project.image} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#171330]/95 via-[#171330]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">

                                <div className="w-8 h-[2px] bg-[#ffd401] mb-3 transition-all duration-500 group-hover:w-16" />

                                    <h1 className={`text-white text-3xl mb-3 ${anton.className}`}>
                                        {project.title}
                                    </h1>

                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {project.skill.map((icon, i) => (
                                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-md p-1 border border-white/10">
                                                <Image src={icon} alt="icon" width={20} height={20} />
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={project.linkProject}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center w-full py-2.5 bg-[#ffd401] text-[#0A0E1A] font-semibold hover:bg-[#B39501] transition-colors duration-300 rounded-xl gap-2 text-sm tracking-wide ${Exo.className}`}
                                    >
                                        Ver mais no GitHub
                                        <svg className="size-5" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.92 12.183c0-1.586-.604-2.864-1.585-3.83.172-.547.398-1.763-.229-3.321 0 0-1.114-.348-3.628 1.315a12.695 12.695 0 0 0-3.081-.366c-1.154 0-2.322.143-3.409.44-2.596-1.747-3.74-1.391-3.74-1.391-.748 1.847-.287 3.215-.145 3.554-.883.936-1.414 2.133-1.414 3.594 0 1.111.128 2.099.44 2.964l.325.732c.879 1.614 2.606 2.655 5.677 2.983-.434.289-.885.779-1.062 1.612-.594.28-2.475.966-3.603-.944 0 0-.633-1.148-1.842-1.235 0 0-1.174-.017-.08.722 0 0 .782.367 1.326 1.738 0 0 .705 2.342 4.114 1.593v2.417s-.076.857-.867 1.143c0 0-.469.312.034.497 0 0 2.205.174 2.205-1.604v-2.643s-.09-1.047.429-1.404v4.332s-.032 1.031-.576 1.421c0 0-.362.646.433.468 0 0 1.517-.211 1.584-1.967l.035-4.383h.363l.033 4.383c.076 1.748 1.59 1.967 1.59 1.967.793.179.429-.468.429-.468-.54-.389-.579-1.421-.579-1.421v-4.297c.52.402.436 1.369.436 1.369v2.643c0 1.777 2.2 1.604 2.2 1.604.505-.186.036-.498.036-.498-.793-.286-.867-1.143-.867-1.143v-3.461c0-1.346-.574-2.056-1.137-2.435 3.277-.318 4.845-1.368 5.572-2.99-.015.027.26-.726.26-.726.25-.859.325-1.855.325-2.963h-.002z" />
                                        </svg>
                                    </a>
                            </div>

                            <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-[#ffd401] flex items-center justify-center text-[#0A0E1A] text-xs font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${anton.className}`}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}