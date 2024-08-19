import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="p-10">
            <Helmet>
                <title>Estate Stay | About</title>
            </Helmet>
            <div className="space-y-10">
                <div className="space-y-3">
                    <h3 className="font-bold text-3xl">About Us</h3>
                    <p className="text-gray-600 text-justify">Welcome to Estate Stay, where luxury meets comfort, and every property tells a story. With decades of experience in the real estate industry, we specialize in connecting clients with their dream properties, whether it’s a chic urban apartment, a tranquil beachside resort, or a rustic mountain lodge.</p>
                    <p className="text-gray-600 text-justify">Our journey began with a simple mission: to redefine the real estate experience by offering unparalleled service, expert advice, and a commitment to excellence. Over the years, we’ve grown into a leading real estate agency, known for our personalized approach, integrity, and a portfolio of properties that cater to the diverse needs of our clients.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold text-3xl">What We Do</h3>
                    <p className="text-gray-600 text-justify">At Estate Stay, we offer a wide range of real estate services, including buying, selling, renting, and property management. Our extensive catalog features:</p>
                    <p className="text-gray-600 text-justify"></p>
                    <ul className="list-inside">
                        <li className="list-disc"><span className="font-semibold text-black">Luxury Hotels:</span> Experience world-class hospitality in some of the most exclusive locations.</li>
                        <li className="list-disc"><span className="font-semibold text-black">Resorts:</span> Unwind in luxury at our carefully curated resorts, offering the perfect escape from the everyday hustle.</li>
                        <li className="list-disc"><span className="font-semibold text-black">Lodges: </span> Discover the charm of rustic living with our collection of serene lodges nestled in nature’s lap. </li>
                        <li className="list-disc"><span className="font-semibold text-black">Vacation Rentals:</span>  Find your home away from home with our selection of cozy and well-appointed vacation rentals.</li>
                        <li className="list-disc"><span className="font-semibold text-black">Guesthouses:</span> Enjoy the warmth and comfort of our guesthouses, ideal for short stays or extended visits.</li>
                        <li className="list-disc"><span className="font-semibold text-black">Motels: </span> Offering convenience and comfort, our motels are perfect for travelers on the go. </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold text-3xl">Our Promise</h3>
                    <p className="text-gray-600 text-justify">We understand that finding the right property is more than just a transaction; it’s about finding a place that feels like home. At State Stay, we promise to be with you every step of the way, making your real estate journey smooth, enjoyable, and successful.</p>
                    <p className="text-gray-600 text-justify">Thank you for choosing State Stay. We look forward to helping you discover the perfect property that matches your lifestyle and aspirations.</p>
                </div>
            </div>
        </div>
    );
};

export default About;