"use client"
import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import { Input, Textarea } from '@/components/forms/fields'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { contactSchema, type ContactInput } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) })
  const [serverError, setServerError] = useState<string>('')

  async function onSubmit(values: ContactInput) {
    setServerError('')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values)
    })
    if (res.ok) {
      reset()
    } else {
      const data = await res.json().catch(() => null)
      setServerError(data?.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <main id="content" className="bg-[color:var(--bg)] text-[color:var(--fg)]">
      <Section>
        <Container>
          <SectionHeader title="Contact us" subtitle="We typically respond within one business day." />
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="/api/contact"
            method="post"
            className="grid gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-soft md:grid-cols-2"
          >
            <label className="grid gap-1">
              <span className="text-sm text-muted-strong">Name</span>
              <Input placeholder="Ada Lovelace" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name')} />
              {errors.name && <span id="name-error" className="text-sm text-red-400">{errors.name.message}</span>}
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-muted-strong">Email</span>
              <Input type="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email')} />
              {errors.email && <span id="email-error" className="text-sm text-red-400">{errors.email.message}</span>}
            </label>
            <label className="grid gap-1 md:col-span-2">
              <span className="text-sm text-muted-strong">Company</span>
              <Input placeholder="Acme Inc." {...register('company')} />
            </label>
            <label className="grid gap-1 md:col-span-2">
              <span className="text-sm text-muted-strong">How can we help?</span>
              <Textarea rows={5} placeholder="Tell us about your goals" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message')} />
              {errors.message && (
                <span id="message-error" className="text-sm text-red-400">{errors.message.message as string}</span>
              )}
            </label>
            {/* Honeypot field: hidden from users */}
            <div className="hidden" aria-hidden>
              <Input tabIndex={-1} autoComplete="off" placeholder="Your website" {...register('website')} />
            </div>
            <div className="md:col-span-2">
              <Button variant="gradient" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}
              </Button>
              {isSubmitSuccessful && (
                <span className="ml-3 text-sm text-muted">Thanks — we’ll be in touch.</span>
              )}
              {serverError && <span className="ml-3 text-sm text-red-400">{serverError}</span>}
            </div>
          </form>
          <p className="mt-6 text-sm text-muted">
            Prefer email? hello@arctura-analytics.com • We keep your data private and only use it to
            respond to your inquiry.
          </p>
        </Container>
      </Section>
    </main>
  )
}
