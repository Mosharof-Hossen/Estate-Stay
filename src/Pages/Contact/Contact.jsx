import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <div className="p-10">
            <Helmet>
                <title>Estate Stay | Contact</title>
            </Helmet>
            <div>
                <div className="space-y-3">
                    <h3 className="font-bold text-3xl">Contact Us</h3>
                    <p className="text-gray-600 text-justify">We’d love to hear from you! Whether you’re looking to buy, sell, rent, or simply have a question about our services, our team is here to assist you. Please feel free to reach out using any of the methods below.</p>
                    <p className="text-gray-600 text-justify font-bold text-lg">Office Address</p>
                    <p>
                        <span className="font-semibold">Estate Stay</span> <br />
                        1234 Real Estate Avenue <br />
                        Suite 567 <br />
                        Cityville, State 12345 <br />
                        Country
                    </p>

                    <p className="text-gray-600 text-justify font-bold text-lg">Phone Number</p>
                    <ul className="list-inside">
                        <li className="list-disc"><span className="font-semibold">General Inquiries:</span> +1 (123) 456-7890</li>
                        <li className="list-disc"><span className="font-semibold">Sales Department: </span> +1 (123) 456-7891</li>
                        <li className="list-disc"><span className="font-semibold">Customer Support: </span> +1 (123) 456-7892</li>
                    </ul>
                    <p className="text-gray-600 text-justify font-bold text-lg">Email Address</p>
                    <ul className="list-inside">
                        <li className="list-disc"><span className="font-semibold">General Information:</span>  info@estatstay.com</li>
                        <li className="list-disc"><span className="font-semibold">Sales Inquiries:</span> sales@estatstay.com</li>
                        <li className="list-disc"><span className="font-semibold">Support:</span> support@estatstay.com</li>
                    </ul>
                    <p className="text-gray-600 text-justify font-bold text-lg">Visit Us</p>
                    <ul className="list-inside">
                        <p className="text-gray-600 text-justify">Our office is conveniently located in the heart of Cityville, making it easy for you to drop by for a consultation. We look forward to welcoming you! </p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;