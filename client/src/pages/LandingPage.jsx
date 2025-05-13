import {Link} from 'react-router'
const LandingPage = () => {


  return (
    <>

      <div
        className="w-screen h-screen relative flex flex-col"
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/charming-sweet-puppy-chocolate-color-close-up-indoors-day-light-concept-care-education-obedience-training-raising-pets_78967-3549.jpg?w=900)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-end mr-3 pt-2 ">
          <Link to={'/login'} className="bg-blue-500 p-2 text-white rounded-sm font-light lg:font-semibold hover:bg-blue-600 cursor-pointer">Signup</Link>
        </div>
        <div className="flex justify-center items-center flex-grow-1">
          <p className="text-white text-4xl font-semibold relative inline-block group">

            <span className="text-blue-500 font-bold text-5xl lg:text-9xl uppercase"><span className="text-4xl lg:text-8xl text-white">Pet</span>Rentals</span>

            {/* Underline for both elements */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </p>

        </div>
      </div>

    </>
  );
};

export default LandingPage;
