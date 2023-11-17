import icon from "../assets/icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-bk-blue py-8">
      <div className="container flex flex-col md:flex-row items-center ">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img width={40} className="rounded-md" src={icon} alt="" />
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <ul className="flex gap-10 mt-12 md:mt-0">
          <li>
            <i className="text-white text-2xl fab fa-twitter"></i>
          </li>
          <li>
            <i className="text-white text-2xl fab fa-facebook-square"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
