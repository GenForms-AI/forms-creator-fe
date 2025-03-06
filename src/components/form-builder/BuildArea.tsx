import { useState } from "react";

import { BuildAreaProps } from "@/lib/interfaces";
import { Button } from "@/components/ui/button";

const BuildArea: React.FC<BuildAreaProps> = ({ draggedFieldRef, onPreviewClick }) => {
  const [fields, setFields] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("From drop")
    const addedField = draggedFieldRef.current as string
    setFields([...fields, addedField])
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <section className="flex-1 p-8 overflow-auto">
      <article className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">Build Area</h2>
        <Button onClick={onPreviewClick}>Preview</Button>
      </article>
      <article
        className="min-h-[200px] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {fields}
      </article>
    </section>
  );
};

export default BuildArea;
