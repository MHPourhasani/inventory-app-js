/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		extend: {
			borderWidth: { 1: '1px' },
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
