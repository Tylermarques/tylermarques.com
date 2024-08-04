<script lang="ts">
	export let blog;
	import type { BlogPost } from '$lib/types/BlogPost';

	blog = blog as BlogPost;
</script>

<div class="flex flex-col p-[5%] border-2 border-gray-200 rounded-sm max-h-30">
	<article class="w-full">
		<a href="/blog/{blog.id}" class="text-lg text-gray-900 underline font-bold">{blog.title}</a>
		<p class="text-gray-600">{blog.body}</p>
	</article>
</div>
