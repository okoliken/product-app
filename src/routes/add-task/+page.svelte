<script lang="ts">
  import Card from "./../../lib/components/Card.svelte";
  import AddTaskIcon from "$lib/components/icons/add-task-icon.svelte";
  import Input from "$lib/components/form-elements/Input.svelte";
  import Textarea from "$lib/components/form-elements/Textarea.svelte";
  import Button from "$lib/components/interactive-elements/Button.svelte";
  import IconArrowLeft from "$lib/components/icons/icon-arrow-left.svelte";
  import Select from "$lib/components/form-elements/Select.svelte";
</script>

<div class="flex items-center justify-center flex-col max-w-xl mx-auto">
  <div class="mt-8">
    <div class="flex items-center gap-x-3">
      <IconArrowLeft />
      <a href="/">
        <Button buttonText="Go Back" />
      </a>
    </div>
    <Card className="mt-20">
      <div class="p-4 w-full" slot="content">
        <div class="absolute top-0 transform -translate-y-7">
          <AddTaskIcon />
        </div>
        <div class="mt-5">
          <h2 class="text-productDarkPurple text-[24px] font-bold">
            Create New Feedback
          </h2>

          <form>
            <div class="flex flex-col mt-4 py-3">
              <p class="text-productDarkPurple font-bold">Feedback Title</p>
              <span class="text-productDarkGray text-[14px] font-light"
                >Add a short, descriptive headline</span
              >

              <Input />
            </div>
            <div class="flex flex-col mt-4 py-3">
              <p class="text-productDarkPurple font-bold">Category</p>
              <span class="text-productDarkGray text-[14px] font-light"
                >Choose a category for your feedback</span
              >

              <Select />
            </div>
            <div class="flex flex-col mt-4 py-3">
              <p class="text-productDarkPurple font-bold">Feedback Detail</p>
              <span class="text-productDarkGray text-[14px] mb-3 font-light"
                >Include any specific comments on what should be improved,
                added, etc.</span
              >

              <Textarea />
            </div>

            <div class="flex justify-end w-full gap-x-4 py-5">
              <Button buttonType={"dark"} buttonText={"Cancel"} />

              <Button buttonType={"purple"} buttonText={"Add Feedback"} />
            </div>
          </form>
        </div>
      </div>
    </Card>
  </div>
</div>
