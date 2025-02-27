import bg from "../../../../assets/heroImages/bg.jpg";

function WelcomeContact() {
    return (
        <section 
            className="w-full h-[300px] flex items-center justify-center bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="text-center  bg-opacity-60 p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-normal text-white leading-tight">
                    Learn more about<br /> over 10,000 individuals?
                </h1>
                <div className="mt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white font-normal rounded-lg hover:bg-blue-700 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default WelcomeContact;