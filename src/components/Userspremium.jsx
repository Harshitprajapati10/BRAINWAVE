
import Mainusers from "./Mainusers";
import { useState } from "react";
import { users } from "../constants/users";
import Heading from "./Heading";
import Button from "./Button";

const Userspremium = () => {
  const [Id, setId] = useState(0)

  const handleNext = () => {
    setId(prevId => (prevId + 1) % users.length);
  };
  const handlePrevious = () => {
    setId(prevId => (prevId - 1 + users.length) % users.length);
  };

  return (<>
    <div className="container md:pb-10">
      <Heading tag="Join our" title="Team" /></div>
    <div className="relative container flex justify-around">
      <button onClick={handlePrevious} className="absolute text-5xl lg:text-7xl left-[3px] lg:left-[100px] top-[163px] lg:top-[133px]">&lt;</button>
      <Mainusers Id={Id} user={users[Id]} />
      <button onClick={handleNext} className="absolute text-5xl lg:text-7xl right-[3px] lg:right-[100px] top-[163px] lg:top-[133px]">&gt;</button>
    </div>
    <div className="flex justify-center mt-12 md:mt-15 xl:mt-20 mb-3">
        <Button href="https://forms.gle/Jy5xHtwzDAfckFUx6">Work for us</Button>
      </div>
  </>
  )
};

export default Userspremium;
