"use client";
import Summary from "./Summary";
import Packet from "./Packet";

// Component to render the custom packet page that contains the packet and summary components.
export default function CustomPacket() {
  return (
    <div className="container mx-auto sm:w-[72rem] pt-10 pb-24 ">
      <div className="m-7  flex flex-col lg:flex-row">
        <Packet />
        <Summary />
      </div>
    </div>
  );
}
