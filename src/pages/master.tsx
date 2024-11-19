import { FC, ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';
import useNavbarStore from '../zustand/useNavbarStore';
import NavbarComponent from '../components/navbar';
import UserComponent from '../components/user/dropdown';

interface Props {
    children: ReactNode;
}

const MasterPage: FC<Props> = ({ children }) => {
    // Store
    const { isOpen, toggleNavbar } = useNavbarStore();

    return (
        <div className="relative min-h-screen bg-slate-100 text-color">
            <div
                className={`fixed top-0 left-0 bottom-0 flex flex-col bg-white shadow transition-all duration-300 ease-in-out 
                ${isOpen ? 'w-[240px] translate-x-0' : 'w-0 hidden -translate-x-full'}`}
            >
                <div className="p-3 flex items-center justify-center mb-4">
                    <img className="w-8" src="/img/favicon.png" alt="Icon" />
                    <span className="ms-2 font-bold text-black">Admin TS</span>
                </div>

                <NavbarComponent />

                <div className="p-3 text-xs text-center">© {new Date().getFullYear()}</div>
            </div>

            <div
                className={`${isOpen ? 'ml-[240px]' : ''} transition-all duration-300 ease-in-out`}
            >
                <div className="bg-white flex items-center justify-between shadow">
                    <div
                        className="h-[52px] p-3 flex items-center justify-center cursor-pointer hover:bg-slate-100"
                        onClick={toggleNavbar}
                    >
                        <FaBars className="text-lg" />
                    </div>

                    <UserComponent />
                </div>

                {children}
            </div>
        </div>
    );
};

export default MasterPage;
