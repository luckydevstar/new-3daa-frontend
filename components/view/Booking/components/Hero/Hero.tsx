const BookingHero = () => {
    return (
        <div className="min-h-screen bg-cover! bg-center bg-no-repeat" style={{background: "url('/images/booking-bg.jpg')"}}>
            <div className="py-30 px-20 bg-black/70 min-h-screen">
                <div className="flex flex-col items-center">
                    <h2 className="text-6xl text-center">
                        <span className="text-white font-bold">
                            Still Renders
                        </span>
                        <br />
                        <div className="text-primaryMain flex items-center font-bold mt-6 mb-12">
                            <span>with 3DS Max</span>
                            <img src="/images/3dsmax.png" className="w-14 h-14 mx-2" />
                            <span>& Chaos Corona</span>
                            <img src="/images/corona.png" className="w-14 h-14 mx-2" />
                        </div>
                    </h2>

                    <p className="text-white text-lg px-20 text-center max-w-3xl">
                        Be part of a thriving learning community, build high-value skills, and advance your career. 
                        All from the comfort of your own home
                    </p>

                    <button className="text-white bg-primaryMain w-48 py-3 rounded-sm mt-12 font-semibold cursor-pointer">
                        ENROLL NOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingHero;