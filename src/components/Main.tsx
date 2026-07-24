'use client'

import { useEffect, useState } from 'react'
import { VT323 } from 'next/font/google'
import {
    AlertTriangle,
    Apple,
    BriefcaseBusiness,
    ChevronDown,
    Code2,
    Download,
    FileText,
    Folder,
    HardDrive,
    Home,
    Info,
    Mail,
    Monitor,
    Power,
    Settings,
    Trash2,
    User,
    Wrench,
    X,
    type LucideIcon,
} from 'lucide-react'

const pixelFont = VT323({
    subsets: ['latin'],
    weight: '400',
})

type Dialog = {
    title: string
    message: string
    type?: 'info' | 'error' | 'success'
}

type DesktopItem = {
    name: string
    icon: LucideIcon
    action: () => void
}

const skills = [
    'Next.js',
    'React',
    'TypeScript',
    'NestJS',
    'PostgreSQL',
    'Prisma',
]

const navigationItems = [
    {
        name: 'Início',
        sectionId: 'inicio',
        icon: Home,
    },
    {
        name: 'Sobre',
        sectionId: 'sobre',
        icon: User,
    },
    {
        name: 'Projetos',
        sectionId: 'projetos',
        icon: Folder,
    },
    {
        name: 'Experiência',
        sectionId: 'experiencia',
        icon: BriefcaseBusiness,
    },
    {
        name: 'Habilidades',
        sectionId: 'habilidades',
        icon: Wrench,
    },
]

function WindowLines() {
    return (
        <div
            aria-hidden="true"
            className="flex flex-1 flex-col justify-center gap-[2px]"
        >
            {Array.from({ length: 6 }).map((_, index) => (
                <span key={index} className="h-px w-full bg-black" />
            ))}
        </div>
    )
}

function WindowHeader({
    title,
    onClose,
}: {
    title: string
    onClose?: () => void
}) {
    return (
        <div className="flex h-9 shrink-0 items-center gap-2 border-b-2 border-black bg-[#f5f5f5] px-2">
            <button
                type="button"
                onClick={onClose}
                aria-label={`Fechar ${title}`}
                className="
                    group
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    border-2
                    border-black
                    bg-white
                    active:translate-x-px
                    active:translate-y-px
                "
            >
                <X className="h-3 w-3 opacity-100" strokeWidth={3} />
            </button>

            <WindowLines />

            <span className="shrink-0 bg-[#f5f5f5] px-3 text-lg font-bold leading-none text-black">
                {title}
            </span>

            <WindowLines />

            <span
                aria-hidden="true"
                className="h-5 w-5 shrink-0 border-2 border-black bg-white"
            />
        </div>
    )
}

