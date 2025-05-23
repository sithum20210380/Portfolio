import Image from "next/image"
import Link from "next/link"
import type React from "react"

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">PROJECTS</h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://github.com/sithum20210380/Intern-Managment-SR"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src="/FirstProject.png" height={150} width={150} alt="First Project" />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Xternship</p>
                <p className="text-gray-500 text-[10px]">
                  Developed this web-based application to streamline the process of managing internships within an
                  organization.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/sithum20210380/weatherApp"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src="/SecondProject.png" height={150} width={150} alt="HireSide" />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Weather App for IOS</p>
                <p className="text-gray-500 text-[10px]">
                  Developed an iOS app that provides real-time weather updates, utilizing the OpenWeather API for
                  accurate information.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://github.com/sithum20210380/Meal-Buddy"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src="/ThirdProject.png" height={150} width={150} alt="VergeSystems" />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">MealBuddy</p>
                <p className="text-gray-500 text-[10px]">
                  Developed this mobile application with kotlin and SQLite to generate food recipes for any kind of user
                  needs.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/sithum20210380/ICONS-FINAL"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src="/FourProject.png" height={150} width={150} alt="Payoasis" />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Patient 360</p>
                <p className="text-gray-500 text-[10px]">
                  Developed this multimodal depression detection system for early and acurate identification of
                  depressive symptoms.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://github.com/sithum20210380/blockchain-wallet"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src="/blockchain-wallet.png" height={150} width={150} alt="Blockchain Wallet" />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">Blockchain Wallet</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a secure blockchain wallet application that allows users to manage their crypto assets,
                  perform transactions, and track their portfolio.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/sithum20210380/banking-app"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src="/banking-app.png" height={150} width={150} alt="Banking App" />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Mobile Banking App</p>
                <p className="text-gray-500 text-[10px]">
                  Created a mobile banking application with React Native that provides users with a seamless experience
                  for managing accounts, transferring funds, and paying bills.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
