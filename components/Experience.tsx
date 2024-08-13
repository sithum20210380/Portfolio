import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="flex flex-col gap-10">
        <div className=" container mx-auto 2xl ">
          <div className="md:flex md:flex-row md:justify-between pt-5">
            <div className="flex items-center gap-3">
              <Image
                src={"/slasscom.png"}
                height={30}
                width={30}
                alt={"experience"}
              />
              <p className="text-gray-300 ">
                <span className="font-semibold">SLASSCOM /</span> Software Developer
              </p>
            </div>
            <p className="text-gray-300 md:pt-0 pt-3">
              Nov 2023 - Present, Colombo Sri Lanka
            </p>
          </div>

          <p className="text-gray-300 pt-5 text-justify">
            Worked on a project called Bridge-Platform. Worked closely with the team to plan and
            execute the migration of data from legacy systems to new platforms. Ensured data integrity
            and accuracy throughout the migration process by utilizing best practices and effective data
            validation techniques.
            <br />
            <br />
            Leveraged Azure, Typescript, CosmosDB, Docker as the primary technology stack
          </p>
          <div className="flex-col flex sm:flex-row ">
            <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              Azure
            </div>
            <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              Typescript
            </div>
            <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              CosmosDB
            </div>
            <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              Docker
            </div>
          </div>
        </div>

        <div className=" container mx-auto 2xl ">
          <div className="md:flex md:flex-row md:justify-between pt-5">
            <div className="flex items-center gap-3">
              <Image
                src={"/99x.png"}
                height={30}
                width={30}
                alt={"experience"}
              />
              <p className="text-gray-300 ">
                <span className="font-semibold">99X /</span> Trainee Software Engineer
              </p>
            </div>
            <p className="text-gray-300 md:pt-0 pt-3">
              Jul 2023 - Jul 2024, Colombo Sri Lanka
            </p>
          </div>

          <p className="text-gray-300 pt-5 text-justify">
            Worked on both web and mobile versions of the company's internal employment managment
            system. For the web application, utilized React.js to create a dynamic and responsive user
            interface. For the mobile application, leveraged React Native to ensure seamless
            performance and user experience across different devices.
            <br />
            <br />
            Leveraged AWS, S3, DynmoDB, Lambda, Serverless, AmazonCognito, ReactJS, ReactNative,
            NodeJS as the primary technology stack
          </p>
          <div className="flex-col flex sm:flex-row ">
            <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              ReactJS
            </div>
            <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              ReactNative
            </div>
            <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              AWS
            </div>
            <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              Serverless
            </div>
            <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
              NodeJS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
