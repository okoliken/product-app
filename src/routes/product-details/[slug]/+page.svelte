<script lang="ts">
	import IconArrowLeft from './../../../lib/components/icons/icon-arrow-left.svelte';
	import AddComment from './../../../lib/components/comments/AddComment.svelte';
	import Comment from './../../../lib/components/comments/Comment.svelte';
	import Card from './../../../lib/components/Card.svelte';
	import ProductTask from './../../../lib/components/ProductTask.svelte';
	import Button from './../../../lib/components/interactive-elements/Button.svelte';

	import { blur } from 'svelte/transition';
</script>

<div class="flex items-center justify-center flex-col w-full mt-24">
	<main class=" w-full max-w-[820px]">
		<div class="flex items-center justify-between w-full">
			<div class="flex items-center flex-row-reverse gap-x-3">
        <a href="/">
          <Button buttonText="Go Back" />
        </a>

        <IconArrowLeft />
      </div>
			<Button buttonType="darkBlue" buttonText="Edit Feedback" />
		</div>

		<div class="mt-7">
			<ProductTask />

			<Card className="my-5">
				<div slot="content">
					<p class="text-productDarkPurple text-[22px] font-extrabold">4 Comments</p>

					<div class="flex items-center justify-center flex-col">
						<Comment>
							<div transition:blur={{ amount: 10 }} class="w-full mt-4" slot="reply-comment">
								<AddComment
									width={'w-full max-w-[516px]'}
									buttonText={'Post Reply'}
									flexDirection={'justify-between'}
								/>
							</div>
							<div class="pl-12" slot="nested-comments">
								{#each Array(6) as i}
									<Comment>
										<div transition:blur={{ amount: 10 }} class="w-full mt-4" slot="reply-comment">
											<AddComment
												width={'w-full max-w-[480px]'}
												buttonText={'Post Reply'}
												flexDirection={'justify-between'}
											/>
										</div>
									</Comment>
								{/each}
							</div>
						</Comment>
					</div>
				</div>
			</Card>

			<Card className={'my-5'}>
				<div class="py-1 px-5 w-full" slot="content">
					<div class="mb-6">
						<h3 class="text-productDarkPurple font-bold text-[18px]">Add Comment</h3>
					</div>
					<AddComment>
						<p slot="characters-left" class="text-productDarkGray">225 characters left</p>
					</AddComment>
				</div>
			</Card>
		</div>
	</main>
</div>
