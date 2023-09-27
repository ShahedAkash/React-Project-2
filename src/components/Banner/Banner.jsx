
const Banner = () => {
    return (
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <div className="-z-10 opacity-10 h-[100vh] -mt-12 absolute">
                <img className="h-[100%] w-full" src="https://i.ibb.co/fFymVY1/Rectangle-4281.png)" />
            </div>
            <div className="absolute flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">I Grow By Helping People In Need</h2>

                <div className="my-10 flex">
                    <input type="text" placeholder="Search here....." className="input input-bordered input-md w-full max-w-xs rounded-r-none" />
                    <button className="btn bg-red-500 text-white rounded-l-none border-red-500">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;