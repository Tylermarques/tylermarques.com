<script lang="ts">
	import posthog from 'posthog-js';
	function handleOnMouseOver(event: MouseEvent) {
		event.target.src = '/puppy-upscaled.jpeg';
		posthog.capture('saw-dog', { property: '' });
	}
</script>

<div class=" flex lg:flex-row flex-col">
	<div id="crop" class=" overflow-hidden rounded-lg justify-center">
		<img
			on:mouseover={handleOnMouseOver}
			on:mouseleave={(this.src = '/headshot-with-puppy-cropped.jpg')}
			alt="Man with puppy."
			src="/headshot-with-puppy-cropped.jpg"
		/>
	</div>
	<div class="p-8">
		<p>
			I love to build and maintain growing products, focusing heavily in the AI space. I'm always
			looking for new challenges. In my day-to-day I help my clients build quickly and for future
			growth.
		</p>
		<p>
			I'm not active on social media, but you can find ME @ this domain if you want to connect!
			(Sorry, the robots are constantly sniffing out new spam targets)
		</p>
	</div>
</div>

<style>
	#crop {
		height: 300px;
		overflow: hidden;
	}
</style>
