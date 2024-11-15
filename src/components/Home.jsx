import backgroundImage from "../assets/Rectangle 1.png";
import SimpleImageSlider from "react-simple-image-slider";
import images1 from '../assets/Rectangle 1.png';
import images2 from '../assets/Sajek.png'
import images3 from '../assets/Sreemongol.png'
import images4 from '../assets/sundorbon.png'



const Home = () => {
  const images = [
    { url: images1 },
    { url: images2 },
    { url: images3 },
    { url: images4 }
  ];
  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex text-white justify-between items-center">
     {/* main content */}

     <div className="w-1/2 ml-24">
     <h2 className="text-bold font-bold text-5xl">Cox's bazar</h2>
     <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
     </div>
     
     <div className="mr-24 mt-24 ml-40 ">
     <SimpleImageSlider
        width={300}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}             
        autoPlayDelay={0.8}          
        style={{ borderRadius: "20px" }}
        className="rounded-lg" 
      />
     </div>

      </div>
    </div>
  );
};

export default Home;
