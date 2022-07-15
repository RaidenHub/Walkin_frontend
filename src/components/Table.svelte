<script lang="ts">
  import { Orders } from "../generated/generated";
  import Tableitem from "./Tableitem.svelte";
  const token = localStorage.getItem("token") ?? "";
  console.log(token);
  $: items = Orders({
    variables: {
      token,
    },
  });
</script>

<div>
  <div
    class="grid grid-cols-12 shadow-lg gap-4 bg-[#FF8F00] bg-opacity-80 text-white py-4 px-8 rounded-md text-center uppercase my-3"
  >
    <div class="text-base font-light  col-span-1">
      <h3>Order No.</h3>
    </div>
    <div class="text-lg font-light col-span-4">
      <h3>Customers Name</h3>
    </div>
    <div class="text-lg col-span-3">
      <h3>Order time</h3>
    </div>
    <div class="text-lg col-span-2">
      <h3>Status</h3>
    </div>
  </div>
  {#each $items?.data?.getOrder || [] as item}
    <Tableitem order={item} />
  {/each}
</div>
