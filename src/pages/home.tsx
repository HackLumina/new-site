import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye,EyeClosed } from "lucide-react";
import { useState } from "react";
function focusInp(){
const cont = document.getElementById("cont");
cont.style.backgroundColor = "rgb(8, 8, 8)"
}
function notFocusInp(){
const cont = document.getElementById("cont");
cont.style.backgroundColor = "rgb(15, 17, 18)"

}

const Home = () => {

    return(
<div className="w-full min-h-screen flex items-center justify-center bg-[url('https://cloud-4ze8a6fmk-hack-club-bot.vercel.app/0bg.jpeg')] bg-cover bg-center bg-no-repeat">
  <div className="text-white text-6xl"><h1 className="custom-outline">Hacklumina'25</h1></div>
</div>



    );
}
export default Home;