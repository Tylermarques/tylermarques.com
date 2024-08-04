<script lang="ts">
	import type { BlogPost } from '$lib/types/BlogPost';
	export let data;
	data = data as BlogPost;
</script>

<h1>{data.title}</h1>
<div>{@html data.body}</div>
