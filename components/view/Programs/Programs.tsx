import { CourseCard } from "@/components/partial";

const ProgramsView = () => {
    const courses = [
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: false,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            time: "Est full time",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
        {
            title: "Still Renders",
            subtitle: "Training Programme",
            descripton: "This self-paced online 3D still renders course takes you from begineer to professional level, teaching you how to create photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, from modelling to advanced lighting, materials, and rendering.",
            badges: [],
            type: "100% self paced",
            duration: "Est full time, Duration: 9 weeks",
            coverImage: "/images/courses/course-sample.png",
            isComingSoon: true,
        },
    ]

    return (
        <div className="pt-15 pb-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl text-center mb-32">
                    <span className="text-balck font-bold">Enrole Now</span> <br />
                    <span className="text-primaryMain font-bold">Training Programs</span>
                </h2>

                <div className="grid grid-cols-4 gap-x-4 gap-y-12">
                {
                    courses.map((course, idx) => {
                        return (
                            <CourseCard
                                key={idx}
                                title={course.title}
                                subtitle={course.subtitle}
                                description={course.descripton}
                                coverImg={course.coverImage}
                                duration={course.duration}
                                type={course.type}
                                isComingSoon={course.isComingSoon}
                            />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default ProgramsView;
