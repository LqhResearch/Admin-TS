import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoDot } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
    icon?: React.ElementType;
    text: string;
    url?: string;
    isActive?: boolean;
    child?: { text: string; url?: string; isActive?: boolean }[];
}

const NavbarItemComponent: FC<Props> = ({
    icon: Icon,
    url = '#',
    text,
    isActive = false,
    child = [],
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="my-2">
            <Link
                to={url}
                className={`flex items-center justify-between rounded-lg hover:bg-slate-100 ${isActive ? 'bg-primary-light text-primary font-semibold' : ''}`}
                onClick={() => child.length && setOpen((prev) => !prev)}
            >
                <div className="w-full flex items-center">
                    {Icon && (
                        <div
                            className={`bg-slate-100 p-2 rounded-lg ${isActive && 'bg-primary text-white'}`}
                        >
                            <Icon className="text-xl" />
                        </div>
                    )}
                    <span className={`flex-1 mx-2.5 single-line ${isActive && 'text-primary'}`}>
                        {text}
                    </span>
                </div>
                {child.length > 0 && (
                    <div className="p-2">
                        <IoIosArrowDown className="text-sm" />
                    </div>
                )}
            </Link>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'}`}
            >
                {open &&
                    child.map((item, index) => (
                        <Link
                            key={index}
                            to={item.url || '#'}
                            className={`p-2 ps-6 flex items-center rounded-lg ${item.isActive ? 'text-primary' : ''}`}
                        >
                            <GoDot className="text-xl" />
                            <div className="flex-1 mx-2.5 single-line">{item.text}</div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default NavbarItemComponent;
