import Link from "./link";
import Github from "./github";
import Img from "./img";
const Footer = () =>{
    return(<div className="h-36 w-full flex flex-col shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100 custom-section-border">
        <div className="flex flex-row gap-6 justify-center">
        <p>HackLumina</p>
        <p></p>
        </div>
        <p className="pr-4 pl-4 text-[0.7rem] break-normal absolute">This site is open-sourced here! <br></br> Shoot an email to Manan if you have any issues.</p>
    </div>);
}

export default Footer;