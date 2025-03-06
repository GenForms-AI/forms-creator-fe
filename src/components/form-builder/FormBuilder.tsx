import { useRef, useState } from "react";

import TopBar from "./TopBar";
import FieldTypes from "./FieldTypes";
import ChatArea from "./ChatArea";
import FormPreview from "./FormPreview";
import BuildArea from "./BuildArea";

export default function FormBuilder() {
  const [isPreview, setIsPreview] = useState(false);

  const draggedFieldRef = useRef(null);

  const handleBuildClick = () => {
    setIsPreview(false);
  };

  const handlePreviewClick = () => {
    setIsPreview(true);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar />

      <div className="flex-1 flex">
        {/* Left Sidebar - Field Types */}
        <FieldTypes draggedFieldRef={draggedFieldRef} />

        {/* Center - Form Preview or Build Area */}
        {isPreview ? (
          <FormPreview onBuildClick={handleBuildClick} />
        ) : (
          <BuildArea
            draggedFieldRef={draggedFieldRef}
            onPreviewClick={handlePreviewClick}
          />
        )}
      </div>

      {/* Bottom - Chat Area */}
      <ChatArea />
    </div>
  );
}
