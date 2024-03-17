import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavBarComponent() {
  return (
    <div>
      <Navbar fluid className="bg-blue-900 sticky z-50">
        <NavbarBrand href="https://istad.co/">
          <img
            src="https://istad.co/resources/img/CSTAD_120.png"
            className="mr-3 h-6 sm:h-9"
          />
          <span className="self-center whitespace-nowrap text-2xl font-bold text-white tracking-widest">
            CSTAD
          </span>
        </NavbarBrand>
        <div className="flex md:order-2 items-center">
          {" "}
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" active className="text-white font-semibold">
            Home
          </NavbarLink>
          <NavbarLink href="/enroll/" className="text-white font-semibold">
            Enroll
          </NavbarLink>
          <NavbarLink href="/course/" className="text-white font-semibold">
            Course
          </NavbarLink>
          <NavbarLink href="/itnews/" className="text-white font-semibold">
            IT News
          </NavbarLink>
          <NavbarLink
            href="/jobopportunity/"
            className="text-white font-semibold"
          >
            Job Opportunity
          </NavbarLink>
          <NavbarLink href="/about/" className="text-white font-semibold">
            About Us
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
