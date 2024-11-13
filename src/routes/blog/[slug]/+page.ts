export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (error) {
		throw error;
	}
}
