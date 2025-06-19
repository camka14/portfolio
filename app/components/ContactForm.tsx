"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          'personal_email',
          'template_f7ttfo5',
          form.current,
          'znJRojsfaXicH1TvH'
        )
        .then(
          () => {
            setMessage('Message sent successfully!');
            setIsLoading(false);
            form.current?.reset();
          },
          (error) => {
            setMessage('Failed to send message. Please try again.');
            setIsLoading(false);
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows={5} 
            required 
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-3 px-6 rounded-md font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-md ${
          message.includes('successfully') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}
