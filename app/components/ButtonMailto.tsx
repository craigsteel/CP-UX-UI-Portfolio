import MailtoLink from './MailtoLink'; // Assuming MailtoLink component is in a separate file

function ButtonMailto() {
  return (
    <div>
      <MailtoLink email="info@craigparfitt.com" subject="Help Request">
        Send an Email
      </MailtoLink>
      <br />
      <MailtoLink
        email="info@craigparfitt.com"
        subject="Inquiry"
        body="I'm interested in your work"
      >
        Contact Me
      </MailtoLink>
    </div>
  );
}

export default ButtonMailto;