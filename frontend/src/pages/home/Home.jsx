import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <main className=" bg-[#0F1218] min-h-screen">
      <div className="text-start max-sm:flex max-sm:items-center max-sm:justify-center">
        <div className="max-w-[950px]">
          <h1 className="text-5xl font-bold text-white">
            Frontend Task for managing customers their transactions
          </h1>
          <p className="py-6 text-xl">
            Meet all customers and their transactions , filter either by name or amount, select one and their data are displayed on a chart created using react, tailwindcss, daisyUi
          </p>
          <Link to={'/customers'}>
            <button className="btn btn-primary mr-2">
              See All Transactions <MdOutlineKeyboardArrowRight/>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home