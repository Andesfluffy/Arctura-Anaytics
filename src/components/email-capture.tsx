'use client'

import { motion } from 'framer-motion'
import { Container } from './container'

export function EmailCapture() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f1f] via-[#160809] to-[#0a0a0a]" />
      
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[#ff4d4d]/10 blur-[120px]" />
      </div>
      
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to transform your
            <span className="block bg-gradient-to-r from-[#ff4d4d] via-[#ff6b00] to-white bg-clip-text text-transparent">
              data operations?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#ffded1] text-lg mb-8"
          >
            Join forward-thinking organizations that are already leveraging our expertise to drive their data strategy.
          </motion.p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#ff4d4d]/50"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff4d4d] to-[#ff6b00] text-white font-semibold hover:shadow-lg hover:shadow-[#ff4d4d]/20 transition-all duration-300"
            >
              Get Started
            </button>
          </motion.form>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 text-sm text-[#ffded1]/60"
          >
            Join 200+ companies already enhancing their data capabilities
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}