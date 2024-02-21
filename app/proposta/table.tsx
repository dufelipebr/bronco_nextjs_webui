import Image from 'next/image';
import { UpdateProposta, DeleteProposta } from '@/app/proposta/buttons';
import PropostaStatus from '@/app/proposta/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
//import { fetchFilteredpropostas } from '@/app/lib/data';

export default async function PropostaTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //const propostas = await fetchFilteredpropostas(query, currentPage);
  const propostas = [
    { id: '9009102', amount: 10.90,  date: '2024-01-01', status:'pending', name: 'cadu', email:'du.felipe.br@gmail.com', image_url: 'data:image/jpeg;base64,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'},
    { id: '9009103', amount: 150.780,  date: '2024-01-30', status:'pending', name: 'pedro', email:'pedro@gmail.com', image_url: 'data:image/jpeg;base64,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'},
    { id: '9009104', amount: 200.90,  date: '2024-01-15', status:'pending', name: 'renatão', email:'renato@gmail.com', image_url: 'data:image/jpeg;base64,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'},
  ];

  

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {propostas?.map((proposta) => (
              <div
                key={proposta.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={proposta.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${proposta.name}'s profile picture`}
                      />
                      <p>{proposta.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{proposta.email}</p>
                  </div>
                  <PropostaStatus status={proposta.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(proposta.amount)}
                    </p>
                    <p>{formatDateToLocal(proposta.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateProposta id={proposta.id} />
                    <DeleteProposta id={proposta.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Cliente
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Valor Total
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Data
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {propostas?.map((proposta) => (
                <tr
                  key={proposta.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={proposta.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${proposta.name}'s profile picture`}
                      />
                      <p>{proposta.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {proposta.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(proposta.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(proposta.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <PropostaStatus status={proposta.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateProposta id={proposta.id} />
                      <DeleteProposta id={proposta.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}