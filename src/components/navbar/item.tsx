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
                className={`p-2 flex items-center justify-between rounded-md hover:bg-slate-100 ${isActive ? 'bg-emerald-50 text-emerald-500 font-semibold' : ''}`}
                onClick={() => child.length && setOpen((prev) => !prev)}
            >
                <div className="flex items-center w-full">
                    {Icon && <Icon className="text-xl" />}
                    <span className="flex-1 mx-2.5 single-line">{text}</span>
                </div>
                {child.length > 0 && <IoIosArrowDown className="text-xl" />}
            </Link>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'}`}
            >
                {open &&
                    child.map((item, index) => (
                        <Link
                            key={index}
                            to={item.url || '#'}
                            className={`p-2 ps-6 flex items-center rounded-md ${item.isActive ? 'text-emerald-500 font-semibold' : ''}`}
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
