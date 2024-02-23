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
      const https = require('https');
      https.get('https://localhost:7205/Proposta/criar_invoice',
          process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0", (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
      
        res.on('data', (d) => {
          const logs = process.stdout.write(d);
          console.log("Saida");
          console.log(logs);
        });
      
      }).on('error', (e) => {
        console.log("DEU ERRO!!!");
        console.error(e);
      });
}