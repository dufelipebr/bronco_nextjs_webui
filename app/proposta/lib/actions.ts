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

export async function createProposta(formData: FormData) {
    
    const rawFormData = Object.fromEntries(formData.entries());

    //   const { customerId, amount, status } = CreateInvoice.parse({
    //     customerId: formData.get('customerId'),
    //     amount: formData.get('amount'),
    //     status: formData.get('status'),
    //   });
    //     // Test it out:
    //   console.log(customerId);
    //   console.log(amount);
    //   console.log(status);


    // const rawFormData = {
    //     "id_Status_Proposta": 0,
    //     "nome_Segurado": "string",
    //     "nome_Social_Segurado": "string",
    //     "sexo": 0,
    //     "cpF_CNPJ_Segurado": "string",
    //     "tipo_Segurado": "string",
    //     "rG_Segurado": "string",
    //     "data_Emissao_RG": "2024-02-06T03:43:31.671Z",
    //     "profissao_Segurado": "string",
    //     "renda_Mensal_Segurado": 0,
    //     "data_Nascimento_Segurado": "2024-02-06T03:43:31.671Z",
    //     "endereco_Segurado_Logradouro": "string",
    //     "endereco_Segurado_Numero": "string",
    //     "endereco_Segurado_Compl": "string",
    //     "endereco_Segurado_CEP": "string",
    //     "endereco_Segurado_Bairro": "string",
    //     "endereco_Segurado_UF": "string",
    //     "endereco_Segurado_Pais": "string",
    //     "telefone_Comercial_Segurado": "string",
    //     "telefone_Residencial_Segurado": "string",
    //     "celular_Segurado": "string",
    //     "forma_Pagamento": 0,
    //     "parcela": 0,
    //     "data_Emissao": "2024-02-06T03:43:31.671Z",
    //     "data_Inicio_Vigencia": "2024-02-06T03:43:31.671Z",
    //     "data_Fim_Vigencia": "2024-02-06T03:43:31.671Z",
    //     "data_Assinatura_Proposta": "2024-02-06T03:43:31.671Z",
    //     "id_Ramo_Principal": 0,
    //     "codigo_Produto": "string",
    //     "uF_Risco_Principal": "string",
    //     "valor_Premio": 0,
    //     "valor_Total_Segurado": 0
    //   }

      console.log(rawFormData);
      console.log("starting fetch WS");
      //const logs = fetch(`https://localhost:7205/Log/listar_logs`);

      const https = require('https');
      //const https = require('node:https');
      https.post('https://localhost:7205/Proposta/criar_proposta',
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