function DesktopIcon({
    name,
    icon: Icon,
    onClick,
}: {
    name: string
    icon: LucideIcon
    onClick: () => void
}) {
    return (
        <button
            type="button"
            onDoubleClick={onClick}
            onClick={onClick}
            className="
                group
                flex
                w-[76px]
                flex-col
                items-center
                gap-1
                text-black
                outline-none
            "
        >
            <span
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    border-2
                    border-black
                    bg-white
                    shadow-[3px_3px_0_#000]
                    transition-transform
                    group-hover:-translate-y-1
                    group-active:translate-x-[2px]
                    group-active:translate-y-[2px]
                    group-active:shadow-none
                "
            >
                <Icon className="h-7 w-7" strokeWidth={1.8} />
            </span>

            <span className="bg-white px-1 text-center text-base font-bold leading-4">
                {name}
            </span>
        </button>
    )
}

function SystemDialog({
    dialog,
    onClose,
}: {
    dialog: Dialog
    onClose: () => void
}) {
    const isError = dialog.type === 'error'

    return (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/20 p-4">
            <div className="w-full max-w-md border-2 border-black bg-[#d8d8d8] shadow-[10px_10px_0_#000]">
                <WindowHeader title={dialog.title} onClose={onClose} />

                <div className="bg-white p-6 text-black">
                    <div className="flex gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center border-2 border-black bg-[#d8d8d8]">
                            {isError ? (
                                <AlertTriangle className="h-10 w-10" />
                            ) : (
                                <Info className="h-10 w-10" />
                            )}
                        </div>

                        <div>
                            <p className="text-xl leading-6">
                                {dialog.message}
                            </p>

                            {isError && (
                                <p className="mt-3 text-base">
                                    Código do sistema: ABNER-1984
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-7 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            autoFocus
                            className="
                                min-w-28
                                border-2
                                border-black
                                bg-white
                                px-6
                                py-2
                                text-xl
                                font-bold
                                shadow-[4px_4px_0_#000]
                                hover:bg-black
                                hover:text-white
                                active:translate-x-[2px]
                                active:translate-y-[2px]
                                active:shadow-none
                            "
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MenuDropdown({
    items,
    onClose,
}: {
    items: Array<{
        label?: string
        divider?: boolean
        action?: () => void
    }>
    onClose: () => void
}) {
    return (
        <div
            className="
                absolute
                left-0
                top-full
                z-[90]
                min-w-56
                border-2
                border-black
                bg-white
                py-1
                text-black
                shadow-[5px_5px_0_#000]
            "
        >
            {items.map((item, index) =>
                item.divider ? (
                    <div
                        key={`divider-${index}`}
                        className="my-1 border-t-2 border-black"
                    />
                ) : (
                    <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                            item.action?.()
                            onClose()
                        }}
                        className="block w-full px-4 py-1 text-left text-lg hover:bg-black hover:text-white"
                    >
                        {item.label}
                    </button>
                )
            )}
        </div>
    )
}

function MenuBar({
    onNavigate,
    onDialog,
    onToggleDesktopPattern,
    onToggleMaximize,
}: {
    onNavigate: (sectionId: string) => void
    onDialog: (dialog: Dialog) => void
    onToggleDesktopPattern: () => void
    onToggleMaximize: () => void
}) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Intl.DateTimeFormat('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                }).format(new Date())
            )
        }

        updateTime()

        const interval = window.setInterval(updateTime, 30_000)

        return () => window.clearInterval(interval)
    }, [])

    const closeMenu = () => setActiveMenu(null)

    const restartComputer = () => {
        onDialog({
            title: 'Erro do sistema',
            message:
                'Não foi possível reiniciar o Macintosh. Tente novamente mais tarde.',
            type: 'error',
        })
    }

    const appleItems = [
        {
            label: 'Sobre este Macintosh',
            action: () =>
                onDialog({
                    title: 'Sobre este Macintosh',
                    message:
                        'Abner OS 1.0 — Desenvolvido com Next.js, React, TypeScript e criatividade.',
                }),
        },
        { divider: true },
        {
            label: 'Preferências',
            action: onToggleDesktopPattern,
        },
        {
            label: 'Reiniciar',
            action: restartComputer,
        },
        {
            label: 'Desligar',
            action: () =>
                onDialog({
                    title: 'Desligar',
                    message:
                        'O portfólio não pode ser desligado enquanto houver ideias para desenvolver.',
                    type: 'error',
                }),
        },
    ]

    const fileItems = [
        {
            label: 'Abrir Início',
            action: () => onNavigate('inicio'),
        },
        {
            label: 'Abrir Projetos',
            action: () => onNavigate('projetos'),
        },
        {
            label: 'Abrir Experiência',
            action: () => onNavigate('experiencia'),
        },
        { divider: true },
        {
            label: 'Baixar currículo',
            action: () => {
                const link = document.createElement('a')
                link.href = '/CurriculoAbner.pdf'
                link.download = 'CurriculoAbner.pdf'
                link.click()
            },
        },
    ]

    const editItems = [
        {
            label: 'Copiar apresentação',
            action: async () => {
                try {
                    await navigator.clipboard.writeText(
                        'Abner Alves Muniz — Desenvolvedor Full Stack'
                    )

                    onDialog({
                        title: 'Área de transferência',
                        message:
                            'Apresentação copiada para a área de transferência.',
                        type: 'success',
                    })
                } catch {
                    onDialog({
                        title: 'Erro',
                        message:
                            'Não foi possível acessar a área de transferência.',
                        type: 'error',
                    })
                }
            },
        },
        {
            label: 'Selecionar habilidades',
            action: () => onNavigate('habilidades'),
        },
    ]

    const viewItems = [
        {
            label: 'Ampliar janela',
            action: onToggleMaximize,
        },
        {
            label: 'Alterar papel de parede',
            action: onToggleDesktopPattern,
        },
    ]

    const specialItems = [
        {
            label: 'Executar diagnóstico',
            action: () =>
                onDialog({
                    title: 'Diagnóstico concluído',
                    message:
                        'Sistema funcionando corretamente. Criatividade, código e café estão operacionais.',
                    type: 'success',
                }),
        },
        {
            label: 'Limpar memória',
            action: () =>
                onDialog({
                    title: 'Memória',
                    message:
                        'Memória limpa. Nenhum bug foi encontrado durante o processo.',
                    type: 'success',
                }),
        },
        {
            label: 'Reiniciar',
            action: restartComputer,
        },
    ]

    const menus = [
        {
            name: 'Arquivo',
            items: fileItems,
        },
        {
            name: 'Editar',
            items: editItems,
        },
        {
            name: 'Visualizar',
            items: viewItems,
        },
        {
            name: 'Especial',
            items: specialItems,
        },
    ]

    return (
        <div className="relative z-[80] flex h-8 items-center justify-between border-b-2 border-black bg-white px-2 text-black">
            <div className="flex h-full items-center">
                <div className="relative h-full">
                    <button
                        type="button"
                        onClick={() =>
                            setActiveMenu((current) =>
                                current === 'apple' ? null : 'apple'
                            )
                        }
                        className={`
                            flex
                            h-full
                            items-center
                            px-2
                            ${activeMenu === 'apple'
                                ? 'bg-black text-white'
                                : 'hover:bg-black hover:text-white'
                            }
                        `}
                        aria-label="Abrir menu Apple"
                    >
                        <Apple className="h-5 w-5 fill-current" />
                    </button>

                    {activeMenu === 'apple' && (
                        <MenuDropdown
                            items={appleItems}
                            onClose={closeMenu}
                        />
                    )}
                </div>

                {menus.map((menu) => (
                    <div
                        key={menu.name}
                        className="relative hidden h-full sm:block"
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setActiveMenu((current) =>
                                    current === menu.name ? null : menu.name
                                )
                            }
                            className={`
                                h-full
                                px-3
                                text-lg
                                ${activeMenu === menu.name
                                    ? 'bg-black text-white'
                                    : 'hover:bg-black hover:text-white'
                                }
                            `}
                        >
                            {menu.name}
                        </button>

                        {activeMenu === menu.name && (
                            <MenuDropdown
                                items={menu.items}
                                onClose={closeMenu}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-3 text-base">
                <span className="hidden sm:block">Abner OS</span>
                <span>{time}</span>
            </div>
        </div>
    )
}

function AboutContent({
    onNavigate,
}: {
    onNavigate: (sectionId: string) => void
}) {
    return (
        <div className="mac-scrollbar h-full overflow-y-auto bg-white p-5 text-black sm:p-7 lg:p-9">
            <div className="flex flex-col gap-6 border-b-2 border-black pb-7 sm:flex-row sm:items-center">
                <div
                    className="
                        relative
                        flex
                        h-28
                        w-28
                        shrink-0
                        items-center
                        justify-center
                        border-2
                        border-black
                        bg-[#d8d8d8]
                        shadow-[5px_5px_0_#000]
                    "
                >
                    <Monitor className="h-16 w-16" strokeWidth={1.4} />

                    <span className="absolute bottom-2 right-2 h-3 w-3 bg-black" />
                </div>

                <div>
                    <p className="mb-1 text-lg uppercase tracking-wider">
                        Usuário do sistema
                    </p>

                    <h2 className="text-4xl font-bold leading-none sm:text-5xl">
                        Abner Alves Muniz
                    </h2>

                    <p className="mt-3 text-2xl">Desenvolvedor Full Stack</p>

                    <div className="mt-3 flex items-center gap-2">
                        <span className="h-3 w-3 animate-pulse rounded-full bg-black" />
                        <span className="text-lg">
                            Disponível para projetos
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_260px]">
                <div className="space-y-5 text-xl leading-7">
                    <p>
                        Olá! Meu nome é Abner, tenho 21 anos e sou Desenvolvedor
                        Full Stack apaixonado por tecnologia e inovação.
                    </p>

                    <p>
                        Sou graduado em Análise e Desenvolvimento de Sistemas
                        pela UNINOVE e estou sempre buscando novos conhecimentos
                        para evoluir minhas habilidades.
                    </p>

                    <p>
                        Desenvolvo aplicações web completas, atuando tanto no
                        front-end quanto no back-end.
                    </p>

                    <p>
                        Gosto de transformar ideias em produtos funcionais,
                        escaláveis, bem estruturados e capazes de gerar valor
                        real.
                    </p>

                    <p>
                        Sistema preparado para novos desafios.
                        <span className="mac-cursor ml-2 inline-block h-5 w-3 bg-black align-middle" />
                    </p>
                </div>

                <aside>
                    <div className="border-2 border-black bg-[#d8d8d8] p-2 shadow-[4px_4px_0_#000]">
                        <div className="border-2 border-black bg-white p-4">
                            <div className="mb-4 flex items-center gap-3 border-b-2 border-black pb-3">
                                <HardDrive className="h-8 w-8" />

                                <div>
                                    <p className="text-lg font-bold">
                                        Abner HD
                                    </p>

                                    <p className="text-base">Sistema 1.0</p>
                                </div>
                            </div>

                            <dl className="space-y-2 text-lg">
                                <div className="flex justify-between gap-3">
                                    <dt>Função:</dt>
                                    <dd className="font-bold">Full Stack</dd>
                                </div>

                                <div className="flex justify-between gap-3">
                                    <dt>Local:</dt>
                                    <dd className="font-bold">Brasil</dd>
                                </div>

                                <div className="flex justify-between gap-3">
                                    <dt>Status:</dt>
                                    <dd className="font-bold">Online</dd>
                                </div>

                                <div className="flex justify-between gap-3">
                                    <dt>Sistema:</dt>
                                    <dd className="font-bold">Web</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="mt-9 flex flex-col gap-4 border-t-2 border-black pt-7 sm:flex-row">
                <a
                    href="/CurriculoAbner.pdf"
                    download="CurriculoAbner.pdf"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        border-2
                        border-black
                        bg-white
                        px-6
                        py-3
                        text-xl
                        font-bold
                        shadow-[5px_5px_0_#000]
                        hover:bg-black
                        hover:text-white
                        active:translate-x-[3px]
                        active:translate-y-[3px]
                        active:shadow-none
                    "
                >
                    <Download className="h-5 w-5" />
                    Baixar currículo
                </a>

                <button
                    type="button"
                    onClick={() => onNavigate('projetos')}
                    className="
                        inline-flex
                        items-center
                        justify-center
                        border-2
                        border-black
                        bg-[#d8d8d8]
                        px-6
                        py-3
                        text-xl
                        font-bold
                        shadow-[5px_5px_0_#000]
                        hover:bg-black
                        hover:text-white
                        active:translate-x-[3px]
                        active:translate-y-[3px]
                        active:shadow-none
                    "
                >
                    Abrir projetos
                </button>
            </div>
        </div>
    )
}

export default function Main() {
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [isInfoOpen, setIsInfoOpen] = useState(false)
    const [isMaximized, setIsMaximized] = useState(false)
    const [useDarkPattern, setUseDarkPattern] = useState(false)
    const [dialog, setDialog] = useState<Dialog | null>(null)

    const navigateTo = (sectionId: string) => {
        const section = document.getElementById(sectionId)

        if (!section) {
            setDialog({
                title: 'Item não encontrado',
                message: `A seção "${sectionId}" não foi encontrada no sistema.`,
                type: 'error',
            })

            return
        }

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    const emptyTrash = () => {
        setDialog({
            title: 'Lixeira',
            message: 'A lixeira já está vazia. Nenhum bug foi encontrado.',
            type: 'info',
        })
    }

    const desktopItems: DesktopItem[] = [
        ...navigationItems.map((item) => ({
            name: item.name,
            icon: item.icon,
            action: () => navigateTo(item.sectionId),
        })),
        {
            name: 'Contato',
            icon: Mail,
            action: () => {
                window.location.href = 'mailto:seuemail@email.com'
            },
        },
    ]

    return (
        <main
            id="sobre"
            className={`
                relative
                z-10
                flex
                min-h-screen
                w-full
                items-center
                justify-center
                overflow-hidden
                bg-transparent
                px-3
                py-24
                sm:px-6
                lg:px-10
                ${pixelFont.className}
            `}
        >
            <section
                className={`
                    relative
                    w-full
                    transition-all
                    duration-500
                    ${isMaximized
                        ? 'max-w-[1700px]'
                        : 'max-w-[1450px]'
                    }
                `}
                data-aos="fade-up"
            >
                {/* Carcaça externa do Macintosh */}
                <div
                    className="
                        relative
                        mx-auto
                        rounded-[46px]
                        border-[5px]
                        border-[#504c43]
                        bg-[#c9c3ae]
                        px-4
                        pb-8
                        pt-5
                        shadow-[0_30px_0_#665f50,0_55px_90px_rgba(0,0,0,0.55)]
                        sm:px-8
                        sm:pb-12
                        sm:pt-8
                        lg:rounded-[20px]
                        lg:px-12
                        lg:pb-16
                    "
                >
                    {/* Brilho da carcaça */}
                    <div className="pointer-events-none absolute inset-x-14 top-2 h-1 rounded-full bg-white/40" />

                    {/* Moldura interna da tela */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[24px]
                            border-[6px]
                            border-[#403d36]
                            bg-[#171717]
                            p-2
                            shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]
                            sm:rounded-[30px]
                            sm:p-3
                        "
                    >
                        {/* Reflexo da tela */}
                        <div className="pointer-events-none absolute inset-0 z-[70] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

                        {/* Sistema Macintosh */}
                        <div
                            className="
                                relative
                                overflow-hidden
                                border-2
                                border-black
                                bg-[#bfbfbf]
                            "
                        >
                            <MenuBar
                                onNavigate={navigateTo}
                                onDialog={setDialog}
                                onToggleDesktopPattern={() =>
                                    setUseDarkPattern((current) => !current)
                                }
                                onToggleMaximize={() =>
                                    setIsMaximized((current) => !current)
                                }
                            />

                            <div
                                className={`
                                    relative
                                    min-h-[720px]
                                    overflow-hidden
                                    transition-colors
                                    duration-300
                                    ${useDarkPattern
                                        ? 'bg-[#777] bg-[linear-gradient(45deg,#555_25%,transparent_25%,transparent_75%,#555_75%),linear-gradient(45deg,#555_25%,#777_25%,#777_75%,#555_75%)] bg-[size:6px_6px] bg-[position:0_0,3px_3px]'
                                        : 'bg-[#aaa] bg-[radial-gradient(#000_0.7px,transparent_0.7px)] bg-[size:4px_4px]'
                                    }
                                `}
                            >
                                {/* Ícones laterais */}
                                <div className="absolute right-3 top-5 z-10 flex max-h-[650px] flex-col flex-wrap gap-5 sm:right-6">
                                    <DesktopIcon
                                        name="Abner HD"
                                        icon={HardDrive}
                                        onClick={() => setIsAboutOpen(true)}
                                    />

                                    <DesktopIcon
                                        name="Info"
                                        icon={FileText}
                                        onClick={() => setIsInfoOpen(true)}
                                    />

                                    <DesktopIcon
                                        name="Lixeira"
                                        icon={Trash2}
                                        onClick={emptyTrash}
                                    />
                                </div>

                                {/* Janela principal */}
                                {isAboutOpen && (
                                    <div
                                        className="
                                            absolute
                                            bottom-5
                                            left-3
                                            right-24
                                            top-5
                                            z-20
                                            flex
                                            flex-col
                                            border-2
                                            border-black
                                            bg-[#d8d8d8]
                                            shadow-[8px_8px_0_#000]
                                            sm:left-6
                                            sm:right-32
                                            lg:bottom-10
                                            lg:left-10
                                            lg:right-40
                                            lg:top-10
                                        "
                                    >
                                        <WindowHeader
                                            title="Sobre Abner"
                                            onClose={() =>
                                                setIsAboutOpen(false)
                                            }
                                        />

                                        <div className="min-h-0 flex-1">
                                            <AboutContent
                                                onNavigate={navigateTo}
                                            />
                                        </div>

                                        <div className="flex h-7 shrink-0 items-center justify-between border-t-2 border-black bg-[#d8d8d8] px-3 text-base text-black">
                                            <span>6 itens</span>

                                            <span className="hidden sm:block">
                                                1984 KB disponíveis
                                            </span>

                                            <ChevronDown className="h-4 w-4" />
                                        </div>
                                    </div>
                                )}

                                {/* Ícone para reabrir janela */}
                                {!isAboutOpen && (
                                    <div className="absolute left-5 top-5">
                                        <DesktopIcon
                                            name="Sobre"
                                            icon={Monitor}
                                            onClick={() =>
                                                setIsAboutOpen(true)
                                            }
                                        />
                                    </div>
                                )}

                                {/* Janela de informações */}
                                {isInfoOpen && (
                                    <div
                                        className="
                                            absolute
                                            left-1/2
                                            top-1/2
                                            z-50
                                            w-[calc(100%-2rem)]
                                            max-w-md
                                            -translate-x-1/2
                                            -translate-y-1/2
                                            border-2
                                            border-black
                                            bg-[#d8d8d8]
                                            shadow-[10px_10px_0_#000]
                                        "
                                    >
                                        <WindowHeader
                                            title="Informações"
                                            onClose={() =>
                                                setIsInfoOpen(false)
                                            }
                                        />

                                        <div className="bg-white p-6 text-center text-black">
                                            <Monitor className="mx-auto h-20 w-20" />

                                            <h3 className="mt-4 text-3xl font-bold">
                                                Abner OS
                                            </h3>

                                            <p className="mt-1 text-xl">
                                                Portfolio Edition 1.0
                                            </p>

                                            <div className="my-5 border-t-2 border-black" />

                                            <p className="text-lg leading-6">
                                                Sistema desenvolvido para
                                                apresentar projetos,
                                                experiências e habilidades.
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsInfoOpen(false)
                                                }
                                                className="
                                                    mt-6
                                                    min-w-28
                                                    border-2
                                                    border-black
                                                    bg-white
                                                    px-6
                                                    py-2
                                                    text-xl
                                                    font-bold
                                                    shadow-[4px_4px_0_#000]
                                                    active:translate-x-[2px]
                                                    active:translate-y-[2px]
                                                    active:shadow-none
                                                "
                                            >
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Atalhos das seções */}
                                <div className="absolute bottom-5 left-5 z-10 hidden flex-wrap gap-6 lg:flex">
                                    {desktopItems.map((item) => (
                                        <DesktopIcon
                                            key={item.name}
                                            name={item.name}
                                            icon={item.icon}
                                            onClick={item.action}
                                        />
                                    ))}
                                </div>

                                {dialog && (
                                    <SystemDialog
                                        dialog={dialog}
                                        onClose={() => setDialog(null)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Parte inferior do computador */}
                    <div className="mt-7 flex items-center justify-between px-4 sm:px-8">
                        <div>
                            <p className="text-2xl font-bold tracking-tight text-[#514c40] sm:text-3xl">
                                Macintosh
                            </p>

                            <p className="text-base text-[#6c6658]">
                                Abner Portfolio Edition
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setDialog({
                                    title: 'Botão de energia',
                                    message:
                                        'O sistema não pode ser desligado neste momento.',
                                    type: 'error',
                                })
                            }
                            aria-label="Desligar computador"
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border-[3px]
                                border-[#514c40]
                                bg-[#aaa38f]
                                text-[#514c40]
                                shadow-[inset_2px_2px_4px_rgba(255,255,255,0.5)]
                                active:translate-y-px
                            "
                        >
                            <Power className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Entrada de disquete */}
                    <div className="mx-auto mt-7 h-3 w-40 rounded-full border-2 border-[#504c43] bg-[#726c5e] shadow-[inset_0_2px_3px_rgba(0,0,0,0.6)] sm:w-56" />
                </div>

                {/* Base do monitor */}


                <div className="mx-auto h-8 w-[58%] min-w-64 rounded-b-[50%] rounded-t-lg border-b-4 border-[#514c40] bg-[#c4bea8] shadow-[0_14px_25px_rgba(0,0,0,0.4)]" />
            </section>
        </main>
    )
}