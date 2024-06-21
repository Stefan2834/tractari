// import React from 'react';

// const EmailRedirect = () => {
//     const handleSendEmail = () => {
//         const recipient = "iosifs617@gmail.com";
//         const subject = "Hello from Next.js";
//         const body = "This is a pre-filled email body for testing purposes.";
//         const mailtoLink = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//         window.location.href = mailtoLink;
//     };

//     return (
//         <div>
//             <h1>Email Redirect Example</h1>
//             <button onClick={handleSendEmail}>Send Email</button>
//         </div>
//     );
// };

// export default EmailRedirect;

import React from "react";


import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MessageIcon from '@mui/icons-material/Message';



export default function test() {

	const message = React.useRef("");
	return (
		<>
			<TextField
				id="standard-multiline-static"
				label="Mesajul tău..."
				multiline
				required
				onChange={(e) => (message.current = e?.target?.value)}
				sx={{
					width: "100%",
					boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
					borderRadius: "8px",
					backgroundColor: "#fcfcfc",
				}}
				rows={12}
				variant="outlined"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<MessageIcon />
						</InputAdornment>
					),
				}}
			/>
		</>
	);
}
