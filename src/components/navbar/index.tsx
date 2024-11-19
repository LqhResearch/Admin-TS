import { FC } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import NavbarItemComponent from './item';

const NavbarComponent: FC = () => {
    return (
        <div className="flex-1 p-3 text-sm overflow-y-auto">
            <NavbarItemComponent icon={AiOutlineDashboard} text="Dashboard" url="/" isActive />

            <div className="my-3 uppercase text-xs font-semibold text-primary">Components</div>

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
