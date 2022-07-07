<script>
  import OrderCount from "../../../components/order/orderCount.svelte";
  import OrderList from "../../../components/order/orderList.svelte";
  import OrderSort from "../../../components/order/orderSort.svelte";
  import TopOrders from "../../../components/order/topOrders.svelte";
  import SingleOrder from "../../../components/order/singleOrder.svelte";
</script>

<section class=" h-sreen w-screen flex items-center justify-center flex-col">
  <div class="w-11/12 flex items-center justify-center">
    <TopOrders />
  </div>
  <div class="w-full h-full flex justify-center">
    <div class="container flex">
      <div class="my-1 -ml-2">
        <OrderSort />
      </div>
      <div class="w-full m-1 h-40 mx-4">
        <!-- <OrderList /> -->
        <SingleOrder />
      </div>
      <div class="m-1 -mr-2">
        <OrderCount />
      </div>
    </div>
  </div>
</section>
