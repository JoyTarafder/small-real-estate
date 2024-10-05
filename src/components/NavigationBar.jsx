import Button from "./Button";
import { Fragment } from 'react';

export default function Navbar() {
  return (
    <Fragment className="bg-sky-600">
        <nav className="bg-sky-600 ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
            <div className="flex items-center space-x-4">
            <a href="#" className="text-2xl font-bold text-black">
                Logo
            </a>
            <ul className="flex space-x-4">
                <li>
                <a href="#" className="text-black hover:opacity-70">
                    Home
                </a>
                </li>
                <li>
                <a href="#" className="text-black hover:opacity-70">
                    About
                </a>
                </li>
                <li>
                <a href="#" className="text-black hover:opacity-70">
                    Services
                </a>
                </li>
                <li>
                <a href="#" className="text-black hover:opacity-70">
                    Contact
                </a>
                </li>
            </ul>
            </div>
            <div>
            <Button buttonName="Sign Up" bgColor="bg-red-500" />
            </div>
        </nav>
    </Fragment>
  );
}
