export const SITE = {
	title: 'JavaScript Regenerated',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	machines: [
		{ text: 'YieldMachine', header: true },
		{ text: 'Introduction', link: 'machines' },
		{ text: 'Primitives', link: 'machines/primitives' },
		{ text: 'Working with promises', link: 'machines/promises' },
		{ text: 'Entry and exit callbacks', link: 'machines/entry-exit' },
		{ text: 'Reading properties from the received event', link: 'machines/event-props' },
		{ text: 'Listening to external events', link: 'machines/external-events' },
		{ text: 'Nested machines', link: 'machines/nested-machines' },
		{ text: 'Examples', link: 'machines/examples' },
		{ text: 'Annotated source', link: 'machines/source' },
	],
	parser: [
		{ text: 'YieldParser', header: true },
		{ text: 'Introduction', link: 'parser' },
		{ text: 'Routes', link: 'parser/routes' },
		{ text: 'HTTP Helpers', link: 'parser/routes' },
	],
	en: [
		{ text: 'Section Header', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Page 2', link: 'en/page-2' },
		{ text: 'Page 3', link: 'en/page-3' },

		{ text: 'Another Section', header: true },
		{ text: 'Page 4', link: 'en/page-4' },
	]
};
