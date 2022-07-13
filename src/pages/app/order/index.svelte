<script>
  import OrderCount from "../../../components/order/orderCount.svelte";
  import OrderList from "../../../components/order/orderList.svelte";
  import OrderSort from "../../../components/order/orderSort.svelte";
  import TopOrders from "../../../components/order/topOrders.svelte";
  import SingleOrder from "../../../components/order/singleOrder.svelte";
  import Table from "../../../components/Table.svelte";
</script>

<!-- <section class=" h-sreen w-screen flex items-center justify-center flex-col">
  <div class="w-11/12 flex items-center justify-center">
    <TopOrders />
  </div>
  <div class="w-full h-full flex justify-center ">
    <div class="container flex">
      <div class="my-1 -ml-2">
        <OrderSort />
      </div>
      <div class="w-full m-1 h-40 mx-4">
        <SingleOrder />
      </div>
    </div>
  </div>
</section> -->
<section>
  <div class="grid grid-cols-12 gap-4">
    <div
      class="col-start-2 col-span-10  w-full h-20 mt-4 flex items-center justify-center"
    >
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-zinc-900">
        Order List
      </h1>
    </div>
    <div class="col-start-2 col-span-2 w-full h-80 mt-4">
      <OrderSort />
      <div
        class=" w-full h-32 flex flex-col mt-4 bg-white shadow-md rounded-md justify-center items-center"
      >
        <div class="text-xl font-medium  py-4 ">Completed:48</div>
        <div class="text-xl font-medium  py-4">Pending:12</div>
      </div>
    </div>
    <div
      class="col-start-4 col-span-8  w-full h-max mt-1 flex items-center justify-center"
    >
      <Table />
    </div>
  </div>
</section>
