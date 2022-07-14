<script>
  import { params } from "@roxi/routify";
import Oneorder from "../../../components/Oneorder.svelte";
import { orderId } from "../../../generated/generated";
  console.log($params); 
  $: order = orderId({
    variables: {
      token: localStorage.getItem("token") ?? "",
      id: $params.id
    }
  });
</script>

<div class="text-center">
<div class="grid grid-cols-12 m-8 bg-black text-white h-fit p-3">
  <div class="col-span-1">
    <h3>Order No.</h3>
  </div>
  <div class="col-span-3">
    <h3>Customers Name</h3>
  </div>
  <div class="col-span-3">
    <h3>Order Details</h3>
  </div>
  <div class="col-span-3">
    <h3>Order Time</h3>
  </div>
  <div class="col-span-2">
    <h3>Order Status</h3>
  </div>
</div>
{#if $order?.data?.getOrderById}
<Oneorder item={$order?.data?.getOrderById} />
{/if}
</div>
