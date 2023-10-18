import ServicesList from "../components/scrap/ServicesList";
const Services = () => {
  return (
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
  );
};

export default Services;
