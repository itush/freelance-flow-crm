
"use client";
import { FolderPlus, UserRoundPlus } from 'lucide-react';

interface ActionButtonsProps {
  onCreateNewProject?: () => void;
  onNewClientClick?: () => void;
}

// ActionButtons component with callbacks
export default function ActionButtons({ 
  onCreateNewProject,
  onNewClientClick,
}: ActionButtonsProps) {

  return (
    <div className="mt-8 w-full flex flex-col sm:flex-row gap-4">
      <button 
      onClick={onCreateNewProject}
      className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 cursor-pointer">
        <div className="flex justify-center items-center">
          <span>Create New Project</span> <FolderPlus className="ml-2" />
        </div>
      </button>
      <button 
      onClick={onNewClientClick}
      className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer">
        <div className="flex justify-center items-center">
          <span>New Client</span> <UserRoundPlus className="ml-2" />
        </div>
      </button>
    </div>
  );
}
