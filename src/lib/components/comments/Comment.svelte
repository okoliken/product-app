<script lang="ts">
	let reply: boolean = false;
    
</script>

<div class="flex flex-col mt-5 py-4 pr-2">
	<div class="flex gap-x-12">
		<div>
			<img
				class="max-h-[40px] max-w-[40px] rounded-full object-cover"
				src="https://source.unsplash.com/random/300x300"
				alt=""
			/>
		</div>

		<div class="flex items-start justify-start flex-col">
			<div class="flex items-center justify-between w-full">
				<div>
					<h3 class="text-productDarkPurple text-[18px] font-extrabold">Elijah Moss</h3>
					<span class="text-productDarkGray text-[16px] font-light">@hexagon.bestagon</span>
				</div>
				<button on:click={() => reply = !reply} class="text-productDarkBlue font-bold text-[13px] cursor-pointer">Reply</button>
			</div>

			<p class="text-productDarkGray font-light text-[16px] mt-5 text-justify">
				Also, please allow styles to be applied based on system preferences. I would love to be able
				to browse Frontend Mentor in the evening after my device’s dark mode turns on without the
				bright background it currently has.
			</p>

			{#if reply}
              <slot name="reply-comment" />
            {/if}
		</div>
	</div>

	<slot name="nested-comments" />
</div>
