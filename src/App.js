/*Copyright (c) Microsoft Corporation.
Licensed under the MIT license.*/

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
		message: 'Excuse me, are you lost?',
		trigger: '2',
	},
	{
		id: '2',
		user: true,
		trigger: '3',
	},
	{
		id: '3',
		message: 'I see that you are in front of my temple. How dare you disturb me!',
		trigger: '4',
	},
	{
		id: '4',
		user: true,
		trigger: '5',
	},
	{
		id: '5',
		message: "I've seen humans like you before. Destroy and steal, that's all they know to do. Why are you here?",
		trigger: '6',
	},
	{
		id: '6',
		user: true,
		trigger: '7',
	},
	{
		id: '7',
		message:
			'Are you foolish enough to try to learn the name of my temple? If you are here to clean the mess that others have made before you, I will allow it.',
		trigger: '8',
	},
	{
		id: '8',
		user: true,
		trigger: '9',
	},
	{
		id: '9',
		message: "I will even give you a clue as to my temple's name. Perhaps you will even learn who I am!",
		trigger: '10',
	},
	{
		id: '10',
		user: true,
		trigger: '11',
	},
	{
		id: '11',
		message:
			"The glyph with the lazy 'S' and dots around it means 'cloud'. I take care of clouds, they provide rain for the people and animals. Now stop bothering me, and be very careful about what you move!",
		end: true,
	},
];

const ThemedExample = () => (
	<ThemeProvider theme={otherFontTheme}>
		<React.StrictMode>
			<ChatBot style={chatbox} steps={steps} botAvatar="./chac-chel.png" botName="The deity" />
		</React.StrictMode>
	</ThemeProvider>
);

export default ThemedExample;
