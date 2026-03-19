import Pricing from "../components/Pricing"

const Plans = () => {
  return (
    <div className="max-sm:py-10 sm:pt-20">
      <Pricing/>
      <p className="text-center text-gray-400 max-w-md text-sm my-14 mx-auto px-12 ">Create stunning images for just <span className="text-indigo-400 font-medium">5 credits </span>and generate immersive videos for <span className="text-indigo-400 font-medium">10 credits</span>.</p>
    </div>
  )
}

export default Plans