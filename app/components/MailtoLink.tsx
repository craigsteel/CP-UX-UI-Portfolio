import React from 'react';

interface MailtoProps {
  email: string;
  subject?: string;
  body?: string;
  children?: React.ReactNode;
}

const MailtoLink: React.FC<MailtoProps> = ({ email, subject, body, children }) => {
  let href = `mailto:${email}`;

  if (subject) {
    href += `?subject=${encodeURIComponent(subject)}`;
  }

  if (body) {
    href += `&body=${encodeURIComponent(body)}`;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children || 'Contact Us'}
    </a>
  );
};

export default MailtoLink;