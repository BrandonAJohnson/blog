// @ts-nocheck
import { error } from "@sveltejs/kit";
import * as config from '$lib/config.js';

export async function load({params}) {
	try {
		const posts = config.blogPosts.filter(e => e.metadata.categories.indexOf(params.category) > -1);

		return {
			category: params.category,
			posts: posts
		}
	}
	catch(e) {
		throw error(404, `No current posts with the topic ${params.category}`);
	}
}
