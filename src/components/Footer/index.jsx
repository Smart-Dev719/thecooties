import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import FooterHandImg from "./../../assets/images/footer/footer-hand.png";
import { ReactComponent as BgBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn.svg";
import { FaDiscord } from "react-icons/fa";
import { ReactComponent as IconOverly } from "./../../assets/images/footer/shapes.svg";
import FooterLogo from "./../../assets/images/logo.png";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    const bottomToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className="footer-box">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg="6">
                            <div className="footer-join">
                                <h2>Join Our community & get Early access</h2>
                                <img src={FooterHandImg} alt="hand-icon" />
                                <div className="footer-join-btn">
                                    <a
                                        href="#"
                                        className="btn-bg-1 footer-white-btn"
                                    >
                                        <BgBtnOverlay />
                                        WHITELIST NOW
                                    </a>
                                    <a
                                        href="https://discord.gg/4mR4YbT95A"
                                        className="btn-bg-1 footer-dicord-icon"
                                        target="_blank"
                                    >
                                        <BgBtnOverlay />
                                        <FaDiscord />
                                        JOIN DISCORD
                                    </a>
                                </div>
                                <div className="footer-social-link">
                                    <a href="#">
                                        <svg
                                            width="27"
                                            height="24"
                                            viewBox="0 0 27 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.58658 13.704L1.67987 13.5573L7.30655 4.75513C7.38879 4.62622 7.58211 4.63958 7.64435 4.77955C8.58432 6.88626 9.39547 9.50625 9.01546 11.1373C8.85324 11.8084 8.40878 12.7174 7.90876 13.5573C7.84435 13.6796 7.77321 13.7996 7.69765 13.9151C7.66213 13.9684 7.6021 13.9996 7.53764 13.9996H1.75101C1.59542 13.9996 1.50434 13.8307 1.58658 13.704Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M26.6667 15.3395V16.7328C26.6667 16.8128 26.6178 16.884 26.5466 16.9151C26.1111 17.1017 24.62 17.7862 24 18.6484C22.4178 20.8506 21.2089 23.9995 18.5067 23.9995H7.23331C3.23778 23.9995 0 20.7506 0 16.7417V16.6128C0 16.5062 0.0866622 16.4195 0.193319 16.4195H6.47777C6.60221 16.4195 6.69334 16.5351 6.68224 16.6573C6.63778 17.0662 6.71334 17.484 6.90666 17.864C7.27998 18.6217 8.05335 19.0951 8.88887 19.0951H12V16.6662H8.92444C8.76664 16.6662 8.67335 16.484 8.76443 16.3551C8.79779 16.304 8.83557 16.2506 8.87556 16.1906C9.16664 15.7773 9.58222 15.1351 9.99553 14.4039C10.2778 13.9106 10.5511 13.3839 10.7711 12.8551C10.8156 12.7595 10.8511 12.6618 10.8867 12.5662C10.9466 12.3973 11.0089 12.2395 11.0533 12.0818C11.0978 11.9484 11.1333 11.8084 11.1689 11.6773C11.2733 11.2284 11.3178 10.7528 11.3178 10.2595C11.3178 10.0662 11.3089 9.86397 11.2911 9.6706C11.2822 9.4595 11.2556 9.24839 11.2289 9.03729C11.2111 8.85061 11.1778 8.66618 11.1422 8.47286C11.0978 8.19062 11.0356 7.91064 10.9644 7.6284L10.94 7.52174C10.8867 7.32842 10.8422 7.14395 10.78 6.95063C10.6044 6.34395 10.4022 5.75284 10.1889 5.19951C10.1111 4.97952 10.0222 4.76841 9.93333 4.55731C9.80221 4.2395 9.66888 3.95063 9.54665 3.67728C9.48445 3.55284 9.4311 3.4395 9.37779 3.32395C9.31776 3.19283 9.25556 3.06176 9.19332 2.93727C9.14891 2.84171 9.09776 2.75284 9.0622 2.66397L8.68224 1.96173C8.62889 1.86618 8.71776 1.75284 8.82221 1.78173L11.2 2.42619H11.2067C11.2111 2.42619 11.2133 2.4284 11.2156 2.4284L11.5289 2.51506L11.8733 2.61283L12 2.64839V1.23508C12 0.552841 12.5466 -0.000488281 13.2222 -0.000488281C13.56 -0.000488281 13.8667 0.137267 14.0867 0.361732C14.3067 0.586197 14.4445 0.892855 14.4445 1.23508V3.33284L14.6978 3.40393C14.7178 3.41061 14.7378 3.41951 14.7555 3.43282C14.8178 3.47949 14.9067 3.54842 15.02 3.63282C15.1089 3.70396 15.2044 3.79062 15.32 3.87949C15.5489 4.06397 15.8222 4.30175 16.1222 4.57505C16.2022 4.64397 16.28 4.71506 16.3511 4.7862C16.7378 5.14616 17.1711 5.56841 17.5844 6.03508C17.7 6.16615 17.8133 6.29949 17.9289 6.4395C18.0445 6.58173 18.1666 6.72174 18.2733 6.86176C18.4133 7.0484 18.5644 7.24171 18.6956 7.44397C18.7578 7.53953 18.8289 7.63729 18.8889 7.73284C19.0578 7.98841 19.2067 8.25286 19.3489 8.51727C19.4089 8.6395 19.4711 8.77284 19.5244 8.90396C19.6822 9.25729 19.8067 9.6173 19.8867 9.97731C19.9111 10.0551 19.9289 10.1395 19.9378 10.2151V10.2328C19.9644 10.3395 19.9733 10.4529 19.9822 10.5684C20.0178 10.9373 20 11.3062 19.92 11.6773C19.8867 11.8351 19.8422 11.9839 19.7889 12.1417C19.7355 12.2929 19.6822 12.4506 19.6133 12.5995C19.48 12.9084 19.3222 13.2173 19.1355 13.5062C19.0756 13.6128 19.0044 13.7262 18.9333 13.8328C18.8556 13.9462 18.7755 14.0529 18.7044 14.1573C18.6067 14.2906 18.5022 14.4306 18.3955 14.5551C18.3 14.6862 18.2022 14.8173 18.0956 14.9328C17.9466 15.1084 17.8044 15.2751 17.6556 15.4351C17.5666 15.5395 17.4711 15.6462 17.3733 15.7417C17.2778 15.8484 17.18 15.9439 17.0911 16.0328C16.9422 16.1817 16.8178 16.2973 16.7133 16.3928L16.4689 16.6173C16.4333 16.6484 16.3866 16.6662 16.3378 16.6662H14.4445V19.0951H16.8267C17.36 19.0951 17.8667 18.9062 18.2756 18.5595C18.4155 18.4373 19.0267 17.9084 19.7489 17.1106C19.7733 17.084 19.8044 17.064 19.84 17.0551L26.42 15.1528C26.5422 15.1173 26.6667 15.2106 26.6667 15.3395Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <IconOverly />
                                    </a>
                                    <a href="#">
                                        <svg
                                            width="21"
                                            height="21"
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.6875 20.9995H0.328125V6.98389H4.6875V20.9995ZM2.53125 5.06201C1.84375 5.06201 1.25 4.81201 0.75 4.31201C0.25 3.81201 0 3.21826 0 2.53076C0 1.84326 0.25 1.24951 0.75 0.749512C1.25 0.249512 1.84375 -0.000488281 2.53125 -0.000488281C3.21875 -0.000488281 3.8125 0.249512 4.3125 0.749512C4.8125 1.24951 5.0625 1.84326 5.0625 2.53076C5.0625 2.96826 4.9375 3.39014 4.6875 3.79639C4.46875 4.17139 4.15625 4.48389 3.75 4.73389C3.375 4.95264 2.96875 5.06201 2.53125 5.06201ZM21 20.9995H16.6406V14.1558C16.6406 13.6245 16.625 13.2026 16.5938 12.8901C16.5625 12.5464 16.4844 12.1714 16.3594 11.7651C16.2344 11.3276 16 10.9995 15.6562 10.7808C15.3438 10.562 14.9219 10.4526 14.3906 10.4526C13.3594 10.4526 12.6562 10.7808 12.2812 11.437C11.9375 12.0933 11.7656 12.9683 11.7656 14.062V20.9995H7.40625V6.98389H11.625V8.90576H11.6719C11.9844 8.28076 12.5 7.74951 13.2188 7.31201C13.9375 6.84326 14.7969 6.60889 15.7969 6.60889C16.8594 6.60889 17.7344 6.78076 18.4219 7.12451C19.1406 7.43701 19.6719 7.92139 20.0156 8.57764C20.3906 9.20264 20.6406 9.89014 20.7656 10.6401C20.9219 11.3901 21 12.2808 21 13.312V20.9995Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <IconOverly />
                                    </a>
                                    <a href="#">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5 5.60889C8.5 5.60889 6.10938 8.04639 6.10938 10.9995C6.10938 13.9995 8.5 16.3901 11.5 16.3901C14.4531 16.3901 16.8906 13.9995 16.8906 10.9995C16.8906 8.04639 14.4531 5.60889 11.5 5.60889ZM11.5 14.5151C9.57812 14.5151 7.98438 12.9683 7.98438 10.9995C7.98438 9.07764 9.53125 7.53076 11.5 7.53076C13.4219 7.53076 14.9688 9.07764 14.9688 10.9995C14.9688 12.9683 13.4219 14.5151 11.5 14.5151ZM18.3438 5.42139C18.3438 4.71826 17.7812 4.15576 17.0781 4.15576C16.375 4.15576 15.8125 4.71826 15.8125 5.42139C15.8125 6.12451 16.375 6.68701 17.0781 6.68701C17.7812 6.68701 18.3438 6.12451 18.3438 5.42139ZM21.9062 6.68701C21.8125 4.99951 21.4375 3.49951 20.2188 2.28076C19 1.06201 17.5 0.687012 15.8125 0.593262C14.0781 0.499512 8.875 0.499512 7.14062 0.593262C5.45312 0.687012 4 1.06201 2.73438 2.28076C1.51562 3.49951 1.14062 4.99951 1.04688 6.68701C0.953125 8.42139 0.953125 13.6245 1.04688 15.3589C1.14062 17.0464 1.51562 18.4995 2.73438 19.7651C4 20.9839 5.45312 21.3589 7.14062 21.4526C8.875 21.5464 14.0781 21.5464 15.8125 21.4526C17.5 21.3589 19 20.9839 20.2188 19.7651C21.4375 18.4995 21.8125 17.0464 21.9062 15.3589C22 13.6245 22 8.42139 21.9062 6.68701ZM19.6562 17.187C19.3281 18.1245 18.5781 18.8276 17.6875 19.2026C16.2812 19.7651 13 19.6245 11.5 19.6245C9.95312 19.6245 6.67188 19.7651 5.3125 19.2026C4.375 18.8276 3.67188 18.1245 3.29688 17.187C2.73438 15.8276 2.875 12.5464 2.875 10.9995C2.875 9.49951 2.73438 6.21826 3.29688 4.81201C3.67188 3.92139 4.375 3.21826 5.3125 2.84326C6.67188 2.28076 9.95312 2.42139 11.5 2.42139C13 2.42139 16.2812 2.28076 17.6875 2.84326C18.5781 3.17139 19.2812 3.92139 19.6562 4.81201C20.2188 6.21826 20.0781 9.49951 20.0781 10.9995C20.0781 12.5464 20.2188 15.8276 19.6562 17.187Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <IconOverly />
                                    </a>
                                    <a href="https://twitter.com/CootiesNFTs" target="_blank">
                                        <svg
                                            width="24"
                                            height="20"
                                            viewBox="0 0 24 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.5156 5.12451C22.4531 4.42139 23.2969 3.57764 23.9531 2.59326C23.1094 2.96826 22.125 3.24951 21.1406 3.34326C22.1719 2.73389 22.9219 1.79639 23.2969 0.624512C22.3594 1.18701 21.2812 1.60889 20.2031 1.84326C19.2656 0.858887 18 0.296387 16.5938 0.296387C13.875 0.296387 11.6719 2.49951 11.6719 5.21826C11.6719 5.59326 11.7188 5.96826 11.8125 6.34326C7.73438 6.10889 4.07812 4.14014 1.64062 1.18701C1.21875 1.89014 0.984375 2.73389 0.984375 3.67139C0.984375 5.35889 1.82812 6.85889 3.1875 7.74951C2.39062 7.70264 1.59375 7.51514 0.9375 7.14014V7.18701C0.9375 9.57764 2.625 11.5464 4.875 12.0151C4.5 12.1089 4.03125 12.2026 3.60938 12.2026C3.28125 12.2026 3 12.1558 2.67188 12.1089C3.28125 14.0776 5.10938 15.4839 7.26562 15.5308C5.57812 16.8433 3.46875 17.6401 1.17188 17.6401C0.75 17.6401 0.375 17.5933 0 17.5464C2.15625 18.9526 4.73438 19.7495 7.54688 19.7495C16.5938 19.7495 21.5156 12.2964 21.5156 5.78076C21.5156 5.54639 21.5156 5.35889 21.5156 5.12451Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <IconOverly />
                                    </a>
                                    <a href="#">
                                        <svg
                                            width="23"
                                            height="19"
                                            viewBox="0 0 23 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.9062 2.64014C22.1875 1.32764 21.4375 0.812012 20.5938 1.14014L1.9375 8.31201C0.671875 8.82764 0.71875 9.53076 1.75 9.85889L6.48438 11.312L17.5469 4.37451C18.0625 3.99951 18.5781 4.23389 18.1562 4.56201L9.20312 12.6245L8.875 17.5464C9.39062 17.5464 9.57812 17.3589 9.85938 17.0776L12.1562 14.8276L16.9844 18.3901C17.875 18.9058 18.5312 18.6245 18.7656 17.5933L21.9062 2.64014Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <IconOverly />
                                    </a>
                                    <a href="#">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.625 11.9995C23.625 5.57764 18.4219 0.374512 12 0.374512C5.57812 0.374512 0.375 5.57764 0.375 11.9995C0.375 17.812 4.59375 22.6401 10.1719 23.4839V15.3745H7.21875V11.9995H10.1719V9.46826C10.1719 6.56201 11.9062 4.92139 14.5312 4.92139C15.8438 4.92139 17.1562 5.15576 17.1562 5.15576V8.01514H15.7031C14.25 8.01514 13.7812 8.90576 13.7812 9.84326V11.9995H17.0156L16.5 15.3745H13.7812V23.4839C19.3594 22.6401 23.625 17.812 23.625 11.9995Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <IconOverly />
                                    </a>
                                    <a href="#">
                                        <svg
                                            width="32"
                                            height="18"
                                            viewBox="0 0 32 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.8773 8.99966C17.8773 13.9702 13.8753 17.9995 8.93881 17.9995C4.00233 17.9995 0 13.9702 0 8.99966C0 4.02917 4.00203 -0.000488281 8.93881 -0.000488281C13.8756 -0.000488281 17.8773 4.02917 17.8773 8.99966Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M27.6791 9.00127C27.6791 13.6799 25.6781 17.4742 23.2097 17.4742C20.7413 17.4742 18.7403 13.6799 18.7403 9.00127C18.7403 4.32262 20.741 0.52832 23.2094 0.52832C25.6778 0.52832 27.6788 4.32141 27.6788 9.00127"
                                                fill="white"
                                            />
                                            <path
                                                d="M31.6935 8.9979C31.6935 13.1888 30.9899 16.5883 30.1216 16.5883C29.2534 16.5883 28.55 13.1897 28.55 8.9979C28.55 4.80606 29.2537 1.40747 30.1216 1.40747C30.9896 1.40747 31.6935 4.80576 31.6935 8.9979Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <IconOverly />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-bottom-bg">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="4" className="mb-4 mb-lg-0">
                                <div className="footer-bottom-logo">
                                    <Link to="/">
                                        <img
                                            src={FooterLogo}
                                            alt="footer-logo"
                                        />
                                    </Link>
                                </div>
                            </Col>
                            <Col
                                lg="4"
                                className="order-3 order-lg-2 mb-4 mb-lg-0"
                            >
                                <div className="footer-bottom-content">
                                    <p>Copyright © 2022 The Cooties</p>
                                    <button onClick={bottomToTopHandler}>
                                        <IoIosArrowUp />
                                    </button>
                                </div>
                            </Col>
                            <Col lg="4" className="order-2 order-lg-3">
                                <div className="footer-bottom-menu">
                                    <Link to="/">Home</Link>
                                    <Link to="#about">About Us</Link>
                                    <Link to="/">Roadmap</Link>
                                    <Link to="/">FAQs</Link>
                                    <Link to="/">Articles</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Footer;
