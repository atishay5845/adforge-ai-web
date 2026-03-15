import { useEffect, useState } from "react";
import type { Project } from "../types";
import { dummyGenerations } from "../assets/assets";
import { ImageIcon, Loader2Icon, RefreshCwIcon, VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { GhostButton } from "../components/Buttons";

const Result = () => {
  const [project, setProjectData] = useState<Project>({} as Project);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const fetchProjectData = async () => {
      setTimeout(() => {
        setProjectData(dummyGenerations[0]);
        setLoading(false);
      }, 3000);
  }

  useEffect(() => {
    fetchProjectData();
  },[])
  return loading ? (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader2Icon className="animate-spin text-indigo-50 size-9"/>
    </div>
  ):(
    <div className="min-h-screen text-white p-6 md:p-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md-text-3xl font-medium">Generation Result</h1>
          <Link to="/generate" className="btn-secondary text-sm flex items-center gap-2">
            <RefreshCwIcon className="w-4 h-4"/>
            <p className="max-sm:hidden">New Generation</p>
          </Link>
        </header>

        {/* grid layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* main result display */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel inline-block p-2 rounded-2xl">
              <div className={`${project?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} sm:max-h-200 rounded-xl bg-gray-900 overflow-hidden relative`}>
                {project?.generatedVideo ? (
                  <video src={project.generatedVideo} controls autoPlay loop className="w-full h-full object-cover"/>):(
                    <img src={project?.generatedImage} alt="Generated Result" className="w-full h-full object-cover"/>
                )}
              </div>
            </div>
          </div>

          {/* sidebar actions */}

          <div className="space-y-6">
            {/* download buttons */}
            <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Actions</h3>
                <div className="flex flex-col gap-3">
                  <a href={project.generatedImage} download>
                    <GhostButton disabled={!project.generatedImage} className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                      <ImageIcon className="size-4.5"/>
                      Download Image
                    </GhostButton>
                  </a>

                  <a href={project.generatedVideo} download>
                    <GhostButton disabled={!project.generatedVideo} className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                      <VideoIcon className="size-4.5"/>
                      Download Video
                    </GhostButton>
                  </a>
                </div>
            </div>

            {/* generating video buttons */}
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result