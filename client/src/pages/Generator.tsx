import Title from "../components/Title"

const Generator = () => {
  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form className="max-w-4xl mx-auto mb-40">
        <Title heading='Create In-Context Images' description="Upload your model and product images to generate stunning UGC, short-form videos and social media post"/>

        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* Left col */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <p>Product Image</p>
            <p>Model Image</p>
          </div>
            {/* Right col */}
          <div>
            <p>Right col</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Generator