// @ts-nocheck
import { json } from '@sveltejs/kit'
import * as config from '$lib/config.js';

async function getPosts() {
	let posts = []
	config.blogPosts.forEach((blogPost) => {
		const file = blogPost.file;
		const slug = file?.split('/').at(-1)?.replace('.md', '');
		if (file && slug) {
			const metadata = blogPost.metadata;
			const post = { ...metadata, slug }
			post.published && posts.push(post)
		}
	});

	posts = posts.sort((first, second) =>
   	new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}