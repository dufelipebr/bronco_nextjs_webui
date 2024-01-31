import Form from '@/app/proposta/create/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
//import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  //const customers = await fetchCustomers();
  const propostas = [
    { id: '9009102', amount: 10.90,  date: '2024-01-01', status:'pending', name: 'cadu', email:'du.felipe.br@gmail.com', image_url: ''}
  ];

  const ramos = [
    { id: '99990', name:'Vida 1'},
    { id: '99991', name:'Vida 2'}
  ];

  const uf = [
    { id: '01', name:'SP'},
    { id: '02', name:'RJ'},
    { id: '03', name:'MG'}
  ];

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Proposta', href: '/proposta' },
          {
            label: 'Criar Proposta',
            href: '/proposta/create',
            active: true,
          },
        ]}
      />
      <Form ramos={ramos} uf={uf}/>
    </main>
  );
}