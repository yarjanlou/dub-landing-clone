import { TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

export default function TabsContent() {
  return (
    <div className="mx-auto mt-6 max-w-[940px] px-4">
      <TabPanels className="relative h-[380px] md:h-[480px]">
        <TabPanel className="size-full">
          <TabLayout>
            <Image
              src="/images/links.png"
              alt="short-links"
              fill
              className="size-full"
            />
          </TabLayout>
        </TabPanel>
        <TabPanel className="size-full">
          <TabLayout>
            <Image
              src="/images/analytics.png"
              alt="analytics"
              fill
              className="size-full"
            />
          </TabLayout>
        </TabPanel>
        <TabPanel className="size-full">
          <TabLayout>
            <Image
              src="/images/tags.png"
              alt="tags"
              fill
              className="size-full"
            />
          </TabLayout>
        </TabPanel>
      </TabPanels>
    </div>
  );
}

function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="size-full rounded-t-xl border-x border-t border-neutral-200 [mask-image:linear-gradient(black_50%,transparent_90%)] px-1.5 pt-1.5 sm:rounded-t-[1.25rem] sm:px-3 sm:pt-3">
      <div className="relative size-full overflow-hidden rounded-t-lg border-x border-t border-neutral-300 drop-shadow-sm sm:rounded-t-xl">
        {children}
      </div>
    </div>
  );
}
