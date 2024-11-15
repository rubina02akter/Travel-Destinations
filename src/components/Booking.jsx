import backgroundImage from "../assets/Rectangle 1.png";

const Booking = () => {
  return (
    <div
    className="relative h-[600px] bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative  text-white">
   {/* main content */}

   <div>
   <h2 className="text-bold font-bold text-5xl">Cox's bazar</h2>
   <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
   </div>
  

    </div>
  </div>
);
};

export default Booking;