import { Logo } from "../assets/svg/svg";
import Button, { Button3 } from "./Button";

export default function Navbar() {
  return (
    <>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <a
                href="index.html"
                className="navbar-logo block w-60 max-w-full px-4 "
              >
                <Logo />
              </a>

              <ul className="hidden lg:flex ">
                <li className="group relative">
                  <Button3 buttonName="Home" />
                </li>
                <li className="group relative">
                  <Button3 buttonName="About" />
                </li>
                <li className="group relative">
                  <Button3 buttonName="Pricing" />
                </li>

                <li className="group relative">
                  <Button3 buttonName="Blog" />
                </li>
              </ul>

              <div className="sm:flex">
                <div className="mx-4">
                  <Button3 buttonName="Sign In" />
                </div>

                <Button buttonName="Sign Up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
