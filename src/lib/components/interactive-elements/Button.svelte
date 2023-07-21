<script lang="ts">
  type BtnStyleType = "" | "purple" | "blue" | "red" | "dark" | "darkBlue";
  // Button Props
  export let blockWidth: boolean = false;
  export let buttonType: BtnStyleType | string = "";
  export let isDisabled: boolean = false;
  export let buttonText: string = "+ Add Feedback";
  export let className: string = "";
  
  let buttonStyle = "";

  // Button style
  let darkStyle = "bg-productSoftDark hover:bg-opacity-70  text-white";
  let purpleStyle = "bg-productDarkPink hover:bg-opacity-70 text-white";
  let blueStyle = "bg-productBlue hover:bg-opacity-70  text-white";
  let darkBlue = "bg-productDarkBlue hover:bg-opacity-70  text-white";
  let redStyle = "bg-productRed hover:bg-opacity-70  text-white";
  //
  $: spacing = buttonType !== "" && "px-6 py-3";

  $: radius = buttonType !== "" && "rounded-[12px]";

  
  $: if (buttonType == "") {
    buttonStyle = "";
  } else if (buttonType == "purple") {
    buttonStyle = purpleStyle;
  } else if (buttonType == "red") {
    buttonStyle = redStyle;
  } else if (buttonType == "dark") {
    buttonStyle = darkStyle;
  } else if (buttonType == "blue") {
    buttonStyle = blueStyle;
  }
   else if (buttonType == "darkBlue") {
    buttonStyle = darkBlue;
  }
</script>

<button
  disabled={isDisabled}
  class:w-full={blockWidth}
  class="appearance-none outline-none flex items-center justify-center gap-x-2 {spacing} {radius} {className} {buttonStyle}"
>
  <span class="inline-block font-bold">{buttonText}</span>
</button>
