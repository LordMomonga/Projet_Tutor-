import { NavLink } from "react-router-dom";

export default function AboutSection() {
    return (
        <>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-light bg-dark max-w-7xl">
                <div className="container mx-auto">
                    <div className=" px-8 flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="data:image/jpeg;base64,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"
                                            alt=""
                                            className="w-full rounded-xl md:h-[150px] shadow-md shadow-blue-500"
                                        />
                                    </div>
                                    <div className="py-2 sm:py-4 ">
                                        <img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxca-gZMJdnqspDeLYsSI90PLdfQ568Erkcg&s"
alt=""
                                            className="w-full rounded-xl md:h-[150px] shadow-md shadow-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src="data:image/jpeg;base64,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"
                                            alt=""
                                            className="w-full rounded-xl md:h-[150px] shadow-md shadow-blue-500"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            <svg
                                                width={134}
                                                height={106}
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="1.66667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 31 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3334"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3334 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 103 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 132 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="74.6673"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 74.6673)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 1.66683)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    A propos
                                </span>
                                <h2 className="mb-5 text-3xl font-bold dark:text-dark text-white sm:text-[40px]/[48px]">
TESTEZ VOTRE NOUVELLE FACON DE VOYAGER ET D'ENTREPRENDRE                                </h2>
                                <p className="text-gray-400 mb-8">
sélectionner votre services en fonction de vos besoins, utilisez les options de personnalisation pour specifier des exigences particulieres, telles que le type de véhicule souhaité ou les instructions. profitez de la tranquilité d'Esprit et detendez vous sachant que vos requetes sont en cours et surveillez dans l'application
                                </p>
                                <NavLink
                                    to="/login"
                                    className="btn-secondary mt-7 bg-blue-600 text-white px-4 py-3 rounded-md"
                                >
                                    S'inscrire
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

