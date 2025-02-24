import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            in placeat a nobis molestias excepturi nesciunt expedita rerum ad
            labore vitae quo ducimus eos, est odit harum? Ipsum, soluta placeat.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quaerat veniam, explicabo repudiandae corporis error tempore
            officiis minima inventore dicta modi, laborum quibusdam, obcaecati
            enim.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In hic
            atque et delectus velit repellat quia eligendi provident sequi
            maxime vitae, cum labore fugit voluptatum porro error, illo enim
            impedit non. Doloremque modi reiciendis sint ea, assumenda nostrum
            debitis facilis.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            deleniti veritatis dolorem magni consequuntur quas repellat, commodi
            quae? Minus corporis ut sunt eius ab ipsum quasi quod voluptate
            consequatur in.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Convevience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            deleniti veritatis dolorem magni consequuntur quas repellat, commodi
            quae? Minus corporis ut sunt eius ab ipsum quasi quod voluptate
            consequatur in.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            deleniti veritatis dolorem magni consequuntur quas repellat, commodi
            quae? Minus corporis ut sunt eius ab ipsum quasi quod voluptate
            consequatur in.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
