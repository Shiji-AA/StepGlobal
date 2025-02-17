function WelcomeFooter() {
    return (
        <>
            {/* Footer Section */}
            <footer className="bg-gray-900 text-white p-6 text-center">
                <p>&copy; {new Date().getFullYear()} Welcome. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default WelcomeFooter;
