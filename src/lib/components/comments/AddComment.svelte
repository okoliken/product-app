<script lang="ts">
	import Button from './../../../lib/components/interactive-elements/Button.svelte';
	import Textarea from './../../../lib/components/form-elements/Textarea.svelte';

	export let flexDirection: string = 'flex-col';
	export let buttonText: string = 'Post Comment';
	export let width: string = 'w-full';



	$: slotClasses = $$slots['characters-left'] ? 'flex items-center justify-between mt-5' : null;
</script>

<div class="flex {flexDirection}">
	<Textarea {width} />

	<div class={slotClasses}>
		<slot name="characters-left" />
		<Button buttonType={'purple'} {buttonText} />
	</div>
</div>
