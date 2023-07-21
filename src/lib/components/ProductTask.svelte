<script lang="ts">
	import Card from '../../lib/components/Card.svelte';
	import Upvote from '../../lib/components/interactive-elements/Upvote.svelte';
	import Tags from '../../lib/components/interactive-elements/Tags.svelte';
	import Chat from '../../lib/components/comments/Chat.svelte';
</script>

<Card cardColor="bg-white" className="mt-4 min-h-[151px]">
	<div class="p-4 flex justify-between w-full" slot="content">
		<div class="flex w-full gap-x-12">
			<Upvote />
			<div class="h-full">
				<a href="/product-details/{2}">
					<h3
						class="text-productDarkPurple text-[18px] font-bold leading-[-0.25px] hover:underline cursor-pointer"
					>
						Add tags for solutions
					</h3>
				</a>
				<p class="text-productDarkGray text-[16px] mb-4 w-full font-light">
					Easier to search for solutions based on a specific stack.
				</p>

				<Tags tag={'Enhancement'} />
			</div>
		</div>

		<Chat />
	</div>
</Card>
