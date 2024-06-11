import { dev } from "$app/environment";

export const title = 'Brandon\'s Blog';
export const description = 'A blog from a developer';
export const url = dev ? 'http://locahost:5173' : 'real_url';
export const blogPosts = [
	{
		file: '/src/posts/building-a-blog.md',
		slug: 'building-a-blog',
		metadata: {
			title: 'Building a Blog in 2024',
			author: 'Brandon Johnson',
			description: 'How/Why I made this blog site.',
			date: '6/8/2024',
			categories: ['svelte', 'markdown'],
			published: true
		}
	},
	{
		file: '/src/posts/why-svelte.md',
		slug: 'why-svelte',
		metadata: {
			title: 'Why Do I Like Svelte So Much Anyways?',
			author: 'Brandon Johnson',
			description: 'A breakdown of using Svelte for web development',
			date: '6/8/2024',
			categories: ['svelte'],
			published: true
		}
	}
]