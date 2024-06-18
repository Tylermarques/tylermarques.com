<script>
	export let blog;
</script>

<div class="flex flex-col p-5 border-2 border-gray-200 rounded-lg m-5">
	<article class="w-full p-4">
		<h3 class="text-lg text-gray-900 underline font-bold">{blog.title}</h3>
		<p class="text-gray-600">{blog.description}</p>
	</article>
</div>
