
import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Log the form data for debugging
      console.log("Sending email with data:", { 
        from_name: name, 
        from_email: email, 
        message: message,
        to_email: 'alexsandro.braga@troiton.com.br' 
      });

      if (formRef.current) {
        const result = await emailjs.sendForm(
          'service_h2ylt8s', // Your EmailJS service ID
          'template_ocgfrph', // Your EmailJS template ID
          formRef.current,
          'W9vYe_nC6SZAQpXuJ' // Your EmailJS public key
        );

        console.log('Email successfully sent!', result.text);
        
        toast({
          title: "Mensagem enviada!",
          description: `Obrigado ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`,
          variant: "default",
        });

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contato" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-troiton-100 text-troiton-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar a impulsionar seu negócio com nossas soluções tecnológicas.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="from_name" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-troiton-500 focus:border-troiton-500" 
                  placeholder="Seu nome" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="from_email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-troiton-500 focus:border-troiton-500" 
                  placeholder="seu.email@exemplo.com" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={message} 
                  onChange={e => setMessage(e.target.value)} 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-troiton-500 focus:border-troiton-500" 
                  placeholder="Como podemos ajudar você?" 
                  required 
                />
              </div>
              <input type="hidden" name="to_email" value="alexsandro.braga@troiton.com.br" />
              <Button 
                type="submit" 
                className="w-full bg-troiton-600 hover:bg-troiton-700 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center btn-animation"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="bg-troiton-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M46.5,-59.5C58.9,-51.3,66.8,-35.5,72.1,-18.4C77.5,-1.4,80.2,17,74.9,33.1C69.6,49.3,56.3,63.2,40.5,70.7C24.8,78.1,6.6,79.2,-11.1,76.8C-28.8,74.5,-46,68.7,-59.1,57.1C-72.2,45.5,-81.2,28.3,-83.3,9.7C-85.4,-8.9,-80.5,-29,-69.4,-43C-58.2,-57.1,-41,-65.1,-25.1,-71.5C-9.2,-77.9,5.3,-82.6,20.8,-79.5C36.3,-76.3,52.8,-65.2,46.5,-59.5Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
              <p className="mb-8 opacity-80">
                Estamos prontos para atender às suas necessidades de tecnologia. Entre em contato conosco através dos canais abaixo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-troiton-600 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="opacity-80">projects@troiton.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-troiton-600 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <p className="opacity-80">+55 (11) 95823-1139</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-troiton-600 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Localização</h4>
                    <p className="opacity-80">Rua Werner Von Siemens, 111 - Lapa de Baixo - São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
