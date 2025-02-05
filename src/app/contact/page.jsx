"use client"

import { useState } from "react";
import RollbackButton from "@/components/RollbackButton";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  const [focusedField, setFocusedField] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const inputClasses = (fieldName) => `
    mt-1 block w-full rounded-lg border bg-black/50 
    text-white placeholder-white/50 p-3
    transition-all duration-300 ease-in-out
    ${focusedField === fieldName ? 
      'border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 
      'border-white/10'}
    focus:outline-none focus:border-white/50
    focus:shadow-[0_0_15px_rgba(255,255,255,0.2)]
  `;

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <RollbackButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden bg-black/40 border border-white/10 backdrop-blur-sm p-8 rounded-xl">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-gradient" />
            
            {/* Scanner line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
              animate={{
                y: ['-100%', '200%'],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 animate-pulse">
                  Contact Us
                </span>
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-white/80 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses('name')}
                  />
                </div>

                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-white/80 mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses('email')}
                  />
                </div>

                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-white/80 mb-2">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses('message')}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center py-3 px-4 
                    bg-white/10 hover:bg-white/20 
                    border border-white/20 hover:border-white/30
                    rounded-lg text-white font-medium
                    transition-all duration-300
                    hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
                    group"
                >
                  <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

