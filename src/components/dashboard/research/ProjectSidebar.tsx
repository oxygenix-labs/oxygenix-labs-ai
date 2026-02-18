"use client";

import { useState } from "react";
import { Plus, FolderOpen, MoreVertical, Search, FlaskConical } from "lucide-react";
import CreateProjectModal from "./CreateProjectModal";
import { clsx } from "clsx";

interface Project {
    id: string;
    name: string;
    description: string;
    lastActive: string;
}

interface ProjectSidebarProps {
    currentProject: Project | null;
    onSelectProject: (project: Project) => void;
}

export default function ProjectSidebar({ currentProject, onSelectProject }: ProjectSidebarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [projects, setProjects] = useState<Project[]>([
        { id: "PRJ-001", name: "Drought Resistance", description: "Improving water efficiency in maize", lastActive: "2h ago" },
        { id: "PRJ-002", name: "Nitrogen Fixation", description: "Enhancing root nodulation in soy", lastActive: "1d ago" },
        { id: "PRJ-003", name: "Pest Control V2", description: "Targeting fall armyworm resistance", lastActive: "3d ago" },
    ]);

    const handleCreateProject = (data: { name: string; description: string }) => {
        const newProject: Project = {
            id: `PRJ-${String(projects.length + 1).padStart(3, '0')}`,
            name: data.name,
            description: data.description,
            lastActive: "Just now"
        };
        setProjects([newProject, ...projects]);
        onSelectProject(newProject);
    };

    const filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="w-80 border-r border-white/5 flex flex-col h-[calc(100vh-4rem)] sticky top-16 bg-[#0A0F0D]/50">
                <div className="p-4 border-b border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Projects</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            title="New Project"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Filter projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/5 border border-white/5 rounded-lg py-2 pl-9 pr-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                    {filteredProjects.map((project) => (
                        <button
                            key={project.id}
                            onClick={() => onSelectProject(project)}
                            className={clsx(
                                "w-full flex items-start text-left gap-3 p-3 rounded-xl transition-all border",
                                currentProject?.id === project.id
                                    ? "bg-primary/10 border-primary/20"
                                    : "hover:bg-white/5 border-transparent hover:border-white/5"
                            )}
                        >
                            <div className={clsx(
                                "mt-0.5 p-2 rounded-lg",
                                currentProject?.id === project.id ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-500"
                            )}>
                                <FlaskConical className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                    <span className={clsx(
                                        "text-sm font-medium truncate",
                                        currentProject?.id === project.id ? "text-primary" : "text-white"
                                    )}>
                                        {project.name}
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-500 font-mono mb-1">{project.id}</div>
                                <p className="text-xs text-gray-400 truncate">{project.description}</p>
                            </div>
                        </button>
                    ))}

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-8 px-4">
                            <FolderOpen className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                            <p className="text-sm text-gray-500">No projects found</p>
                        </div>
                    )}
                </div>
            </div>

            <CreateProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateProject}
            />
        </>
    );
}
