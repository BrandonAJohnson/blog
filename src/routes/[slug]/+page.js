// @ts-nocheck
import { error } from "@sveltejs/kit";
import * as config from '$lib/config.js';

export async function load({params}) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);
		const metadata = config.blogPosts.find(e => e.slug == params.slug)?.metadata;

		if (!metadata.published) {
			throw error(404, `Post not available ${params.slug}`);
		}

		return {
			content: post.default,
			slug: params.slug,
			metadata
		}
	}
	catch(e) {
		throw error(404, `Could not find post ${params.slug}`);
	}
}