import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      contact_number: "",
      message: "",
    },
  });

  const onSubmit = async(data: ContactFormData) => {
    console.log("Form submitted with data:", data);
    try{
      const payload = {
      name: data.name,
      email: data.email,
      contact_number: data.contact_number,
      message: data.message,
    };
    console.log("Payload to be sent:", payload);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response status:", response.status);

    if (response.ok){
  toast({
        title:"Message sent!",
        description:"Thank you for your message. I'll get back to you soon.",  
      });
    form.reset();
    }
  }
    catch (error){
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    }
    };


  return (
    <section id="contact" className="min-h-screen py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-sf font-light text-foreground mb-20"
        >
          Contact
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-card border-2 border-border dark:border-border/40 rounded-2xl">
            <CardContent className="p-12">
              <p className="text-base font-sf text-foreground mb-12">
                Let's work together to bring your ideas to life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="text-lg font-sf font-medium text-foreground mb-6">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-4" />
                      <span className="text-foreground font-sf text-sm">hotlemonadesauce@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-4" />
                      <span className="text-foreground font-sf text-sm">+91 8590139774</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-lg font-sf font-medium text-foreground mb-6">Follow me</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/FarsinRex" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20">
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/farsin-pangat-128b9918a/" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    </a>
                    <a href="https://wa.me/+918590139774" target="_blank" rel="noopener noreferrer">
  <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20">
    <FaWhatsapp className="w-5 h-5" />
  </Button>
</a>

                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-sf text-sm">Your Name</Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      className="mt-2 bg-background/50 border-border/50 font-sf text-sm text-black placeholder:text-muted-foreground"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-xs font-sf mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground font-sf text-sm">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="mt-2 bg-background/50 border-border/50 font-sf text-sm text-black placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-xs font-sf mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="contact_number" className="text-foreground font-sf text-sm">Contact Number</Label>
                  <Input
                    id="contact_number"
                    {...form.register("contact_number")}
                    className="mt-2 bg-background/50 border-border/50 font-sf text-sm text-black placeholder:text-muted-foreground"
                    placeholder="Your contact number"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-sf text-sm">Your Message</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={6}
                    className="mt-2 bg-background/50 border-border/50 font-sf text-sm !text-black placeholder:text-muted-foreground"
                    placeholder="Tell me about your project..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-xs font-sf mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  onClick={() => console.log("Button clicked")}
                  className="w-full bg-primary hover:bg-primary/80 text-white font-sf text-sm"> Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}