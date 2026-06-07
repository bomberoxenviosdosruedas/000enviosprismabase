"use client"

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type FieldErrors } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, Loader2, User, MailIcon as Mail, MessageSquare } from "lucide-react"
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido y debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(1000, { message: 'El mensaje no debe exceder los 1000 caracteres.'}),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialState: ContactFormState = {
  message: undefined,
  error: undefined,
  fieldErrors: {},
  formError: undefined,
  timestamp: Date.now(),
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-secondary hover:bg-yellow-400 text-black py-4 uppercase font-display font-black text-orbitron tracking-wider rounded-xl transition-all duration-300 transform active:scale-95 text-base h-auto" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Enviar Mensaje
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    errors: state?.fieldErrors ? state.fieldErrors as FieldErrors<ContactFormValues> : {},
  });

   useEffect(() => {
    if (state?.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
        if (state.message) {
          toast({
            title: "Mensaje Enviado",
            description: state.message,
            className: "bg-green-100 border-green-400 text-green-700",
          });
          form.reset();
        }
        if (state.error) {
          toast({
            variant: "destructive",
            title: "Error al Enviar",
            description: state.error,
          });
        }
        if (state.formError) {
           toast({
            variant: "destructive",
            title: "Error en el Formulario",
            description: state.formError,
          });
        }
        if (state.fieldErrors) {
          const fieldErrors = state.fieldErrors;
          (Object.keys(fieldErrors) as Array<keyof ContactFormValues>).forEach((key) => {
            if (form.getFieldState(key) && fieldErrors[key]) {
                 form.setError(key, { type: 'server', message: fieldErrors[key]!.join(', ') });
            }
          });
        }
    }
  }, [state, toast, form]);

  if (state?.message && state.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
    return (
       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="max-w-2xl mx-auto shadow-lg border-green-300 bg-green-50 dark:bg-green-900/20">
            <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2 font-display">¡Mensaje Enviado!</h3>
            <p className="text-green-600 dark:text-green-300 font-sans">{state.message}</p>
            </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-2xl border border-white/10 bg-[background]/60 backdrop-blur-md hover:border-primary/30 transition-all duration-500 rounded-2xl">
      <CardContent className="p-6 sm:p-8">
        <Form {...form}>
            <form action={formAction} className="space-y-5 sm:space-y-6">
            
              <FormField
                control={form.control as any}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-label-md uppercase text-gray-300 font-bold mb-2"><User className="w-4 h-4 mr-2 text-primary"/>Nombre *</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} className="h-11 text-base bg-[background]/50 border border-white/10 hover:border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white rounded-lg transition-all duration-300 font-sans"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
            <FormField
              control={form.control as any}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-label-md uppercase text-gray-300 font-bold mb-2"><Mail className="w-4 h-4 mr-2 text-primary"/>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} className="h-11 text-base bg-[background]/50 border border-white/10 hover:border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white rounded-lg transition-all duration-300 font-sans"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control as any}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-label-md uppercase text-gray-300 font-bold mb-2"><MessageSquare className="w-4 h-4 mr-2 text-primary"/>Mensaje *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Contanos sobre tu consulta o necesidad de envío..."
                      rows={5}
                      {...field}
                      className="text-base bg-[background]/50 border border-white/10 hover:border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white rounded-lg transition-all duration-300 font-sans"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-2">
                <SubmitButton />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
