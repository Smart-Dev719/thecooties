import "./blogjoin.css";
import { ReactComponent as BgBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn.svg";
import { ReactComponent as OutlineBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn-outline.svg";

const BlogJoin = () => {
    return (
        <>
            <div className="blog-join-box">
                <div className="container ui-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="blog-join-left">
                                <h2>Join Our community & get Early access</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog-join-right">
                                <button className="btn-bg-1 bj-btn-1">
                                    <BgBtnOverlay />
                                    <svg
                                        width="25"
                                        height="22"
                                        viewBox="0 0 25 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M24.4444 14.0617V15.3389C24.4444 15.4122 24.3996 15.4774 24.3344 15.5059C23.9352 15.677 22.5683 16.3045 22 17.0948C20.5496 19.1135 19.4415 22 16.9644 22H6.63053C2.96796 22 0 19.0219 0 15.347V15.2289C0 15.1311 0.0794404 15.0517 0.177209 15.0517H5.93796C6.05203 15.0517 6.13556 15.1576 6.12539 15.2696C6.08463 15.6444 6.15389 16.0274 6.3311 16.3758C6.67332 17.0704 7.38224 17.5043 8.14813 17.5043H11V15.2778H8.18074C8.03609 15.2778 7.95057 15.1107 8.03406 14.9926C8.06464 14.9457 8.09927 14.8968 8.13593 14.8418C8.40276 14.463 8.7837 13.8742 9.16257 13.2041C9.42129 12.7519 9.67186 12.2691 9.87352 11.7843C9.91428 11.6967 9.94684 11.6071 9.97944 11.5194C10.0344 11.3646 10.0915 11.22 10.1322 11.0754C10.173 10.9532 10.2056 10.8248 10.2382 10.7046C10.3339 10.2931 10.3746 9.85722 10.3746 9.40499C10.3746 9.22778 10.3665 9.04242 10.3502 8.86517C10.3421 8.67165 10.3176 8.47814 10.2931 8.28463C10.2768 8.1135 10.2463 7.94444 10.2137 7.76724C10.173 7.50852 10.1159 7.25187 10.0507 6.99315L10.0283 6.89538C9.97944 6.71817 9.93869 6.54907 9.88167 6.37186C9.72072 5.81573 9.53536 5.27388 9.33982 4.76667C9.26853 4.565 9.18702 4.37149 9.10556 4.17798C8.98536 3.88666 8.86314 3.62186 8.75109 3.37129C8.69408 3.25722 8.64517 3.15332 8.59631 3.0474C8.54128 2.92721 8.48427 2.80706 8.42721 2.69294C8.3865 2.60535 8.33962 2.52388 8.30701 2.44242L7.95872 1.7987C7.90982 1.71111 7.99128 1.60722 8.08702 1.6337L10.2667 2.22445H10.2728C10.2768 2.22445 10.2789 2.22648 10.2809 2.22648L10.5681 2.30592L10.8839 2.39554L11 2.42814V1.1326C11 0.507218 11.5011 0 12.1204 0C12.43 0 12.7111 0.126275 12.9128 0.332035C13.1144 0.537795 13.2408 0.818898 13.2408 1.1326V3.05556L13.473 3.12072C13.4913 3.12684 13.5096 3.135 13.5259 3.1472C13.583 3.18998 13.6644 3.25316 13.7683 3.33053C13.8498 3.39574 13.9374 3.47518 14.0434 3.55665C14.2532 3.72575 14.5037 3.94372 14.7787 4.19424C14.852 4.25742 14.9233 4.32259 14.9885 4.3878C15.3429 4.71776 15.7402 5.10483 16.1191 5.5326C16.225 5.65276 16.3289 5.77498 16.4348 5.90332C16.5408 6.0337 16.6528 6.16205 16.7506 6.29039C16.8789 6.46148 17.0174 6.63869 17.1376 6.82409C17.1946 6.91168 17.2598 7.0013 17.3148 7.08889C17.4696 7.32316 17.6061 7.56557 17.7365 7.80795C17.7915 7.91999 17.8485 8.04221 17.8974 8.16241C18.042 8.48629 18.1561 8.8163 18.2294 9.14631C18.2519 9.2176 18.2681 9.29501 18.2763 9.36428V9.38053C18.3007 9.47835 18.3089 9.58224 18.317 9.68816C18.3496 10.0263 18.3333 10.3644 18.26 10.7046C18.2294 10.8493 18.1887 10.9857 18.1398 11.1304C18.0909 11.2689 18.042 11.4135 17.9789 11.55C17.8567 11.8331 17.712 12.1163 17.5409 12.3811C17.4859 12.4789 17.4207 12.5828 17.3556 12.6805C17.2843 12.7844 17.2109 12.8822 17.1457 12.978C17.0561 13.1002 16.9604 13.2285 16.8626 13.3426C16.775 13.4628 16.6854 13.583 16.5876 13.6889C16.4511 13.8498 16.3207 14.0026 16.1843 14.1493C16.1028 14.245 16.0152 14.3428 15.9255 14.4304C15.838 14.5281 15.7483 14.6157 15.6668 14.6972C15.5304 14.8337 15.4163 14.9396 15.3206 15.0272L15.0965 15.233C15.0639 15.2615 15.0211 15.2778 14.9763 15.2778H13.2408V17.5043H15.4245C15.9133 17.5043 16.3778 17.3311 16.7526 17.0133C16.8809 16.9013 17.4411 16.4165 18.1032 15.6852C18.1255 15.6607 18.1541 15.6424 18.1867 15.6343L24.2183 13.8906C24.3304 13.8579 24.4444 13.9435 24.4444 14.0617Z"
                                            fill="#111111"
                                        />
                                    </svg>
                                    COLLECTIONS
                                </button>
                                <button className="btn-bg-1 bj-btn-2">
                                    <BgBtnOverlay />
                                    <svg
                                        width="26"
                                        height="20"
                                        viewBox="0 0 26 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21.886 1.675C20.2136 0.8925 18.4253 0.323815 16.5557 0C16.3261 0.415119 16.0579 0.973462 15.8729 1.41762C13.8855 1.11874 11.9164 1.11874 9.96554 1.41762C9.78063 0.973462 9.50629 0.415119 9.27463 0C7.40304 0.323815 5.61273 0.894589 3.94028 1.67914C0.566943 6.77669 -0.347513 11.7476 0.109716 16.648C2.34709 18.3188 4.51538 19.3338 6.64707 19.9979C7.1734 19.2736 7.64281 18.5035 8.0472 17.692C7.27703 17.3994 6.53937 17.0382 5.84237 16.6189C6.02728 16.482 6.20815 16.3387 6.3829 16.1914C10.6341 18.1798 15.2531 18.1798 19.4536 16.1914C19.6304 16.3387 19.8112 16.482 19.9941 16.6189C19.295 17.0403 18.5554 17.4014 17.7852 17.6941C18.1896 18.5035 18.657 19.2757 19.1853 20C21.3191 19.3358 23.4894 18.3209 25.7267 16.648C26.2632 10.9672 24.8103 6.04194 21.886 1.675ZM8.62636 13.6343C7.3502 13.6343 6.30363 12.4429 6.30363 10.9921C6.30363 9.54132 7.32785 8.34788 8.62636 8.34788C9.92492 8.34788 10.9714 9.53923 10.9491 10.9921C10.9511 12.4429 9.92492 13.6343 8.62636 13.6343ZM17.2101 13.6343C15.9339 13.6343 14.8874 12.4429 14.8874 10.9921C14.8874 9.54132 15.9115 8.34788 17.2101 8.34788C18.5086 8.34788 19.5552 9.53923 19.5328 10.9921C19.5328 12.4429 18.5086 13.6343 17.2101 13.6343Z"
                                            fill="white"
                                        />
                                    </svg>
                                    JOIN DISCORD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogJoin;