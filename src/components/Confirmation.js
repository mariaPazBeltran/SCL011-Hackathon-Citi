import React, { useEffect, useState } from 'react';
import './confirmation.css';
import db from '../firebase-config/firebase';
import { Link } from 'react-router-dom';

function Confirmation() {
    const [charge, setCharge] = useState([])

    useEffect(() => {
        db
            .collection("PinInfo")
            .onSnapshot((snapshot) => {
                const newCharge = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setCharge(newCharge)
            })

    }, [])


    return (
        <div>
            <h3>Autorización</h3>
            <svg className="auth-img" width="170" height="165" viewBox="0 0 170 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130.288 53.7181C130.098 53.7181 129.908 53.6833 129.735 53.5963C129.096 53.283 128.819 52.5 129.13 51.8561L137.72 33.8979C138.273 32.732 138.342 31.4095 137.927 30.1914C137.495 28.9733 136.631 27.9814 135.473 27.4246L103.968 12.1635C102.81 11.6067 101.497 11.5371 100.287 11.9547C99.0771 12.3898 98.092 13.2598 97.539 14.4257L83.3678 43.6775C83.0568 44.3213 82.2791 44.5997 81.6396 44.2865C81.0002 43.9733 80.7237 43.1902 81.0348 42.5464L95.206 13.2946C96.0528 11.5023 97.5563 10.145 99.4227 9.50113C101.289 8.83988 103.294 8.96169 105.091 9.81436L136.579 25.058C140.26 26.8329 141.815 31.3051 140.053 35.0116L131.463 52.9698C131.239 53.4571 130.772 53.7181 130.288 53.7181Z" fill="#1F45CB" />
                <path d="M97.7983 113.248C96.7268 113.248 95.638 113.005 94.6011 112.517L78.8054 104.861C78.166 104.548 77.8895 103.764 78.2005 103.121C78.5116 102.477 79.2893 102.198 79.9287 102.512L95.7244 110.168C98.1266 111.334 101.013 110.307 102.153 107.906L109.654 92.2621C109.965 91.6183 110.742 91.3399 111.382 91.6531C112.021 91.9663 112.298 92.7494 111.987 93.3932L104.486 109.02C103.225 111.699 100.563 113.248 97.7983 113.248Z" fill="#1F45CB" />
                <path d="M105.973 102.981C105.782 102.981 105.592 102.947 105.42 102.86L82.3655 91.6879C81.726 91.3747 81.4495 90.5916 81.7606 89.9478C82.0717 89.3039 82.8494 89.0255 83.4888 89.3387L106.543 100.51C107.182 100.824 107.459 101.607 107.148 102.251C106.923 102.72 106.456 102.981 105.973 102.981Z" fill="#1F45CB" />
                <path d="M137.789 36.8387C137.599 36.8387 137.409 36.8039 137.236 36.7169L96.4158 16.9489C95.7763 16.6357 95.4998 15.8526 95.8109 15.2088C96.122 14.5649 96.8997 14.2865 97.5391 14.5997L138.342 34.3677C138.981 34.6809 139.258 35.464 138.947 36.1078C138.722 36.5603 138.273 36.8387 137.789 36.8387Z" fill="#1F45CB" />
                <path d="M86.3748 100.249C86.1847 100.249 85.9946 100.215 85.8218 100.128L81.4668 98.022C80.8274 97.7088 80.5508 96.9257 80.8619 96.2819C81.173 95.638 81.9507 95.3596 82.5901 95.6728L86.9452 97.7784C87.5846 98.0916 87.8611 98.8747 87.55 99.5185C87.3254 99.9884 86.8587 100.249 86.3748 100.249Z" fill="#1F45CB" />
                <path d="M35.618 126.334C35.4279 126.334 35.2378 126.299 35.0649 126.212C34.4255 125.899 34.149 125.116 34.4601 124.472L46.7821 98.6659L51.7247 70.9107C51.8457 66.0905 54.2306 61.5835 58.1536 58.8167L84.3357 40.5278C86.0121 39.3445 88.034 38.9095 90.056 39.3097C92.0607 39.6926 93.7889 40.8585 94.9123 42.5812C97.0898 45.9223 96.2948 50.3944 93.1322 52.7784L74.2258 66.9954C75.9194 68.9095 79.2894 73.1903 81.5015 79.0371C83.2642 83.7181 83.921 88.4339 83.4371 93.0452C82.8322 98.8051 80.4646 104.408 76.3688 109.681C75.9367 110.255 75.1072 110.342 74.5541 109.907C73.9838 109.472 73.8974 108.637 74.3295 108.08C78.0969 103.208 80.2917 98.0916 80.8448 92.8364C81.2941 88.6427 80.7065 84.3445 79.0993 80.0638C76.3169 72.6682 71.4261 67.8306 71.3743 67.7784C71.0978 67.5174 70.9595 67.1346 70.9768 66.7517C70.9941 66.3689 71.1842 66.0209 71.4953 65.7947L91.5596 50.7077C93.6334 49.1415 94.1519 46.2181 92.7347 44.0255C91.9916 42.8944 90.8683 42.1288 89.5549 41.8851C88.2414 41.6241 86.9107 41.92 85.8047 42.6856L59.6226 60.9571C56.3563 63.2541 54.3689 67.0476 54.2997 71.0673C54.2997 71.1369 54.2997 71.2065 54.2824 71.2761L49.288 99.3097C49.2707 99.4315 49.2361 99.5359 49.1843 99.6404L36.7758 125.603C36.5685 126.073 36.1019 126.334 35.618 126.334Z" fill="#1F45CB" />
                <path d="M123.41 68.109C120.351 68.109 117.552 66.0731 116.688 62.9756C115.651 59.2517 117.828 55.3712 121.544 54.3445L133.002 51.1427C134.799 50.638 136.683 50.8643 138.29 51.7865C139.914 52.7088 141.072 54.2053 141.574 56.0151C142.61 59.739 140.433 63.6195 136.717 64.6462L125.259 67.848C124.655 68.022 124.015 68.109 123.41 68.109ZM134.868 53.4745C134.471 53.4745 134.073 53.5267 133.693 53.6311L122.235 56.8329C119.902 57.4768 118.537 59.913 119.193 62.2622C119.833 64.6113 122.252 65.9861 124.585 65.3248L136.043 62.123C138.376 61.4791 139.742 59.0429 139.085 56.6937C138.774 55.5626 138.031 54.623 137.028 54.0313C136.354 53.6659 135.611 53.4745 134.868 53.4745Z" fill="#1F45CB" />
                <path d="M120.87 80.8469C117.811 80.8469 115.011 78.8109 114.147 75.7135C113.646 73.9037 113.871 72.007 114.787 70.3886C115.703 68.7529 117.189 67.587 118.986 67.0824L130.444 63.8805C132.241 63.3759 134.125 63.6021 135.732 64.5244C137.357 65.4466 138.515 66.9432 139.016 68.7529C139.517 70.5627 139.292 72.4594 138.376 74.0777C137.461 75.7135 135.974 76.8794 134.177 77.384L122.719 80.5859C122.097 80.7599 121.475 80.8469 120.87 80.8469ZM116.636 75.0174C117.275 77.3666 119.695 78.7413 122.028 78.0801L133.486 74.8782C135.819 74.2343 137.184 71.7982 136.527 69.449C135.888 67.0998 133.468 65.7251 131.135 66.3863L119.677 69.5882C117.362 70.232 115.996 72.6682 116.636 75.0174Z" fill="#1F45CB" />
                <path d="M114.285 94.6113C111.226 94.6113 108.427 92.5754 107.562 89.4779C107.061 87.6682 107.286 85.7714 108.202 84.1531C109.118 82.5174 110.604 81.3515 112.401 80.8468L123.859 77.645C125.657 77.1403 127.54 77.3665 129.148 78.2888C130.772 79.2111 131.93 80.7076 132.431 82.5174C133.468 86.2413 131.291 90.1218 127.575 91.1484L116.117 94.3503C115.529 94.5243 114.907 94.6113 114.285 94.6113ZM110.068 88.7645C110.708 91.1136 113.127 92.4884 115.46 91.8271L126.918 88.6252C129.251 87.9814 130.617 85.5452 129.96 83.196C129.649 82.0649 128.906 81.1252 127.903 80.5336C126.884 79.9594 125.709 79.8027 124.585 80.116L113.11 83.3526C110.794 83.9965 109.429 86.4327 110.068 88.7645Z" fill="#1F45CB" />
                <path d="M64.5479 145.771C64.3578 145.771 64.1677 145.737 63.9949 145.65C63.3554 145.336 63.0789 144.553 63.39 143.909L75.0035 119.582C75.2281 119.113 75.6947 118.834 76.1959 118.851C88.4142 119.13 94.0136 110.673 94.0654 110.586C94.4629 109.977 95.2579 109.803 95.8628 110.203C96.4676 110.603 96.6404 111.404 96.243 112.013C96.1738 112.117 94.6012 114.536 91.3349 116.903C88.4488 118.991 83.6617 121.427 76.9909 121.479L65.7231 145.058C65.4984 145.493 65.0318 145.771 64.5479 145.771Z" fill="#1F45CB" />
                <path d="M87.0664 150.975C77.8897 150.975 68.9722 149.165 60.5905 145.597C52.4853 142.152 45.2269 137.21 38.9708 130.928C32.732 124.646 27.8239 117.32 24.4021 109.159C20.8593 100.719 19.062 91.7402 19.062 82.5C19.062 73.2599 20.8593 64.2808 24.4021 55.8411C27.8239 47.6798 32.732 40.3713 38.9708 34.0719C45.2096 27.79 52.4853 22.848 60.5905 19.4026C68.9722 15.8353 77.8724 14.0255 87.0664 14.0255C87.775 14.0255 88.3625 14.6172 88.3625 15.3306C88.3625 16.0441 87.775 16.6358 87.0664 16.6358C78.2353 16.6358 69.6635 18.3759 61.6101 21.804C53.816 25.1276 46.8168 29.8782 40.82 35.9165C34.8058 41.9722 30.0879 49.0023 26.8043 56.8504C23.3998 64.9768 21.6716 73.5905 21.6716 82.4826C21.6716 91.3747 23.3998 100.006 26.8043 108.115C30.1052 115.963 34.8231 123.01 40.82 129.049C46.8341 135.104 53.816 139.855 61.6101 143.161C69.6808 146.589 78.2353 148.329 87.0664 148.329C95.8975 148.329 104.469 146.589 112.523 143.161C120.317 139.838 127.316 135.087 133.313 129.049C139.327 122.993 144.045 115.963 147.328 108.115C150.733 99.9884 152.461 91.3747 152.461 82.4826C152.461 68.4397 148.141 55.058 139.949 43.7471C139.534 43.1729 139.655 42.355 140.226 41.92C140.796 41.5023 141.608 41.6242 142.04 42.1984C150.543 53.9617 155.036 67.8829 155.036 82.4826C155.036 91.7228 153.239 100.702 149.696 109.142C146.274 117.303 141.366 124.611 135.127 130.911C128.889 137.193 121.613 142.135 113.508 145.58C105.143 149.165 96.2431 150.975 87.0664 150.975Z" fill="#1F45CB" />
                <path d="M96.485 70.5452C96.1566 70.5452 95.8282 70.4234 95.569 70.1624L88.6044 63.1671C88.1032 62.6624 88.1032 61.8272 88.6044 61.3225C89.1056 60.8179 89.9351 60.8179 90.4363 61.3225L96.485 67.413L118.191 45.5569C118.692 45.0522 119.522 45.0522 120.023 45.5569C120.524 46.0615 120.524 46.8968 120.023 47.4014L97.4009 70.1624C97.1417 70.4234 96.8133 70.5452 96.485 70.5452Z" fill="#1F45CB" />
                <g opacity="0.5">
                    <g opacity="0.3">
                        <g opacity="0.3">
                            <path opacity="0.3" d="M4.06125 111.317H1.29614C0.587586 111.317 0 110.725 0 110.012C0 109.298 0.587586 108.707 1.29614 108.707H4.06125C4.76981 108.707 5.3574 109.298 5.3574 110.012C5.3574 110.725 4.76981 111.317 4.06125 111.317Z" fill="#1F45CB" />
                            <path opacity="0.3" d="M14.776 111.317H11.6653C10.9567 111.317 10.3691 110.725 10.3691 110.012C10.3691 109.298 10.9567 108.707 11.6653 108.707H14.776C15.4846 108.707 16.0722 109.298 16.0722 110.012C16.0722 110.725 15.4846 111.317 14.776 111.317Z" fill="#1F45CB" />
                        </g>
                        <g opacity="0.3">
                            <path opacity="0.3" d="M7.94971 118.19C7.24115 118.19 6.65356 117.599 6.65356 116.885V114.101C6.65356 113.387 7.24115 112.796 7.94971 112.796C8.65827 112.796 9.24585 113.387 9.24585 114.101V116.885C9.24585 117.599 8.65827 118.19 7.94971 118.19Z" fill="#1F45CB" />
                            <path opacity="0.3" d="M7.94971 107.749C7.24115 107.749 6.65356 107.158 6.65356 106.444V103.312C6.65356 102.599 7.24115 102.007 7.94971 102.007C8.65827 102.007 9.24585 102.599 9.24585 103.312V106.444C9.24585 107.158 8.65827 107.749 7.94971 107.749Z" fill="#1F45CB" />
                        </g>
                    </g>
                    <g opacity="0.3">
                        <g opacity="0.3">
                            <path opacity="0.3" d="M113.456 126.282H110.691C109.982 126.282 109.395 125.69 109.395 124.977C109.395 124.263 109.982 123.672 110.691 123.672H113.456C114.164 123.672 114.752 124.263 114.752 124.977C114.752 125.69 114.164 126.282 113.456 126.282Z" fill="#1F45CB" />
                            <path opacity="0.3" d="M124.171 126.282H121.06C120.351 126.282 119.764 125.69 119.764 124.977C119.764 124.263 120.351 123.672 121.06 123.672H124.171C124.879 123.672 125.467 124.263 125.467 124.977C125.467 125.69 124.879 126.282 124.171 126.282Z" fill="#1F45CB" />
                        </g>
                        <g opacity="0.3">
                            <path opacity="0.3" d="M117.344 133.155C116.636 133.155 116.048 132.564 116.048 131.85V129.066C116.048 128.353 116.636 127.761 117.344 127.761C118.053 127.761 118.64 128.353 118.64 129.066V131.85C118.64 132.564 118.053 133.155 117.344 133.155Z" fill="#1F45CB" />
                            <path opacity="0.3" d="M117.344 122.715C116.636 122.715 116.048 122.123 116.048 121.41V118.277C116.048 117.564 116.636 116.972 117.344 116.972C118.053 116.972 118.64 117.564 118.64 118.277V121.41C118.64 122.123 118.053 122.715 117.344 122.715Z" fill="#1F45CB" />
                        </g>
                    </g>
                    <g opacity="0.3">
                        <g opacity="0.3">
                            <path opacity="0.3" d="M153.896 23.2657H151.131C150.422 23.2657 149.834 22.674 149.834 21.9606C149.834 21.2471 150.422 20.6555 151.131 20.6555H153.896C154.604 20.6555 155.192 21.2471 155.192 21.9606C155.192 22.674 154.604 23.2657 153.896 23.2657Z" fill="#1F45CB" />
                            <path opacity="0.3" d="M164.611 23.2657H161.5C160.791 23.2657 160.204 22.674 160.204 21.9606C160.204 21.2471 160.791 20.6555 161.5 20.6555H164.611C165.319 20.6555 165.907 21.2471 165.907 21.9606C165.907 22.674 165.319 23.2657 164.611 23.2657Z" fill="#1F45CB" />
                        </g>
                        <g opacity="0.3">
                            <path opacity="0.3" d="M157.784 30.1392C157.076 30.1392 156.488 29.5476 156.488 28.8341V26.0499C156.488 25.3365 157.076 24.7448 157.784 24.7448C158.493 24.7448 159.08 25.3365 159.08 26.0499V28.8341C159.08 29.5476 158.493 30.1392 157.784 30.1392Z" fill="#1F45CB" />
                            <path opacity="0.3" d="M157.784 19.6984C157.076 19.6984 156.488 19.1068 156.488 18.3933V15.2611C156.488 14.5476 157.076 13.9559 157.784 13.9559C158.493 13.9559 159.08 14.5476 159.08 15.2611V18.3933C159.08 19.1068 158.493 19.6984 157.784 19.6984Z" fill="#1F45CB" />
                        </g>
                    </g>
                    <path opacity="0.5" d="M23.2615 141.421C20.9457 141.421 19.062 139.524 19.062 137.193C19.062 134.861 20.9457 132.964 23.2615 132.964C25.5773 132.964 27.461 134.861 27.461 137.193C27.461 139.524 25.5773 141.421 23.2615 141.421ZM23.2615 135.574C22.3801 135.574 21.6543 136.305 21.6543 137.193C21.6543 138.08 22.3801 138.811 23.2615 138.811C24.1429 138.811 24.8687 138.08 24.8687 137.193C24.8687 136.288 24.1429 135.574 23.2615 135.574Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M161.5 59.565C159.184 59.565 157.3 57.6682 157.3 55.3365C157.3 53.0047 159.184 51.1079 161.5 51.1079C163.815 51.1079 165.699 53.0047 165.699 55.3365C165.699 57.6682 163.815 59.565 161.5 59.565ZM161.5 53.7181C160.618 53.7181 159.892 54.449 159.892 55.3365C159.892 56.2239 160.618 56.9548 161.5 56.9548C162.381 56.9548 163.107 56.2239 163.107 55.3365C163.107 54.449 162.381 53.7181 161.5 53.7181Z" fill="#1F45CB" />
                </g>
                <g opacity="0.5">
                    <path opacity="0.5" d="M134.488 18.1322C134.229 18.1322 133.952 18.0452 133.727 17.8886C131.239 16.0615 128.629 14.3735 125.951 12.8596C125.328 12.5116 125.104 11.7111 125.449 11.0847C125.795 10.4582 126.59 10.232 127.212 10.58C129.977 12.1462 132.673 13.8863 135.231 15.7831C135.801 16.2007 135.94 17.0186 135.508 17.6102C135.283 17.9408 134.885 18.1322 134.488 18.1322Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M63.0788 6.2645C62.5257 6.2645 62.0073 5.89907 61.8345 5.34223C61.6271 4.64617 62.0073 3.91531 62.6813 3.7065C70.5618 1.2529 78.7535 0 87.0661 0C93.5641 0 100.028 0.765661 106.284 2.27958C106.975 2.4536 107.407 3.14965 107.234 3.84571C107.061 4.54176 106.37 4.9768 105.679 4.80278C99.6128 3.35847 93.3567 2.61021 87.0661 2.61021C79.0127 2.61021 71.0803 3.8109 63.4762 6.19489C63.338 6.2471 63.1997 6.2645 63.0788 6.2645Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M31.712 24.7622C31.3664 24.7622 31.0208 24.623 30.7615 24.3445C30.2776 23.8225 30.2949 22.9872 30.8134 22.5C32.0922 21.2819 33.4402 20.0812 34.7882 18.9501C35.3413 18.4977 36.1535 18.5673 36.6201 19.1241C37.0694 19.681 37.0003 20.4988 36.4473 20.9687C35.1339 22.065 33.8377 23.2135 32.5934 24.3967C32.3515 24.6404 32.0231 24.7622 31.712 24.7622Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M7.06814 94.1415C6.42871 94.1415 5.85841 93.6543 5.78928 92.993C5.35723 89.5302 5.13257 86.0151 5.13257 82.5C5.13257 79.0023 5.35723 75.5046 5.78928 72.0592C7.11999 61.3747 10.4727 51.2123 15.761 41.8678C16.1066 41.2413 16.9016 41.0151 17.5237 41.3805C18.1459 41.7285 18.3705 42.529 18.0076 43.1555C12.9094 52.2216 9.66043 62.0534 8.36429 72.3898C7.94952 75.7135 7.74214 79.1241 7.74214 82.5C7.74214 85.8933 7.94952 89.3214 8.38157 92.6624C8.46798 93.3759 7.9668 94.0371 7.25825 94.1241C7.17184 94.1241 7.11999 94.1415 7.06814 94.1415Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M46.782 154.176C46.5573 154.176 46.3326 154.124 46.1425 154.002C42.9972 152.175 39.9383 150.122 37.0695 147.877C36.4992 147.442 36.3955 146.624 36.8276 146.05C37.2596 145.476 38.0719 145.371 38.6422 145.806C41.4246 147.964 44.3798 149.965 47.4387 151.74C48.0608 152.106 48.2682 152.906 47.9053 153.515C47.6633 153.933 47.2313 154.176 46.782 154.176Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M87.0662 165C79.7559 165 72.5148 164.026 65.5329 162.129C64.8416 161.937 64.4269 161.224 64.617 160.528C64.8071 159.832 65.5156 159.414 66.2069 159.606C72.9641 161.45 79.9806 162.39 87.0662 162.39C92.7865 162.39 98.5068 161.781 104.037 160.563C104.728 160.406 105.42 160.858 105.575 161.555C105.731 162.251 105.281 162.947 104.59 163.103C98.8697 164.374 92.9766 165 87.0662 165Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M126.59 154.594C126.141 154.594 125.691 154.35 125.467 153.933C125.121 153.306 125.328 152.506 125.968 152.158C127.903 151.061 129.822 149.861 131.654 148.608C132.241 148.208 133.053 148.364 133.451 148.956C133.848 149.548 133.693 150.365 133.105 150.766C131.204 152.071 129.234 153.306 127.229 154.437C127.022 154.542 126.815 154.594 126.59 154.594Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M146.896 138.254C146.585 138.254 146.274 138.15 146.032 137.923C145.497 137.436 145.462 136.618 145.946 136.079C154.794 126.23 161.102 114.223 164.196 101.381C164.368 100.684 165.06 100.249 165.768 100.423C166.46 100.597 166.892 101.294 166.719 102.007C163.522 115.267 157.006 127.657 147.882 137.836C147.605 138.097 147.242 138.254 146.896 138.254Z" fill="#1F45CB" />
                    <path opacity="0.5" d="M167.704 83.8051C166.995 83.8051 166.408 83.2135 166.408 82.5C166.408 80.0986 166.304 77.6798 166.096 75.2958C165.924 73.3469 165.682 71.3805 165.371 69.4664C165.25 68.7529 165.734 68.0917 166.442 67.9698C167.151 67.848 167.807 68.3353 167.928 69.0487C168.257 71.0325 168.516 73.0684 168.689 75.0696C168.913 77.5232 169.017 80.029 169.017 82.5174C169 83.2309 168.412 83.8051 167.704 83.8051Z" fill="#1F45CB" />
                </g>
            </svg>
            <h4>Supermercado Tottus</h4>
            {charge.map((Charge) =>
                <p className="price-display"> $ {Charge.charge}</p>
            )}
            <div className="btn-container">
                <Link to='/claveDinamica'>
                    <button className="btn-option2">
                        <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.4283 16.8733C53.3025 24.7475 53.3025 37.554 45.4283 45.4282C37.5541 53.3024 24.7477 53.3024 16.8735 45.4282C8.99923 37.554 8.99923 24.7475 16.8734 16.8733C24.7477 8.99911 37.5541 8.99911 45.4283 16.8733ZM46.7263 15.5754C38.1165 6.96566 24.1852 6.96566 15.5755 15.5754C6.96578 24.1851 6.96578 38.1164 15.5755 46.7261C24.1852 55.3359 38.1165 55.3359 46.7263 46.7261C55.336 38.1164 55.336 24.1851 46.7263 15.5754Z" fill="white" />
                            <path d="M39.8038 24.2284L38.0732 22.4978L22.4979 38.0732L24.2285 39.8038L39.8038 24.2284Z" fill="white" />
                            <path d="M39.8039 38.0732L24.2285 22.4978L22.4979 24.2284L38.0733 39.8038L39.8039 38.0732Z" fill="white" />
                        </svg><br></br>
                        Rechazar Pago
</button>
                </Link>

                <Link to='/boleta'>
                    <button className="btn-option">
                        <svg className="padd" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 1.83333C33.1222 1.83333 42.1667 10.8778 42.1667 22C42.1667 33.1222 33.1222 42.1667 22 42.1667C10.8778 42.1667 1.83333 33.1222 1.83333 22C1.83333 10.8778 10.8778 1.83333 22 1.83333ZM22 0C9.83889 0 0 9.83889 0 22C0 34.1611 9.83889 44 22 44C34.1611 44 44 34.1611 44 22C44 9.83889 34.1611 0 22 0Z" fill="white" />
                            <path d="M18.3334 30.0667L12.3445 24.0167L13.6278 22.7333L18.3334 27.5L30.4945 15.3389L31.7778 16.6222L18.3334 30.0667Z" fill="white" />
                        </svg><br></br>
                        Autorizar Pago
</button>
                </Link>
            </div>
        </div>
    )
}

export default Confirmation;
