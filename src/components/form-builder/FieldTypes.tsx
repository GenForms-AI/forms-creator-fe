import { ChevronRight } from "lucide-react";

import { Button } from "../ui/button";
import { ButtonWrapperProps, FieldTypesProps } from "@/lib/interfaces";

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  name,
  handleDragStart,
  handleDragEnd,
  children,
}) => {
  return (
    <Button
      className="w-full justify-start"
      name={name}
      variant="outline"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
    </Button>
  );
};

const FieldTypes: React.FC<FieldTypesProps> = ({ draggedFieldRef }) => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    console.log(target.name);
    draggedFieldRef.current = target.name;
  };

  const handleDragEnd = (e: React.DragEvent) => {
    console.log(e);
  };

  return (
    <div className="w-64 bg-secondary p-4 space-y-4">
      <h2 className="text-lg font-semibold mb-4">Field Types</h2>
      <ButtonWrapper
        name="input"
        handleDragEnd={handleDragEnd}
        handleDragStart={handleDragStart}
      >
        <ChevronRight className="mr-2 h-4 w-4" /> Input
      </ButtonWrapper>
      <ButtonWrapper
        name="dropdown"
        handleDragEnd={handleDragEnd}
        handleDragStart={handleDragStart}
      >
        <ChevronRight className="mr-2 h-4 w-4" /> Dropdown
      </ButtonWrapper>
      <ButtonWrapper
        name="textarea"
        handleDragEnd={handleDragEnd}
        handleDragStart={handleDragStart}
      >
        <ChevronRight className="mr-2 h-4 w-4" /> Textarea
      </ButtonWrapper>
      <ButtonWrapper
        name="checkbox"
        handleDragEnd={handleDragEnd}
        handleDragStart={handleDragStart}
      >
        <ChevronRight className="mr-2 h-4 w-4" /> Checkbox
      </ButtonWrapper>
      <ButtonWrapper
        name="submitButton"
        handleDragEnd={handleDragEnd}
        handleDragStart={handleDragStart}
      >
        <ChevronRight className="mr-2 h-4 w-4" /> Submit Button
      </ButtonWrapper>
    </div>
  );
};

export default FieldTypes;
