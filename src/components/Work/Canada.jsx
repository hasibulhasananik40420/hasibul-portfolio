import Image from "next/image";
import client1 from "@/assets/client1.png";
import client2 from "@/assets/client2.png";
import client3 from "@/assets/client3.png";
import client4 from "@/assets/client4.png";
import client5 from "@/assets/client5.png";
import client6 from "@/assets/client6.png";


const Canada = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Image
      className="lg:w-[300px] w-full h-[280px]"
      placeholder="blur"
      src={client1}
      alt="work image"
    />
    <Image
      className="lg:w-[300px] w-full h-[280px]"
      placeholder="blur"
      src={client4}
      alt="work image"
    />
    <Image
      className="lg:w-[300px] w-full h-[280px]"
      placeholder="blur"
      src={client2}
      alt="work image"
    />
    <Image
      className="lg:w-[300px] w-full h-[280px]"
      placeholder="blur"
      src={client6}
      alt="work image"
    />  
    <Image
      className="lg:w-[300px] w-full h-[280px]"
      placeholder="blur"
      src={client3}
      alt="work image"
    /> 
     <Image
      className="lg:w-[300px] w-full h-[280px]"
      placeholder="blur"
      src={client1}
      alt="work image"
    />
  </div>
  )
}

export default Canada