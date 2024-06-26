'use client';

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data'; 
import React, { useState, useEffect  } from 'react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default async function Page() 
{
  const [loggedIn, setLoggedIn] = useState('false')
  const [email, setEmail] = useState('')

  useEffect(() => 
  {
    console.log('useEffect')
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if (user &&user.token) {
       setLoggedIn(true)
       setEmail(user.email)
       return
    }

  },[])

  // checkAccountExists((accountExists) => 
  // {
  //   console.log('checkAccountExists')
  // }



  // useEffect(() => {
  //   // Fetch the user email and token from local storage
  //   const user = JSON.parse(localStorage.getItem('user'))
  
  //   // If the token/email does not exist, mark the user as logged out
  //   if (!user || !user.token) {
  //     setLoggedIn(false)
  //     return
  //   }
  
    
    
  // }, [])


    const totalPaidInvoices = 1000;
    const totalPendingInvoices = 500;
    const numberOfInvoices = 150;
    const numberOfCustomers = 97;
    const revenue = [
        {month: "01-2023", revenue:1000}, 
        {month: "02-2023", revenue:300}
    ];
    const latestInvoices = [
        {id:"20240129", name:"carlos oliveira", image_url:"empty", email:"du.felipe.br@gmail.com", amount:"1000"}
    ];
    const links = [
        { name: 'Home', href: '/dashboard', icon: "HomeIcon" },
        {  name: 'Propostas',  href: '/proposta',  icon: "DocumentDuplicateIcon" }, 
        { name: 'Apolices', href: '/apolice', icon: "UserGroupIcon" },
      ];

 


  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        { <Card title="Collected" value={totalPaidInvoices} type="collected" /> }
        { <Card title="Pending" value={totalPendingInvoices} type="pending" /> }
        { <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> }
        {<Card  title="Total Customers" value={numberOfCustomers} type="customers" /> }
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        { <RevenueChart revenue={revenue}  /> }
        { <LatestInvoices latestInvoices={latestInvoices} /> }
      </div>
    </main>
  );
}
