import React from "react";
import Info from "../components/scrap/Info";
import Slika from "../assets/picture/1275638.jpg";
import TreningSlika from "../assets/picture/treningSlika.png";
import LocationSlika from "../assets/picture/locationSlika.png";
import { Link } from "react-router-dom";
import PlaningSlika from "../assets/picture/plalingSlika.jpg";
import Phone from "../assets/picture/Power Moves - Calendar.png";
import About from "./About";
import { BsArrowRight } from "react-icons/bs";
import ServicesList from "../components/scrap/ServicesList";
import Coach from "./Coach/Coach";
import CoachList from "../components/scrap/CoachList";
import Faq from "../assets/picture/question.png";
import FaqItem from "../components/scrap/FaqItem";
import Alphatest from "../components/scrap/Swiper";
import HeroPhoto from "../assets/picture/slikicaaa.jpg";
import HeroPhoto2 from "../assets/picture/heroPhoto.jpg";
import HeroPhoto3 from "../assets/picture/deadLift.jpg";
import Baner from "../assets/picture/baner.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      {/* hero section */}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className=" container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center  justify-between">
            <motion.div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[62px]  text-heading font-[800] md:text-[60px]">
                  <span className="font-[900] text-[#1c82bd]">
                    {" "}
                    FitTrainer24{" "}
                  </span>{" "}
                  <br /> Best Fitness Trainers in Tuzla.
                </h1>
                <p className="text_paragraph">
                  At FitTrainer24, we are dedicated to your physical health and
                  fitness. Our team of expert fitness trainers in Tuzla is
                  committed to helping you achieve your fitness goals and attain
                  the best results. Whether you're a beginner or an experienced
                  athlete, we provide personalized training and support to help
                  you reach your peak performance.
                </p>
                <Link
                  to={{
                    pathname: "/coach",
                  }}
                >
                  {" "}
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-8 bg-primaryColor    rounded-2xl">
                    Hire a Trainer
                  </button>
                </Link>
                <Info />
              </div>
            </motion.div>
            <div className="flex gap-[30px]  justify-end">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5, delay: 1 }}
              >
                <img className="w-full rounded-3xl" src={HeroPhoto} alt="" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5, delay: 1.5 }}
                className="mt-[30px] "
              >
                <img
                  src={HeroPhoto2}
                  className="w-full mb-[30px] rounded-2xl"
                  alt=""
                />
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1.5, delay: 2 }}
                >
                  <img
                    src={HeroPhoto3}
                    className="w-full  rounded-2xl  "
                    alt=""
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container mt-8 ">
          <div className="lg:w-[470px] mx-auto">
            <h2 className=" heading text-center">
              Offering Top Fitness Coaching
            </h2>
            <p className="  text_paragraph text-center">
              World-class care for everyone. Our trainers provide unparalleled
              expert fitness guidance.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1  md:gird-cols-2 lg:grid-cols-3 gap-5 lg:gap=[30px] mt-[30px] lg:mt-[50px]">
          <div className=" py-[40px] px-5 ">
            <div className="flex item-center justify-center">
              <img src={TreningSlika} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="heading text-[26px] leading-6   text-accentColor font-[700] text-center">
                Personal Training
              </h2>
              <p className="text-[16px] leading-6 text-textColor font-[400] mt-4 text-center">
                Each personalized training session is tailored to your goals and
                needs, ensuring the best results under the careful guidance of
                our experienced trainers.
              </p>
              <Link
                to="/doctor"
                className="w-[44px] h-[44px]   rounded-full border  border-solid border-black mt-[30px] mx-auto flex  items-center justify-center group  hover:bg-primaryColor hover:border-none"
              >
                {" "}
                <BsArrowRight className="group-hover:text-white w-6 h-5 " />{" "}
              </Link>
            </div>
          </div>
          <div className=" py-[30px] px-5 ">
            <div className="flex item-center justify-center">
              <img src={LocationSlika} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="heading text-[26px] leading-6   text-accentColor font-[700] text-center">
                Location
              </h2>
              <p className="text-[16px] leading-6 text-textColor font-[400] mt-4 text-center">
                Discover the ideal workout locations with our fitness trainers,
                tailored to your preferences and convenience. Whether it's a
                local gym, park, or even your own home, we'll find the perfect
                spot for your fitness journey.
              </p>
              <Link
                to="/doctor"
                className="w-[44px] h-[44px]   rounded-full border  border-solid border-black mt-[30px] mx-auto flex  items-center justify-center group  hover:bg-primaryColor hover:border-none"
              >
                {" "}
                <BsArrowRight className="group-hover:text-white w-6 h-5 " />{" "}
              </Link>
            </div>
          </div>
          <div className=" py-[30px] px-5 ">
            <div className="flex item-center justify-center">
              <img src={Phone} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="heading text-[26px] leading-6   text-accentColor font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text-[16px] leading-6 text-textColor font-[400] mt-4 text-center">
                Book your appointment with our expert fitness trainers and take
                the first step towards a healthier you. Get started on your
                fitness journey today!
              </p>
              <Link
                to="/doctor"
                className="w-[44px] h-[44px]   rounded-full border  border-solid border-black mt-[30px] mx-auto flex  items-center justify-center group  hover:bg-primaryColor hover:border-none"
              >
                {" "}
                <BsArrowRight className="group-hover:text-white w-6 h-5 " />{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/*   services */}
      <section className="">
        <div className="container">
          <div className="xl:w-[470px]  mx-auto">
            <h2 className="heading  text-center mt-20">
              Empowering Your Fitness Journey Online
            </h2>
            <p className=" text_paragraph text-center">
              Join our virtual fitness community and transform your workouts.
              Discover personalized training, connect with expert trainers, and
              book with ease. Reimagine fitness, online.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/* best trainer */}
      <section className="">
        <div className="container">
          <div className="xl:w-[470px]  mx-auto">
            <h2 className="heading  text-center mt-20">Our best Trainers</h2>
            <p className=" text_paragraph text-center">
              Meet our exceptional trainers who are dedicated to helping you
              achieve your fitness goals. Their expertise and commitment make
              them the best in the business.
            </p>
          </div>
          <CoachList />
        </div>
      </section>
      <section className="">
        <div className="container mt-10  ">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className=" w-1/2  hidden md:block">
              <img className="   w-auto  " src={Faq} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading text-center">
                Frequently Asked Questions
              </h2>
              <FaqItem />
            </div>
          </div>
        </div>
      </section>
      <Alphatest />
      <section></section>
    </>
  );
};

export default Home;
