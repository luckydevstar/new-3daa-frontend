import { ArrowRight } from "lucide-react";

const AboutHero = () => {
    return (
        <div className="bg-cover bg-center" style={{backgroundImage: "url(/images/about-bg.jpg)"}}>
            <div className="bg-primaryMain/90 min-h-[90vh]">
                <div className="max-w-7xl mx-auto pt-16 pb-12">
                    <div className="flex justify-end">
                        <div className="flex px-4 py-2 items-center text-white border rounded-sm w-28 justify-between cursor-pointer">
                            <span>Pricing</span>
                            <ArrowRight />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-white text-5xl font-bold">About 3DAA</h2>
                        <p className="text-white text-xl">
                            Join the 3D Architectural Academy - Your Passport to Success!
                        </p>
                        <p className="text-white text-xl">
                            Looking to break into the architectural industry or take your skills to the next level? Our online membership
                            gives you everything you need - industry-recognised courses aligned with what the best in the business
                            are looking for, real work experience, and a direct pathway to high-level job opportunities.
                        </p>
                        <p className="text-white text-xl">
                            With mentors and real professionals offering hands-on advice and guidance, you're never alone. Our
                            courses also come with direct access to tutors, just like being in a real classroom, so you can get the
                            support you need whenever you need it.
                        </p>
                        <p className="text-white text-xl">
                            As a member, you'll earn an arsenal of digital badges and industry-recognised accreditations, proving your
                            skills and making your portfolio pop. You'll also get access to exclusive events and a thriving social
                            network, perfecdt for students who are already studying a degree and want to say ahead of the
                            competition.
                        </p>
                        <p className="text-white text-xl">
                            Build your future, stand out, and start your journey today - Join 3DAA now!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero;
