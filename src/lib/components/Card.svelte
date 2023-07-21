<script lang="ts">
  export let cardColor: string = "bg-white";
  export let className: string = "";
  export let inlineStyle: string | null = null;
</script>

<div
  style={inlineStyle}
  class="{cardColor} {className} w-full px-6 py-4 rounded-[10px] flex relative"
>
  <slot name="content" />
</div>
