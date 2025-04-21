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
<div className="w-full h-full flex items-center justify-center">
  <div >

  </div>
</div>


    );
}
export default Home;