import { Mail, Download, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

export const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [resumeDownloading, setResumeDownloading] = useState(false);

  const handleEmail = async () => {
    const email = 'singhritu241101@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);

      window.location.href = `mailto:${email}`;
    } catch (err) {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleLinkedIn = () => {
    window.open(
      'https://www.linkedin.com/in/riitu-singh/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleResumeDownload = () => {
    setResumeDownloading(true);

    const link = document.createElement('a');
    link.href = '/resume/Ritu-Singh-Resume.pdf';
    link.download = 'Ritu-Singh-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setResumeDownloading(false), 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-[#f7f9fa]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Let's Work Together
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          I'm currently available for freelance work and full-time opportunities.
          Let's create something amazing!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="primary"
            leftIcon={emailCopied ? <CheckCircle size={20} /> : <Mail size={20} />}
            onClick={handleEmail}
            className="w-full sm:w-auto"
          >
            {emailCopied ? 'Email Copied!' : 'Email Me'}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleLinkedIn}
            className="w-full sm:w-auto"
          >
            Connect on LinkedIn
          </Button>

          <Button
            size="lg"
            variant="secondary"
            leftIcon={<Download size={20} />}
            onClick={handleResumeDownload}
            disabled={resumeDownloading}
            className="w-full sm:w-auto"
          >
            {resumeDownloading ? 'Downloading...' : 'Download Resume'}
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            📍 Based in Bengaluru, Karnataka, India
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Open to remote opportunities worldwide
          </p>
        </div>

      </div>
    </section>
  );
};


