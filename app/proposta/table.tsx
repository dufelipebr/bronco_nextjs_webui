

import React, { useState, useEffect  } from 'react';
import Image from 'next/image';
import { UpdateProposta, DeleteProposta } from '@/app/proposta/buttons';
import PropostaStatus from '@/app/proposta/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredpropostas } from '@/app/lib/data';
import { PropostaDTOModel } from '../models';

export default function PropostaTable({
  query,
  currentPage, 
  propostas
  }: {
  query: string;
  currentPage: number;
  propostas: PropostaDTOModel[];
}) {
  // console.log('query' + query)
  // console.log('currentpage' + currentPage)
  // const [loggedIn, setLoggedIn] = useState('false')
  // const [email, setEmail] = useState('')
  // const [propostas, setPropostas] = useState([])

  // useEffect(() => 
  // {
  //   console.log('useEffect')
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   console.log(user)
  //   if (user &&user.token) {
  //       setLoggedIn(true)
  //       setEmail(user.email)
       
  //       fetch('https://localhost:7205/Proposta/listar_propostas/1')
  //       .then((response) => response.json())
  //       .then((data) => {
  //          console.log(data);
  //          setPropostas(data);
  //       })
  //       .catch((err) => {
  //          console.log(err.message);
  //       });

  //   }

  // },[])
  
  

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
                      {/* <Image
                        src={proposta.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${proposta.name}'s profile picture`}
                      /> */}
                      <p>{proposta.status_Proposta}</p>
                    </div>
                    <p className="text-sm text-gray-500">{formatDateToLocal(proposta.data_Criacao_Proposta)}</p>
                  </div>
                  {/*<PropostaStatus status={proposta.status} />*/}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(proposta.cobertura_Total)}
                    </p>
                    <p>{formatCurrency(proposta.premio_Total)}</p>
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
              {/*propostas?.map((proposta) => (
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
              ))*/}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
