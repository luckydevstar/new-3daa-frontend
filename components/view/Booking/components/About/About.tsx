const About = () => {
    return (
        <div className="max-w-7xl mx-auto py-24">
            <div className="grid grid-cols-2 gap-12">
                <div className="col-span-1 min-h-150 relative">
                    <img src={"/images/works/work-sample-1.jpg"} className="absolute left-0 top-0 max-w-100 h-auto rounded-md" />
                    <img src={"/images/works/work-sample-2.jpg"} className="absolute right-0 bottom-0 max-w-90 h-auth rounded-md" />
                </div>

                <div className="col-span-1 flex flex-col">
                    <h2 className="font-bold text-primaryMain text-6xl">About</h2>
                    <p className="text-lg text-black mt-4">
                        This fully online, self-paced Still 3D Architectural Visualizsation course takes learners from beginner to professional level.
                        You' will develop the skills to create top-tier photorealistic renders using inustry standard tools and techniques. The course is accessible from aynwhere and covers the complete workflow,
                        from basic modelling to advanced lighting, materials, and rendering, using Audodesk 3ds Maxa and Chaos Corona.
                    </p>

                    <p className="text-lg text-black mt-5">
                        We offer two enrolment options: you can either pay for the course directly or apply for funding. To apply funding, simply complete our aplication form. Once submitted, we'll review you application and contact
                        you to let you know whether you're eligible.
                    </p>

                    <div className="flex gap-20 mt-16">
                        <div className="flex flex-col gap-3">
                            <h5 className="text-black text-base">software</h5>
                            <div className="flex gap-2">
                                <img src="/images/3dsmax.png" className="h-10 w-auto" />
                                <img src={"/images/corona.png"} className="h-10 w-auto" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h5 className="text-black text-base">Units</h5>
                            <h3 className="text-3xl font-bold text-primaryMain">6</h3>
                        </div>
                        <div className="flex flex-col gap-3 text-base">
                            <h5 className="text-black">Video tutorials</h5>
                            <h3 className="text-3xl font-bold text-primaryMain">90+</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
