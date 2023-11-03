import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="font-bold text-base">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Accessories</Link>
          </FooterList>

          <FooterList>
            <h3 className="font-bold text-base">Customer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQS</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-bold text-base mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatum aut odio,
              aspernatur sint odit harum natus dolorum, est porro eveniet nostrum reiciendis
              explicabo illum doloribus magnam maxime repellat provident.
            </p>
            <span>&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.</span>
          </div>

          <FooterList>
            <h3 className="font-bold text-base">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full p-1.5 text-slate-700 bg-slate-200 flex items-center justify-center"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="#"
                className="rounded-full p-1.5 text-slate-700 bg-slate-200 flex items-center justify-center"
              >
                <FaTwitter size={16} />
              </Link>
              <Link
                href="#"
                className="rounded-full p-1.5 text-slate-700 bg-slate-200 flex items-center justify-center"
              >
                <RiInstagramFill size={16} />
              </Link>
              <Link
                href="#"
                className="rounded-full p-1.5 text-slate-700 bg-slate-200 flex items-center justify-center"
              >
                <FaYoutube size={16} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
