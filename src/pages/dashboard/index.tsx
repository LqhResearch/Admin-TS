import { FC } from 'react';
import { IoBagCheckOutline, IoBarChart } from 'react-icons/io5';
import { FaCloudArrowDown, FaMusic, FaQrcode, FaRegFaceSmileBeam } from 'react-icons/fa6';
import { BsBagCheckFill, BsFillBarChartLineFill, BsSuitcaseLgFill } from 'react-icons/bs';
import { FaArrowDown, FaArrowUp, FaChartPie, FaUserPlus } from 'react-icons/fa';
import MasterPage from '../master';
import { FiEdit } from 'react-icons/fi';
import { IoMdChatboxes } from 'react-icons/io';
import { GiBreakingChain } from 'react-icons/gi';

const DashboardPage: FC = () => {
    return (
        <MasterPage>
            <div className="p-3">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="bg-white p-5 shadow-sm rounded-lg flex items-center justify-between">
                        <div className="p-5 bg-purple-50 text-purple-800 rounded-full">
                            <IoBagCheckOutline className="text-2xl" />
                        </div>
                        <div>
                            <div className="font-semibold text-color text-2xl">150</div>
                            <div className="text-sm">New Orders</div>
                        </div>
                    </div>
                    <div className="bg-white p-5 shadow-sm rounded-lg flex items-center justify-between">
                        <div className="p-5 bg-sky-50 text-sky-800 rounded-full">
                            <IoBarChart className="text-2xl" />
                        </div>
                        <div>
                            <div className="font-semibold text-color text-2xl">53%</div>
                            <div className="text-sm">Bounce Rate</div>
                        </div>
                    </div>
                    <div className="bg-white p-5 shadow-sm rounded-lg flex items-center justify-between">
                        <div className="p-5 bg-yellow-50 text-yellow-800 rounded-full">
                            <FaUserPlus className="text-2xl" />
                        </div>
                        <div>
                            <div className="font-semibold text-color text-2xl">44</div>
                            <div className="text-sm">User Registrations</div>
                        </div>
                    </div>
                    <div className="bg-white p-5 shadow-sm rounded-lg flex items-center justify-between">
                        <div className="p-5 bg-red-50 text-red-800 rounded-full">
                            <FaChartPie className="text-2xl" />
                        </div>
                        <div>
                            <div className="font-semibold text-color text-2xl">65</div>
                            <div className="text-sm">Unique Visitors</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center bg-violet-600 text-white p-5 rounded-lg">
                            <FaRegFaceSmileBeam className="text-6xl" />
                            <div className="flex-1 ms-5 font-light">
                                <div>Total Visits</div>
                                <div className="text-xl">15,489</div>
                                <div className="relative w-full h-px bg-violet-800 rounded-full my-1">
                                    <div className="absolute bg-white w-2/5 h-px"></div>
                                </div>
                                <div>40% Increase in 28 Days</div>
                            </div>
                        </div>

                        <div className="flex items-center bg-sky-600 text-white p-5 rounded-lg">
                            <FaCloudArrowDown className="text-6xl" />
                            <div className="flex-1 ms-5 font-light">
                                <div>Downloads</div>
                                <div className="text-xl">55,005</div>
                                <div className="relative w-full h-px bg-sky-800 rounded-full my-1">
                                    <div className="absolute bg-white w-3/4 h-px"></div>
                                </div>
                                <div>75% Increase in 28 Days</div>
                            </div>
                        </div>

                        <div className="flex items-center bg-red-600 text-white p-5 rounded-lg">
                            <BsBagCheckFill className="text-6xl" />
                            <div className="flex-1 ms-5 font-light">
                                <div>Total Projects</div>
                                <div className="text-xl">8</div>
                                <div className="relative w-full h-px bg-red-800 rounded-full my-1">
                                    <div className="absolute bg-white w-1/4 h-px"></div>
                                </div>
                                <div>50% Increase in 28 Days</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 bg-white shadow-sm rounded-lg">
                        <div className="p-5">Recent Earnings</div>
                        <div className="p-5 border-t border-gray-300">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="flex items-center">
                                    <div className="p-6 bg-blue-50 text-blue-800 rounded">
                                        <BsFillBarChartLineFill className="text-xl" />
                                    </div>
                                    <div className="ms-6">
                                        <div className="font-light text-2xl">$1,845,104</div>
                                        <div className="font-semibold text-sm">GROSS EARNINGS</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="p-6 bg-purple-50 text-purple-800 rounded">
                                        <BsFillBarChartLineFill className="text-xl" />
                                    </div>
                                    <div className="ms-6">
                                        <div className="font-light text-2xl">
                                            $154,769.<small>50</small>
                                        </div>
                                        <div className="font-semibold text-sm">TAX WITHHELD</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="p-6 bg-red-50 text-red-800 rounded">
                                        <BsFillBarChartLineFill className="text-xl" />
                                    </div>
                                    <div className="ms-6">
                                        <div className="font-light text-2xl">
                                            $1,512,469.<small>50</small>
                                        </div>
                                        <div className="font-semibold text-sm">NET EARNINGS</div>
                                    </div>
                                </div>
                            </div>

                            <table className="w-full mt-3 text-black text-sm">
                                <thead>
                                    <tr>
                                        <th className="p-3 border-y border-gray-300">Date</th>
                                        <th className="p-3 border-y border-gray-300">
                                            Sales Count
                                        </th>
                                        <th className="p-3 border-y border-gray-300">
                                            Gross Earnings
                                        </th>
                                        <th className="p-3 border-y border-gray-300">
                                            Tax Withheld
                                        </th>
                                        <th className="p-3 border-y border-gray-300">
                                            Net Earnings
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="p-3 border-b border-gray-300">03/05/2018</td>
                                        <td className="p-3 border-b border-gray-300">1,050</td>
                                        <td className="p-3 border-b border-gray-300 text-sky-500">
                                            + $32,580.00
                                        </td>
                                        <td className="p-3 border-b border-gray-300 text-red-500">
                                            - $3,023.10
                                        </td>
                                        <td className="p-3 border-b border-gray-300 flex items-center justify-center">
                                            <span>$28,670.90</span>
                                            <small className="ms-2 flex items-center text-green-600">
                                                <FaArrowUp className="text-xs" />
                                                <span>4.5%</span>
                                            </small>
                                        </td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-3 border-b border-gray-300">03/04/2018</td>
                                        <td className="p-3 border-b border-gray-300">980</td>
                                        <td className="p-3 border-b border-gray-300 text-sky-500">
                                            + $30,065.10
                                        </td>
                                        <td className="p-3 border-b border-gray-300 text-red-500">
                                            - $2,780.00
                                        </td>
                                        <td className="p-3 border-b border-gray-300 flex items-center justify-center">
                                            <span>$26,930.40</span>
                                            <small className="ms-2 flex items-center text-red-600">
                                                <FaArrowDown className="text-xs" />
                                                <span>0.8%</span>
                                            </small>
                                        </td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-3 border-b border-gray-300">03/04/2018</td>
                                        <td className="p-3 border-b border-gray-300">980</td>
                                        <td className="p-3 border-b border-gray-300 text-sky-500">
                                            + $30,065.10
                                        </td>
                                        <td className="p-3 border-b border-gray-300 text-red-500">
                                            - $2,780.00
                                        </td>
                                        <td className="p-3 border-b border-gray-300 flex items-center justify-center">
                                            <span>$26,930.40</span>
                                            <small className="ms-2 flex items-center text-red-600">
                                                <FaArrowDown className="text-xs" />
                                                <span>0.8%</span>
                                            </small>
                                        </td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-3 border-b border-gray-300">03/04/2018</td>
                                        <td className="p-3 border-b border-gray-300">980</td>
                                        <td className="p-3 border-b border-gray-300 text-sky-500">
                                            + $30,065.10
                                        </td>
                                        <td className="p-3 border-b border-gray-300 text-red-500">
                                            - $2,780.00
                                        </td>
                                        <td className="p-3 border-b border-gray-300 flex items-center justify-center">
                                            <span>$26,930.40</span>
                                            <small className="ms-2 flex items-center text-red-600">
                                                <FaArrowDown className="text-xs" />
                                                <span>0.8%</span>
                                            </small>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5 bg-white shadow-sm rounded-lg mt-3">
                    <div className="p-5">
                        <div className="font-semibold text-color text-4xl">36</div>
                        <div className="my-4 text-sm">Total amount of registered domains</div>
                        <div className="relative h-2 bg-slate-200 rounded-full">
                            <div className="absolute w-1/2 h-2 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="font-semibold text-color text-4xl">36</div>
                        <div className="my-4 text-sm">Total amount of registered domains</div>
                        <div className="relative h-2 bg-slate-200 rounded-full">
                            <div className="absolute w-1/2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="font-semibold text-color text-4xl">97%</div>
                        <div className="my-4 text-sm">Total amount of used disk space</div>
                        <div className="relative h-2 bg-slate-200 rounded-full">
                            <div className="absolute w-3/4 h-2 bg-red-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="font-semibold text-color text-4xl">05</div>
                        <div className="my-4 text-sm">Total amount of registered email</div>
                        <div className="relative h-2 bg-slate-200 rounded-full">
                            <div className="absolute w-2/3 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="col-span-2 bg-white shadow-sm rounded-lg">
                        <div className="p-5">Patients by Gender</div>
                        <div className="grid grid-cols-3 border-t border-gray-300">
                            <div className="flex flex-col items-center justify-center p-5">
                                <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(red_0_86%,lightgray_86%_100%)]"></div>
                                    <div className="absolute rounded-full inset-2.5 bg-white"></div>
                                    <div className="relative p-8 text-4xl text-red-500 shadow-2xl rounded-full">
                                        86
                                    </div>
                                </div>
                                <div className="mt-5 text-lg text-center">Male</div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-5">
                                <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(yellow_0_70%,lightgray_70%_100%)]"></div>
                                    <div className="absolute rounded-full inset-2.5 bg-white"></div>
                                    <div className="relative p-8 text-4xl text-yellow-500 shadow-2xl rounded-full">
                                        70
                                    </div>
                                </div>
                                <div className="mt-5 text-lg text-center">Female</div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-5">
                                <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(green_0_40%,lightgray_40%_100%)]"></div>
                                    <div className="absolute rounded-full inset-2.5 bg-white"></div>
                                    <div className="relative p-8 text-4xl text-green-500 shadow-2xl rounded-full">
                                        40
                                    </div>
                                </div>
                                <div className="mt-5 text-lg text-center">Other</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg">
                        <div className="p-5">Tools</div>
                        <div className="grid grid-cols-2 border-t border-gray-300">
                            <div className="flex items-center p-5">
                                <div className="bg-purple-600 text-white p-4 rounded-md">
                                    <BsSuitcaseLgFill className="text-xl" />
                                </div>
                                <div className="ms-4">
                                    <div className="font-semibold text-purple-600 cursor-pointer">
                                        Project
                                    </div>
                                    <div className="text-sm text-slate-400">Manager</div>
                                </div>
                            </div>
                            <div className="flex items-center p-5">
                                <div className="bg-red-600 text-white p-4 rounded-md">
                                    <FiEdit className="text-xl" />
                                </div>
                                <div className="ms-4">
                                    <div className="font-semibold text-red-600 cursor-pointer">
                                        Concept
                                    </div>
                                    <div className="text-sm text-slate-400">Director</div>
                                </div>
                            </div>
                            <div className="flex items-center p-5">
                                <div className="bg-green-600 text-white p-4 rounded-md">
                                    <IoMdChatboxes className="text-xl" />
                                </div>
                                <div className="ms-4">
                                    <div className="font-semibold text-green-600 cursor-pointer">
                                        Functional
                                    </div>
                                    <div className="text-sm text-slate-400">Developer</div>
                                </div>
                            </div>
                            <div className="flex items-center p-5">
                                <div className="bg-blue-600 text-white p-4 rounded-md">
                                    <GiBreakingChain className="text-xl" />
                                </div>
                                <div className="ms-4">
                                    <div className="font-semibold text-blue-600 cursor-pointer">
                                        Develop
                                    </div>
                                    <div className="text-sm text-slate-400">DevOps</div>
                                </div>
                            </div>
                            <div className="flex items-center p-5">
                                <div className="bg-yellow-600 text-white p-4 rounded-md">
                                    <FaQrcode className="text-xl" />
                                </div>
                                <div className="ms-4">
                                    <div className="font-semibold text-yellow-600 cursor-pointer">
                                        QR
                                    </div>
                                    <div className="text-sm text-slate-400">Code</div>
                                </div>
                            </div>
                            <div className="flex items-center p-5">
                                <div className="bg-orange-600 text-white p-4 rounded-md">
                                    <FaMusic className="text-xl" />
                                </div>
                                <div className="ms-4">
                                    <div className="font-semibold text-orange-600 cursor-pointer">
                                        Music
                                    </div>
                                    <div className="text-sm text-slate-400">Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MasterPage>
    );
};

export default DashboardPage;
