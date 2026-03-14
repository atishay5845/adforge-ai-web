import { useState } from "react"
import type { Project } from "../types"
import { useNavigate } from "react-router-dom"
import { EllipsisIcon, EllipsisVertical, Loader2Icon } from "lucide-react"

const ProjectCard = ({
  gen,
  setGenerations,
  forCommunity = false
}: {
  gen: Project
  setGenerations: React.Dispatch<React.SetStateAction<Project[]>>
  forCommunity?: boolean
}) => {

  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div key={gen.id} className="mb-4 break-inside-avoid">
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group">

        {/* Preview Content */}
        <div className={`${gen?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} relative overflow-hidden`}>

          {gen.generatedImage && (
            <img
              src={gen.generatedImage}
              alt={gen.productName}
              className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${
                gen.generatedVideo ? 'group-hover:opacity-0' : 'group-hover:scale-105'
              }`}
            />
          )}

          {gen.generatedVideo && (
            <video
              src={gen.generatedVideo}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          )}

          {!gen.generatedImage && !gen.generatedVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Loader2Icon className="size-7 animate-spin" />
            </div>
          )}

          {/* Status badges */}
          <div className="absolute left-3 top-3 flex gap-2 items-center">
            {gen.isGenerating && (
              <span className="text-xs px-2 py-1 bg-yellow-600/30 rounded-full">
                Generating
              </span>
            )}

            {gen.isPublished && (
              <span className="text-xs px-2 py-1 bg-green-600/30 rounded-full">
                Published
              </span>
            )}
          </div>
          {/* action menu only for generation page */}
          {!forCommunity && (
            <div>
              <div className="">
                <EllipsisIcon className="ml-auto bg-amber-50"/>
              </div>
            </div>

          )}
          {/* Source Images */}
          {gen.uploadedImages?.length > 0 && (
            <div className="absolute right-3 bottom-3 flex items-center">

              {gen.uploadedImages[0] && (
                <img
                  src={gen.uploadedImages[0]}
                  alt="product"
                  className="w-16 h-16 object-cover rounded-full animate-float"
                />
              )}

              {gen.uploadedImages[1] && (
                <img
                  src={gen.uploadedImages[1]}
                  alt="model"
                  className="w-16 h-16 object-cover rounded-full animate-float ml-2"
                  style={{ animationDelay: "3s" }}
                />
              )}

            </div>
          )}

        </div>
      {/* Project details */}
      <div className="p-4">
          {/* Project name, date and aspect ratio */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 ">
              <h3 className="font-medium text-lg mb-1">{gen.productName}</h3>
              <p className="text-sm text-gray-400">Created: {new Date(gen.createdAt).toLocaleString()}</p>
              {gen.updatedAt && (
                <p className="text-xs text-gray-500 mt-1">Updated: {new Date(gen.updatedAt).toLocaleString()}</p>
              )}
            </div>
            <div className="text-right">
              <div className="mt-2 flex flex-col items-end gap-1">
                <span className="text-xs px-2 py-1 bg-white/5 rounded-full">Aspect: {gen.aspectRatio}</span>
              </div>
            </div>
          </div>
          {/* product description */}
          {gen.productDescription && (
            <div className="mt-3">
              <p className="text-xs text-gray-400 mb-1">Description</p>
              <div className="text-sm text-gray-300 bg-white/3 p-2 rounded-md wrap-break-word">{gen.productDescription}</div>
            </div>
          )}

          {/* user prompt */}
          {gen.userPrompt && (
            <div className="mt-3">
              <div className="text-xs text-gray-300">{gen.userPrompt}</div>
            </div>
          )}
      </div>

      </div>
    </div>
  )
}

export default ProjectCard