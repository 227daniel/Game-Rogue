import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/components/ui/tabs';
import { ChevronRight } from 'lucide-react';
import CreateOrganization from './create-organization';
import ManageOrganization from './manage-organization';

export default function RogueSocialIndexPage(): JSX.Element {
  return (
    <div className="w-full">
      <Tabs defaultValue="create" className="flex size-full flex-1 overflow-auto">
        <TabsList
          className="flex h-auto min-h-full w-[280px] flex-col justify-start overflow-hidden border-r-DEFAULT border-[#ffffff1f] px-0 shadow-md"
          style={{
            background: 'linear-gradient(to top, rgb(40, 22, 12) 60%, rgb(0, 0, 0))',
          }}
        >
          <TabsTrigger
            value="create"
            className="flex w-full justify-between rounded-none border-r-2 border-transparent bg-transparent px-4 py-6 text-lg font-normal uppercase text-white/70 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            <p>create account</p>
            <ChevronRight className="size-6" />
          </TabsTrigger>
          <TabsTrigger
            value="manage"
            className="flex w-full justify-between rounded-none border-r-2 border-transparent bg-transparent px-4 py-6 text-lg font-normal uppercase text-white/70 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            <p>manage accounts</p>
            <ChevronRight className="size-6" />
          </TabsTrigger>
        </TabsList>
        <div className="flex flex-1 flex-col">
          <div className="flex w-full flex-col justify-start bg-black p-6">
            <TabsContent value="create">
              <CreateOrganization />
            </TabsContent>
            <TabsContent value="manage">
              <ManageOrganization />
            </TabsContent>
          </div>
        </div>
      </Tabs>
      {/* <Footer /> */}
    </div>
  );
}
