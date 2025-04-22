import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
function focusInp() {
  const cont = document.getElementById("cont");
  cont.style.backgroundColor = "rgb(8, 8, 8)";
}

function notFocusInp() {
  const cont = document.getElementById("cont");
  cont.style.backgroundColor = "rgb(15, 17, 18)";
}

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[url('https://cloud-4ze8a6fmk-hack-club-bot.vercel.app/0bg.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Hero Section */}
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <div className="custom-outline">Hacklumina'25</div>
        </div>
      </div>

      {/* Next Section */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-4xl text-white">Hello</p>
      </div>
    </div>
  );
};

export default Home;
