import { memo } from "react";
import { motion } from "framer-motion";
import Time from "src/components/time";
import BottomNav from "src/components/layout/bottomNav";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  const date = new Date();
  const hours = date.getHours();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col text-center h-screen justify-center items-center gap-3 px-6">
        <motion.div
          className="flex justify-center items-center flex-col"
          transition={{ duration: 0.5 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Sedikit catatan 
           -> buat nampilin waktu pagi, siang, sore, dan malam
                - jika hours >= 12 dan hours < 15, maka yang ditampilkan siang
                - jika hours >= 15 dan hours < 18, maka yang ditampilkan sore
                - jika hours >= 18 dan hours < 0, maka yang ditampilkan malam
                - setelah itu atau selain itu, akan menampilkan pagi
        */}
          <Image
            src="/img/home.png"
            width="100px"
            height="100px"
            alt="Home Page"
          />
          <div className="mt-3 flex flex-col justify-center items-center text-center">
            <h1 className="sm:text-4xl text-3xl font-bold">{`Selamat ${
              hours >= 12 && hours < 15
                ? "Siang"
                : hours >= 15 && hours < 18
                ? "Sore"
                : hours >= 18 && hours < 24
                ? "Malam"
                : "Pagi"
            }`}</h1>
            <p className="text-lg md:text-xl font-medium">
              &#34;Jangan sampai tertundanya karunia Tuhan kepadamu, setelah kau mengulang-ulang doamu, membuatmu putus asa. Karena Dia menjamin pengabulan doa sesuai pilihan-Nya, bukan sesuai pilihanmu; pada waktu yang diinginkan-Nya, bukan pada waktu yang kau inginkan. – Ibnu Athaillah&#34;
            </p>
            <Time />
          </div>
        </motion.div>
        <BottomNav />
      </div>
    </>
  );
};

export default memo(Home);
