

const Hero = () => {


    return (
        <div className="w-full flex flex-col items-center justify-center gap-2 my-5 md:my-20 px-10 md:mx-0">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10 py-10">

                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance dark:text-violet-400">
                        Are you out of ideas to cook?
                    </h1>

                    <p className="text-lg dark:text-white">
                        Get new recipe ideas powered by AI, based on what you already have.
                    </p>
                </div>

                <div className="w-1/2">
                    <img
                        src="/header.jpg"
                        alt="Cook with VR glasses"
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero
