import { motion, scale } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 3, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-[40px] border-blue-600 border-s-8 border-b-8 rounded-br-[40px] shadow-2xl "
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, delay: 1, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-[40px] border-blue-600 border-s-8 border-b-8 rounded-br-[40px] shadow-2xl "
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{
              rotate: [0, 360, 0],
              transition: { duration: 10, repeat: Infinity },
            }}
            className="text-5xl font-bold"
          >
            Latest jobs for you
          </motion.h1> */}

          <motion.h1
            className="text-5xl font-bold"
            animate={{
              scale: [0, 1, 0],
              transition: { duration: 4, repeat: Infinity },
            }}
          >
            Remote{" "}
            <motion.span
              animate={{
                color: [
                  "#FF5733",
                  "#33C1FF",
                  "#75FF33",
                  "#FF33F6",
                  "#FFC300",
                  "#8D33FF",
                  "#33FFBD",
                ],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              jobs{" "}
            </motion.span>{" "}
            for you
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
