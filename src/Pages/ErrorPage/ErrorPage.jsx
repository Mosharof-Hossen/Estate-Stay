
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <Helmet>
                <title>Estate Stay | Error Page</title>
            </Helmet>
            <h1 className='font-semibold text-4xl'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            
        </div>
    );
};

export default ErrorPage;