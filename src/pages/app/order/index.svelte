<script lang="ts">
  import OrderSort from "../../../components/order/orderSort.svelte";
  import Table from "../../../components/Table.svelte";
</script>

<section>
  <div class="grid grid-cols-12 gap-4">
    <div
      class="col-start-2 col-span-10  w-full h-20 mt-4 flex items-center justify-center"
    >
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-zinc-900">
        Order List
      </h1>
    </div>
    <div
      class="xl:col-start-2 xl:col-span-2 md:gap-8 xl:mt-4 xl:w-full xl:h-80  md:col-span-12 md:px-8 flex xl:flex-col items-center justify-center"
    >
      <OrderSort />
      <div
        class="md:h-40 md:w-72 xl:w-72 xl:h-32 flex flex-col  bg-white shadow-lg rounded-md justify-center items-center"
      >
        <div class="text-xl font-medium  py-4 ">Completed:3</div>
        <div class="text-xl font-medium  py-4">Pending:2</div>
      </div>
    </div>
    <div
      class="xl:col-start-4 xl:col-span-8 md:col-span-12 md:px-8 xl:w-full xl:h-max flex items-center justify-center"
    >
      <Table />
    </div>
  </div>
</section>
