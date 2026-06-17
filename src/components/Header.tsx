import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function Header() {
    const firstName = "ABNER";
    const midName = "ALVES";
    const lastName = "MUNIZ";
    const firstNameProfession = "FULL";
    const midNameProfession = "STACK";
    const lastNameProfession = "DEVELOPER";
    const lastNameProfessionMobile = "DEV";

    const StyleClass =
        `text-9xl lg:text-[11rem] 2xl:text-[14rem] 
    hover:-translate-y-2 hover:text-[#ffd401] 
    hover:cursor-pointer duration-300 
    ease-in-out outline-name tracking-widest`;

    const highlightStyleClass =
        `text-9xl lg:text-[11rem] 2xl:text-[14rem] 
    text-[#ffd401] hover:-translate-y-2 
    hover:text-[#ffd401] hover:cursor-pointer 
    duration-300 ease-in-out tracking-widest `;

    return (
        <header className="h-screen bg-[#171330] relative overflow-hidden">
            <div className='flex items-center justify-center h-full w-full' data-aos="fade-right">

                <div className='mt-28 md:flex xl:hidden'>
                    <div>
                        <div className="flex">
                            {firstName.split("").map((letter, index) => (
                                <p
                                    key={index}
                                    className={`
                                        ${StyleClass}
                                        ${anton.className}
                                        auto-hover
                                    `}
                                    style={{
                                        animationDelay: `${index * 1}s`,
                                    }}
                                >
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            {lastNameProfessionMobile.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='hidden xl:flex'>
                    <div>
                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstName.split("").map((letter, index) => (
                                <p
                                    key={index}
                                    className={`
                                        ${highlightStyleClass}
                                        ${anton.className}
                                        auto-hover
                                    `}
                                    style={{
                                        animationDelay: `${index * 1}s`,
                                    }}
                                >
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='ml-20 '>
                        <div className="flex">
                            {lastNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lastNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${anton.className} tracking-[0.5rem]`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${anton.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
