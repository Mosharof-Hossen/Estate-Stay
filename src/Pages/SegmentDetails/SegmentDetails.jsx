import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaAngellist, FaChartArea, FaCircleArrowRight, FaCircleDollarToSlot, FaLocationDot, FaPhone, FaSellcast, FaShieldHeart } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";


const SegmentDetails = () => {
    const [segmentsData, setSegmentsData] = useState([]);
    const data = useLoaderData()
    const { segmentId } = useParams()
    useEffect(() => {
        const filteredData = data.find(dt => dt.id == segmentId);
        setSegmentsData(filteredData);
    }, [data, segmentId])

    console.log(segmentsData);
    return (
        <div className="p-5 ">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="space-y-5 col-span-2 p-3">
                    <div><img src={segmentsData?.image} className="w-full" alt="" /></div>
                    <h2 className="text-center font-bold text-2xl">{segmentsData?.estate_title}</h2>

                    <div >
                        <p className="text-justify"><span className="font-bold">Property Description:</span> <span className="text-gray-500 text-sm">{segmentsData?.description}</span></p>

                    </div>
                </div>
                <div className="col-span-1 mt-3 p-3 lg:pl-10 space-y-3 bg-slate-100">
                    <h3 className="text-2xl font-bold">Property Details</h3>
                    <hr className="my-4" />
                    <div className="space-y-2">
                        <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><FaAngellist></FaAngellist> <span>Segment Name:</span> </span><span>{segmentsData?.segment_name}</span></p>
                        <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><FaCircleDollarToSlot></FaCircleDollarToSlot> <span>Price:</span> </span><span>{segmentsData?.price}$</span></p>
                        <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><FaChartArea></FaChartArea> <span>Area:</span> </span><span>{segmentsData?.area}</span></p>
                        <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><FaSellcast></FaSellcast> <span>Status:</span> </span><span>{segmentsData?.status}</span></p>
                        <div>
                            <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><FaShieldHeart></FaShieldHeart> <span>Facilities:</span> </span></p>
                            <ul className="space-y-2">
                                {
                                    segmentsData?.facilities?.map(((facility, idx) => <li className="pl-10 flex items-center space-x-1" key={idx}><FaCircleArrowRight></FaCircleArrowRight> <span>{facility}</span></li>))
                                }
                            </ul>
                        </div>
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <hr className="my-4" />
                        <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><FaPhone></FaPhone> <span>Phone:</span> </span><span>0170-00 00 00</span></p>
                        <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><AiOutlineMail></AiOutlineMail> <span>Email:</span> </span><span>info@gmail.com</span></p>
                        <p className="text-gray-500 flex space-x-1"><span className="font-semibold text-black flex space-x-1 items-center"><FaLocationDot></FaLocationDot> <span>Location:</span> </span><span>{segmentsData?.location}</span></p>

                    </div>
                    <div className="lg:pr-10">
                        <button className=" mt-5 px-3 md:w-full py-2 bg-primary-color rounded text-white">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SegmentDetails;