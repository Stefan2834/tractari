import React from 'react';

const EmailRedirect = () => {
    const handleSendEmail = () => {
        const recipient = "iosifs617@gmail.com";
        const subject = "Hello from Next.js";
        const body = "This is a pre-filled email body for testing purposes.";
        const mailtoLink = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div>
            <h1>Email Redirect Example</h1>
            <button onClick={handleSendEmail}>Send Email</button>
        </div>
    );
};

export default EmailRedirect;


