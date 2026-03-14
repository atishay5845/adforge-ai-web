import { useState } from "react";
import type { Project } from "../types";

const Result = () => {
  const [project, setProjectData] = useState<Project>({} as Project);
  const [loading, setLoading] = useState(true);
  
  return (
    <div>Result</div>
  )
}

export default Result