import { TabGroup } from "@headlessui/react";
import TabsHeader from "./TabsHeader";
import TabsContent from "./TabsContent";

export default function FeaturesSection() {
  return (
    <div className="relative overflow-clip px-4">
      <TabGroup className="max-w-grid-width border-grid-border relative mx-auto border-x">
        <TabsHeader />
        <TabsContent />
      </TabGroup>
    </div>
  );
}
