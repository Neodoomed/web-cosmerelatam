import { useEffect } from 'react';
import { icons } from '../styles/globalStyles';

export default function GoTop(props) {
    const handleScroll = (event) => {
        event.preventDefault();
        if (window.scrollY > 100) {
            document.querySelector('.goTopConteiner').classList.add('show');
        } else {
            document.querySelector('.goTopConteiner').classList.remove('show');
        }
    };

    const handleClick = (event) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <div className="goTopConteiner btn-black" onClick={handleClick}>
                <span className="arrows"></span>
            </div>
            <style jsx>{icons}</style>
            <style jsx>{`
                .goTopConteiner {
                    width: 50px;
                    height: 50px;
                    position: fixed;
                    justify-content: center;
                    right: 50px;
                    bottom: -50px;
                    z-index: 99;
                    animation: all 1 ease-in-out;
                    animation: fadeOut 0.5s ease-in-out;
                    opacity: 0;
                }
                .arrows {
                    background: none;
                    display: block;
                    height: 2px;
                    width: 20px;
                    position: relative;
                    transition: all 0.5s ease-out;
                }
                .arrows::before,
                .arrows::after {
                    background: #999999;
                    content: '';
                    height: 100%;
                    width: 100%;
                    position: absolute;
                }
                .arrows::before {
                    transform: rotate(-45deg);
                    right: 7px;
                }
                .arrows::after {
                    transform: rotate(45deg);
                    left: 7px;
                }
                .arrows::before {
                    transform: rotate(-45deg);
                    right: 7px;
                }
                .arrows::after {
                    transform: rotate(45deg);
                    left: 7px;
                }
                .show {
                    transform: translateY(50px);
                    animation: all 1s ease-in-out;
                    animation: fadeIn 0.5s ease-in-out;
                    opacity: 1;
                }
                @media all and (min-width: 768px) {
                    .show {
                        transform: translateY(-70px);
                    }
                }

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
}
