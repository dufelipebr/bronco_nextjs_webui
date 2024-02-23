'use server';
import { z } from 'zod';


const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });

  const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    
      //const rawFormData = Object.fromEntries(formData.entries());

      // Formatar valores vindos do  formulario 
      const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      });
        
      // construir json
      const rawFormData = {
        customerId: customerId,
        amount: amount,
        status: status,
      };
      console.log(rawFormData);
      console.log("starting fetch WS");

      //enviar api via post
      const https = require('node:https');

      // const options = {
      //   hostname: 'encrypted.google.com',
      //   port: 443,
      //   path: '/',
      //   method: 'GET',
      // };

      // const req = https.request(options, (res) => {
      //   console.log('statusCode:', res.statusCode);
      //   console.log('headers:', res.headers);

      //   res.on('data', (d) => {
      //     process.stdout.write(d);
      //   });
      // });

      // req.on('error', (e) => {
      //   console.error(e);
      // });
      // req.end(); 
}