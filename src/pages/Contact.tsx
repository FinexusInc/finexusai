import React from 'react';
import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type FormData = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const { toast } = useToast()
  const form = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: "YOUR-ACCESS-KEY", // You'll need to replace this with your Web3Forms access key
          name: data.name,
          email: data.email,
          message: data.message,
          to: "avinash@finexusinc.com"
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully",
          description: "We'll get back to you soon!",
        })
        form.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </header>
      
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">Contact Us</h2>
            <p className="text-gray-600 text-center mb-12">
              Financing Solution Provider Support
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Write to us</h3>
                <p className="text-gray-600">contact@finexusinc.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Give us a call</h3>
                <p className="text-gray-600">+1 (781) 752-5204</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Our Locations</h3>
                <p className="text-gray-600">US & India</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-sm">
              <div>
                <h3 className="font-semibold text-lg mb-4">Head Office</h3>
                <p className="text-gray-600">
                  4597 Donalbain Circle,<br />
                  Fremont, CA 94555<br />
                  United States
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Development Center</h3>
                <p className="text-gray-600">
                  416, Amanora Park Town Main Rd,<br />
                  Amanora Chambers, Hadapsar,<br />
                  Pune, Maharashtra, India 411028
                </p>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-sm mt-12">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;