import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/product/6781">
                <p className="text-base text-primary">Product</p>
            </Link>
        </div>
    );
};

export default Home;