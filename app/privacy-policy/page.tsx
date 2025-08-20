import type { Metadata } from 'next';
// No reveal animations on this page
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Fractional Demand collects, uses, and protects your information, and the rights you have over your data.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-24 md:py-28">
          

          <div className="mx-auto max-w-2xl md:max-w-3xl space-y-6 text-white/80 text-lg md:text-xl leading-relaxed pt-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl md:max-w-3xl mx-auto">Effective Date: July 27, 2023</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Overview</h2>
          <p>
            This Privacy Policy describes how Fractional Demand ("we," "us," or "our") collects, uses, and shares
            personal information when you visit our website
            {' '}<a className="underline" href="https://www.fractionaldemand.com" target="_blank" rel="noopener">www.fractionaldemand.com</a>
            {' '}(the "Site") or engage with our services. By accessing or using the Site, you agree to the practices
            described in this Privacy Policy.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us, such as your name, email address,
            phone number, company name, and other details, when you:
          </p>
          <ul className="list-disc pl-6">
            <li>Sign up for our newsletter or updates.</li>
            <li>Contact us through the Site or other means of communication.</li>
            <li>Request information about our services.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">How We Use Your Information</h2>
          <p>We may use the personal information we collect for various purposes, including but not limited to:</p>
          <ul className="list-disc pl-6">
            <li>Providing and improving our services to you.</li>
            <li>Responding to your inquiries and requests.</li>
            <li>Sending periodic emails and newsletters related to our services.</li>
            <li>Analyzing and enhancing the user experience on our Site.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Data Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for the following:</p>
          <p>
            <strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website,
            conducting our business, or providing services to you. These third-party service providers are obligated to keep your information confidential and are not permitted to use it for any other purposes.
          </p>
          <p>
            <strong>Legal Requirements:</strong> We may disclose your information as required by law, governmental regulation, or legal process.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However,
            please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute data security.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Your Choices</h2>
          <p>
            You may choose not to provide certain personal information; however, doing so may limit your ability to access certain features of our Site or services.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Cookies and Similar Technologies</h2>
          <p>
            Our Site may use cookies and similar tracking technologies to enhance your experience. You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Links to Other Websites</h2>
          <p>
            Our Site may contain links to other websites. We are not responsible for the privacy practices or content of such third-party websites. We encourage you to read the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on our Site with the revised effective date.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at
            {' '}<a className="underline" href="mailto:gavinvt89@gmail.com">gavinvt89@gmail.com</a>.
          </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


