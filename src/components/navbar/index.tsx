import { FC } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import NavbarItemComponent from './item';

const NavbarComponent: FC = () => {
    return (
        <div className="flex-1 p-3 overflow-y-auto">
            <NavbarItemComponent icon={AiOutlineDashboard} text="Dashboard" url="/" isActive />
            <NavbarItemComponent
                icon={FiEdit}
                text="Forms"
                child={[
                    {
                        text: 'General Form',
                        url: '/form/general',
                    },
                ]}
            />
        </div>
    );
};

export default NavbarComponent;
