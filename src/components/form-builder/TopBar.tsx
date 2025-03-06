import { Save, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Form Builder</h1>
      <div className="space-x-2">
        <Button variant="secondary" size="sm">
          <X className="mr-2 h-4 w-4" /> Cancel
        </Button>
        <Button variant="secondary" size="sm">
          <Save className="mr-2 h-4 w-4" /> Save Form
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
