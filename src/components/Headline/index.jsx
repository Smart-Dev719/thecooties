import "./headline.css";

const Headline = ({ title, headline }) => {
    return (
        <>
            <div className="headline-box text-center">
                <h4>
                    <svg
                        width="36"
                        height="12"
                        viewBox="0 0 36 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M36 8V12H32V8H36ZM32 0V4H36V0H32ZM24 8V12H28V8H24ZM28 4V8H32V4H28ZM24 0V4H28V0H24ZM16 8V12H20V8H16ZM20 4V8H24V4H20ZM16 0V4H20V0H16ZM8 8V12H12V8H8ZM12 4V8H16V4H12ZM8 0V4H12V0H8ZM0 8V12H4V8H0ZM4 4V8H8V4H4ZM0 0V4H4V0H0Z"
                            fill="url(#paint0_linear_2_244)"
                            fill-opacity="0.2"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2_244"
                                x1="-1.92861e-08"
                                y1="6.5"
                                x2="37"
                                y2="6.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {title}
                    <svg
                        width="36"
                        height="12"
                        viewBox="0 0 36 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M36 8V12H32V8H36ZM32 0V4H36V0H32ZM24 8V12H28V8H24ZM28 4V8H32V4H28ZM24 0V4H28V0H24ZM16 8V12H20V8H16ZM20 4V8H24V4H20ZM16 0V4H20V0H16ZM8 8V12H12V8H8ZM12 4V8H16V4H12ZM8 0V4H12V0H8ZM0 8V12H4V8H0ZM4 4V8H8V4H4ZM0 0V4H4V0H0Z"
                            fill="url(#paint0_linear_2_243)"
                            fill-opacity="0.2"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2_243"
                                x1="-1.92861e-08"
                                y1="6.5"
                                x2="37"
                                y2="6.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" />
                                <stop
                                    offset="1"
                                    stop-color="white"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </h4>
                <h2>{headline}</h2>
            </div>
        </>
    );
};

export default Headline;
