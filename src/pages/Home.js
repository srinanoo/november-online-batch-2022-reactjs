import FuncFooter from "../components/fnFooter";
import FuncHeader from "../components/fnHeader";
import FuncMain from "../components/fnMain";

function HomePage() {
    return (
        <>
            <h2>Home Page</h2>

            <p>Home page content goes here...</p>

            <FuncHeader />
            <FuncMain />
            <FuncFooter />
        </>
    )
}

export default HomePage;