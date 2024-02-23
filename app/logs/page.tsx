import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';


export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {

    const logs = fetch(`https://localhost:7205/Log/listar_logs`);
    
    console.log(logs);
    console.log('entrando');
    
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1>Logs</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        Search
      </div>
       <div className="mt-6 flow-root">
       <div className="inline-block min-w-full align-middle">
         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
           <div className="md:hidden">
             {/*logs?.map((log) => (
               <div
                 key={log.id}
                 className="mb-2 w-full rounded-md bg-white p-4"
               >
                 <div className="flex items-center justify-between border-b pb-4">
                   <div>
                     <div className="mb-2 flex items-center">
                       <p>{log.Mensagem}</p>
                     </div>
                     <p className="text-sm text-gray-500">{log.Data_Log}</p>
                   </div>
                 </div>
                 <div className="flex items-center justify-between border-b pb-4">
                   <div>
                     <div className="mb-2 flex items-center">
                       <p>{log.Mensagem}</p>
                     </div>
                     <p className="text-sm text-gray-500">{log.Tipo_Log}</p>
                   </div>
                 </div>
               </div>
             ))*/}
           </div>
          </div>            
        </div>
      </div>
    </div>
  );
}