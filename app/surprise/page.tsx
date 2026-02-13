"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const photos = [
  { image: "/1.jpg", caption: "These Random Click we have💖" },
  { image: "/2.jpg", caption: "Boss Lady 😍" },
  { image: "/skull.jpg", caption: "Harshi and Her Forever 💕" },
  { image: "/mirror.jpg", caption: "Wowwwwwwww Princess💘" },
  { image: "/3.jpg", caption: "Those Few Photos without gym attire 💖" },
  { image: "/4.jpg", caption: "Some Clicks..........Just Perfect 😍" },
  { image: "/charm.jpg", caption: "Definitely a Lucky Charm 💕" },
  { image: "/cute.jpg", caption: "I Never knew these teasing would be this funnn💘" },
  { image: "/5.jpg", caption: "She will drop the cutest picc.. with this caption" },
  { image: "/6.jpg", caption: "Absolutely Cuteeeeeeeee😍" },
  { image: "/7.jpg", caption: "This one is my fav... Alexa Play Pardesi Girl😍" },
  { image: "/8.jpg", caption: "And She is Smart ... Beauty and Brain😍" },
  { image: "/9.jpg", caption: "Waiting to get these pics was soo worth it" },
  { image: "/10.jpg", caption: "Always got your back ..CHAMP😍" },
  { image: "/11.jpg", caption: "Laughter .. Giggle and Memories 😍" },
  { image: "/12.jpg", caption: "From just known to here.. Cant believe we actually talked just last year 😍" },
  { image: "/13.jpg", caption: "I promise wont leave any chance to tease you too" },
  { image: "/14.jpg", caption: "The pics arent just enough to tell..." },
  { image: "/15.jpg", caption: "Cheers Harshi... so many things happened, soo much more" },
  { image: "/16.jpg", caption: "My fav Tea Partner 😍" },
];

export default function Surprise() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-10 py-12">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">
          Our Story 💖
        </h1>

        <button
          onClick={() => router.back()}
          className="text-lg bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Back
        </button>
      </div>

      {/* Album */}
      <div className="flex flex-wrap justify-center gap-10">
        {photos.map((photo, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              layout
              onClick={() => handleClick(index)}
              className="relative cursor-pointer"
              animate={{
                scale: isActive ? 1.7 : 1,
                zIndex: isActive ? 20 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative w-[170px] aspect-[9/16] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={photo.image}
                  alt="memory"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Caption appears ONLY when active */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-black/85 p-4 rounded-b-2xl"
                >
                  <p className="text-sm text-center">
                    {photo.caption}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

    </main>
  );
}
