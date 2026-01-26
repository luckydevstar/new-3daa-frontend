import { Button } from "@/components/ui/button"

const AboutIntro = () => {
    return (
        <div className="max-w-7xl mx-auto -mt-32">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-white">
                    3DAA Card
                </h2>
                <img src={"/images/cards/3daa-card.png"} className="max-w-135 -mb-16 -mt-30" />
            </div>

            <h2 className="text-4xl text-center text-primaryMain font-bold">
                Become a member and gain access to everything 3DAA
            </h2>

            <h2 className="text-4xl text-center text-black mt-2 font-bold">
                This 3DAA Card is availabe for members only
            </h2>

            <div className="flex gap-16 items-center -mt-10">
                <img src={"/images/cards/3daa-card.png"} className="max-w-125" />

                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold text-primaryMain">
                        The No.1 Card for the 3D Architectural Industry!
                    </h2>

                    <p className="text-xl text-black">
                        The 3D Architectural Academy card serves as proof that individuals are members of the 3DAA Community.
                        It is a way of verifying an individual has had the highest level training, being able to see what skills,
                        software and digital badges they have under their belt, as well as way to view their profile, progress and portfolio.
                    </p>

                    <Button className="bg-[#FFBD48] text-sm font-semibold text-black px-8 py-3 w-min h-11">
                        Become a member
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro;
