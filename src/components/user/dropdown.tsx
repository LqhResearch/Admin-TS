import { FC, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosPerson, IoIosKey, IoIosLogOut } from 'react-icons/io';

const UserComponent: FC = () => {
    // State
    const [isOpen, setIsOpen] = useState(false);

    // Ref
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div
                ref={buttonRef}
                className="p-2 flex items-center text-sm cursor-pointer hover:bg-slate-100"
                onClick={toggleDropdown}
                aria-expanded={isOpen ? 'true' : 'false'}
            >
                <img className="w-8 h-8 rounded-full" src="/img/user.png" alt="User" />
                <div className="mx-2">
                    <div className="font-semibold text-black">Quản trị viên</div>
                    <div className="text-slate-400 text-xs">Admin</div>
                </div>
            </div>

            <div
                ref={dropdownRef}
                className={`absolute right-1 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                <Link to={'#'} className="p-3 flex items-center cursor-pointer hover:bg-slate-100">
                    <IoIosPerson className="text-lg mr-2" />
                    <span className="text-sm">Thông tin cá nhân</span>
                </Link>
                <Link to={'#'} className="p-3 flex items-center cursor-pointer hover:bg-slate-100">
                    <IoIosKey className="text-lg mr-2" />
                    <span className="text-sm">Đổi mật khẩu</span>
                </Link>
                <Link
                    to={'#'}
                    className="p-3 flex items-center cursor-pointer hover:bg-slate-100 border-t border-gray-300"
                >
                    <IoIosLogOut className="text-lg mr-2" />
                    <span className="text-sm">Đăng xuất</span>
                </Link>
            </div>
        </div>
    );
};

export default UserComponent;
