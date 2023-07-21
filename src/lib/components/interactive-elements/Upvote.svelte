<script lang="ts">
  import IconArrowUp from "../icons/icon-arrow-up.svelte";

  let isActive = false;
  let num = 112;
</script>

<button
  on:click={() => ((isActive = !isActive), num += 1)}
  class:active={isActive}
  class="bg-[#F2F4FE] max-w-[48px] w-full cursor-pointer max-h-[65px] gap-y-2 hover:bg-[#CFD7FF] 
  transition-all duration-100 ease-in flex items-center justify-center flex-col rounded-[10px]"
>
  <IconArrowUp {isActive} />
  <p
    class:text-white={isActive}
    class="text-productDarkPurple text-[13px] font-bold"
  >
    {num}
  </p>
</button>

<style>
  .active {
    background-color: #4661e6;
  }
</style>
