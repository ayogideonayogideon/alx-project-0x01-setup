import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex items-center justify-center flex-grow bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We are glad you are here. Explore and enjoy your experience.
          </p>
          <button className="px-6 py-3 mt-6 font-semibold text-blue-500 transition bg-white rounded-full hover:bg-gray-200">
            Get Started
          </button>
            </div>
      </main>
    </div>
  )
}

export default Home;
