import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const otherFontTheme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#73c2fb',
	headerFontColor: '#000',
	headerFontSize: '16px',
	botBubbleColor: '#73c2fb',
	botFontColor: '#000',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
};

const chatbox = {
	margin: '40px',
};

const steps = [
	{
		id: '1',
		message: 'Hi there, how are you doing?',
		trigger: '2',
	},
	{
		id: '2',
		user: true,
		trigger: '3',
	},
	{
		id: '3',
		message: "Looks like you're somewhere in the jungle, I don't see your coordinates.",
		trigger: '4',
	},
	{
		id: '4',
		user: true,
		trigger: '5',
	},
	{
		id: '5',
		message: 'Do you need my help?',
		trigger: '6',
	},
	{
		id: '6',
		user: true,
		trigger: '7',
	},
	{
		id: '7',
		message: "I bet you've found a puzzling glyph.",
		trigger: '8',
	},
	{
		id: '8',
		user: true,
		trigger: '9',
	},
	{
		id: '9',
		message: "Does it look like a lazy 's' with dots around it?",
		trigger: '10',
	},
	{
		id: '10',
		user: true,
		trigger: '11',
	},
	{
		id: '11',
		message: "Oh, that's a good one. It means 'cloud'. Keep looking for new glyphs!",
		end: true,
	},
];

const ThemedExample = () => (
	<ThemeProvider theme={otherFontTheme}>
		<React.StrictMode>
			<ChatBot style={chatbox} steps={steps} botAvatar="./prof.png" />
		</React.StrictMode>
	</ThemeProvider>
);

export default ThemedExample;
