import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import Categories from "../../Shared/Categories/Categories";
import ExploreCategory from "../../Shared/ExploreCategory/ExploreCategory";


const Home = () => {
    return (
        <div className="space-y-5">
            <Helmet>
                <title>Estate Stay | home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <ExploreCategory></ExploreCategory>
        </div>
    );
};

export default Home;