
const Banner = () => {
    return (
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <div className="-z-10 opacity-10 h-[110vh] absolute">
                <img className="h-[100%] w-full" src="https://i.ibb.co/fFymVY1/Rectangle-4281.png)" />
            </div>
            <div className="absolute flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold">I Grow By Helping People In Need</h2>
                <div className="my-10">
                    <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Banner;