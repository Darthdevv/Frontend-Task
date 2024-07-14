import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {  motion } from "framer-motion";

const Home = () => {
  return (
    <main className=" bg-[#0F1218] min-h-screen">
      <div className="text-start max-sm:flex max-sm:items-center max-sm:justify-center">
        <motion.div
          className="max-w-[950px]"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white">
            Frontend Task for managing customers their transactions
          </h1>
          <p className="py-6 text-xl">
            Meet all customers and their transactions , filter either by name or
            amount, select one and their data are displayed on a chart created
            using react, tailwindcss, daisyUi
          </p>
          <Link to={"/customers"}>
            <button aria-label="button for seeing all transactions" className="btn btn-primary mr-2">
              See All Transactions <MdOutlineKeyboardArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
