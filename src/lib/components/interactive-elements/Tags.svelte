<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let tag: string = "";
  export let selectedTag: string = "";

  const dispatch = createEventDispatcher();
</script>

<button
  class:active={selectedTag === tag}
  on:click={() => dispatch("select", tag)}
  class="rounded-[12px] bg-productSoftGray py-[5px] cursor-pointer px-5 
  text-productDarkBlue capitalize hover:bg-[#CFD7FF] transition-all duration-100 ease-in"
>
  <span class="font-semibold text-[13px]">{tag}</span>
</button>

<style>
  .active {
    background-color: #4661e6;
    color: #fff;
  }
</style>


<!-- 
  ojirehprime-financial-services-limited@jobs.workablemail.com 
  team@kimoyo.co
  careers@io.co.za
-->