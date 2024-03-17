import CardCourseComponent from "@/components/CardCourseComponent";
import CarouselComponent from "@/components/CarouselComponent";
import FooterComponent from "@/components/FooterComponent";
import CardComponentIi from "@/components/itnewsObject";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <CarouselComponent />
      <div>
        <p className="text-[28px] text-black font-bold pl-36 mb-0 mt-10">
          COURSES
        </p>
        <CardCourseComponent />
        <p className="text-[28px] text-black font-bold pl-36 mt-10">
          USEFUL CONTENTS
        </p>
        <div className="mb-10">
          <CardComponentIi/>
        </div>
      </div>
    </div>
  );
}
