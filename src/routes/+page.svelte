<script lang="ts">
	import '../app.css';
	import Card from '../lib/components/Card.svelte';
	import Button from '../lib/components/interactive-elements/Button.svelte';
	import Tags from '../lib/components/interactive-elements/Tags.svelte';
	import Chip from '../lib/components/interactive-elements/Chip.svelte';
	import SuggestionIcon from '../lib/components/icons/suggestion-icon.svelte';
	import SortMenu from '../lib/components/interactive-elements/SortMenu.svelte';
	import Upvote from '../lib/components/interactive-elements/Upvote.svelte';
	import Chat from '../lib/components/comments/Chat.svelte';
	import ProductTask from '../lib/components/ProductTask.svelte';
	import EmptyState from '../lib/components/Empty-state.svelte';

	//
	let inlineStyle = 'background: linear-gradient(150deg, #AD1FEA, #4661E6, #F49F85)';

	// tag selection
	let tags = ['All', 'UX', 'UI', 'Enhancement', 'Bug', 'Feature'];
	let selectedTag = 'All';
	let isEmpty = false;

	const selectTag = (tag: any) => {
		selectedTag = tag.detail;
	};

	let tasks = [
		{
			title: 'Planned',
			progress: 1
		},
		{
			title: 'In-Progress',
			progress: 2
		},
		{
			title: 'Live',
			progress: 4
		}
	];

	const taskChipColor = (taskTitle: string): string => {
		if (taskTitle.toLowerCase() == 'planned') return 'bg-productOrange';
		else if (taskTitle.toLowerCase() == 'in-progress') return 'bg-productDarkPink';
		else return 'bg-productBlue';
	};
	//
	// @ts-ignore
	// const linkTag: ComponentType = Link;
</script>

<div class="container mx-auto px-12">
	<div class="grid grid-cols-12 mt-16 place-content-center gap-x-6">
		<div class="col-span-4 p-2">
			<Card {inlineStyle} className="min-h-[180px] flex items-end">
				<div class="ml-5 transform -translate-y-8" slot="content">
					<h3 class="text-[20px] font-bold text-white">Frontend Mentor</h3>
					<p class="text-[15px] text-white font-medium">Feedback Board</p>
				</div>
			</Card>

			<Card className="mt-4 min-h-[180px]">
				<div class="flex items-center gap-x-5 flex-wrap px-4" slot="content">
					{#each tags as tag}
						<Tags on:select={(e) => selectTag(e)} {tag} {selectedTag} />
					{/each}
				</div>
			</Card>
			<Card className="mt-4 min-h-[180px]">
				<div class="w-full" slot="content">
					<div class="flex items-center justify-between">
						<p class="text-productDarkPurple text-[18px] font-bold leading-normal">Roadmap</p>

						<p class="text-productDarkBlue underline capitalize">view</p>
					</div>

					<div class="mt-6">
						{#each tasks as task, index}
							<div class="w-full flex items-center justify-between mb-2 p-1">
								<div class="flex items-center gap-x-4">
									<Chip chipColor={taskChipColor(task.title)} />
									<p class="text-productDarkGray text-[16px] font-light">
										{task.title}
									</p>
								</div>

								<p class="text-productDarkGray font-bold text-[16px]">
									{task.progress}
								</p>
							</div>
						{/each}
					</div>
				</div>
			</Card>
		</div>
		<div class="col-span-8 p-2">
			<Card className="min-h-[72px]" cardColor="bg-productSoftDark">
				<div class="flex items-center justify-between w-full px-3" slot="content">
					<div class="flex items-center gap-x-8">
						<div class="flex items-center gap-x-3">
							<SuggestionIcon />
							<p class="text-white text-[18px] font-bold">6 suggestions</p>
						</div>

						<SortMenu />
					</div>
					<a href="/add-task">
						<Button buttonType={'purple'} />
					</a>
				</div>
			</Card>

			{#each Array(6) as items, index}
				<ProductTask />
			{:else}
				<div class="bg-white mt-4 w-full min-h-[600px] rounded-[10px] p-4">
					<EmptyState />
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- product-design/ -->
