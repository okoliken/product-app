<script lang="ts">
  import IconArrowDown from "$lib/components/icons/icon-arrow-down.svelte";
  let options = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  let selectedOption = "";

  let showSelectOption = false;
  let focusActiveClass = "border border-productDarkBlue";
</script>

<div class="relative">
  <button
    class="w-full"
    on:click={() => (showSelectOption = !showSelectOption)}
  >
    <div
      class:focusActiveClass={showSelectOption}
      class="rounded-[5px] py-2 px-5 bg-productSofterGray w-full min-h-[48px] mt-3
     cursor-pointer text-left"
      type="text"
    >
      <span class="inline-block transform translate-y-1">{selectedOption}</span>
    </div>
  </button>

  {#if showSelectOption}
    <div class="select-shade absolute w-full mt-3">
      <ul>
        {#each options as option}
          <li
            class="border-productDarkPurple cursor-pointertext-justify
          text-productDarkGray font-light hover:text-productDarkPink"
          >
            <button
            class="py-5 px-4"
              on:click={() => (
                (selectedOption = option),
                (showSelectOption = !showSelectOption)
              )}
            >
              {option}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .select-shade {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
    height: auto;
  }
</style>
