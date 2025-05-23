import type React from "react"
import Image from "next/image"
import Link from "next/link"

const Credentials: React.FC<{}> = () => {
  const awsBadges = [
    {
      id: 1,
      title: "AWS Knowledge: Cloud Essentials",
      image: "/CloudEssentials.png",
      issueDate: "June 2024",
      link: "https://www.credly.com/badges/acdf718e-37ed-4bff-85bb-cb02f86e7ba0/linked_in_profile",
    },
    {
      id: 2,
      title: "AWS Knowledge: Serverless",
      image: "/Serverless.png",
      issueDate: "June 2024",
      link: "https://www.credly.com/badges/96cfd50b-f509-4e1f-a694-75b8db7a03bd/linked_in_profile",
    }
  ]

  return (
    <section id="credentials">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">CREDENTIALS</h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {awsBadges.map((badge) => (
            <Link key={badge.id} href={badge.link} rel="noopener noreferrer" target="_blank" className="z-[1]">
              <div className="flex flex-col items-center bg-[#1a1a1a] p-6 rounded-xl w-[280px] transition-transform hover:scale-105">
                <Image
                  src={badge.image || "/placeholder.svg"}
                  height={150}
                  width={150}
                  alt={badge.title}
                  className="mb-4"
                />
                <h3 className="text-white text-center font-semibold text-lg mb-2">{badge.title}</h3>
                <p className="text-gray-400 text-sm">Issued: {badge.issueDate}</p>
                <div className="mt-4 bg-gradient-to-r from-purple-700 to-orange-500 px-4 py-2 rounded-full text-white text-sm">
                  View Credential
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credentials
