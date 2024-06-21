import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { CreateProposta } from '@/app/proposta/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { PropostaDTOModel } from '../models';

async function getPropostas():Promise<PropostaDTOModel[]>{
    const response = await fetch("https://localhost:7205/Proposta/listar_propostas/1")
    return response.json()
}

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const propostas = await getPropostas()
    // const query = searchParams?.query || '';
    // const currentPage = Number(searchParams?.page) || 1;
    // console.log(query);
    // console.log(currentPage);

    
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Propostas</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        Search
        <Search placeholder="Buscar propostas..." />
        <CreateProposta />
      </div>
      { /* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>*/
        <Table query={query} currentPage={currentPage} />
      /*</Suspense>*/ }
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}