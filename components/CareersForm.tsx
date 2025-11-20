"use client";

import { useState, FormEvent } from 'react';
import Tilt from './Tilt';

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create form data
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      // In a real implementation, this would send to an API endpoint
      // For now, we'll use a mailto link as fallback
      const subject = encodeURIComponent(`Career Application from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:jordan@fractionaldemand.com,gavin@fractionaldemand.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', resume: null });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/60 resize-none"
          placeholder="Tell us about yourself and why you're interested in joining Fractional Demand"
        />
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-white mb-2">
          Resume (Optional)
        </label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
        />
        {formData.resume && (
          <p className="mt-2 text-sm text-white/60">{formData.resume.name}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200">
          Thank you! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Tilt>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-md btn-shine w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </Tilt>
    </form>
  );
}

