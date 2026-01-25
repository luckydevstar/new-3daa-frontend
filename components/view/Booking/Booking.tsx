import { About, BookingHero, CourseUnits, Faq } from "./components";
import SecureSeat from "./components/SecureSeat/SecureSeat";

const Booking = () => {
    return (
        <>
            <BookingHero />
            <SecureSeat />
            <About />
            <CourseUnits />
            <Faq />
        </>
    )
}

export default Booking;