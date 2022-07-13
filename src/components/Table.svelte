<script>
  // lang=ts
  import Tableitem from "./Tableitem.svelte";
  let items = [
    {
      order_no: "1",
      customer_name: "John Doe",
      time: "12:00",
      status: "Completed",
    },
    {
      order_no: "2",
      customer_name: "Mayuresh Nivatkar",
      time: "12:00",
      status: "Completed",
    },
    {
      order_no: "3",
      customer_name: "Mayuresh Nivatkar",
      time: "12:00",
      status: "Completed",
    },
    {
      order_no: "4",
      customer_name: "Mayuresh Nivatkar",
      time: "12:00",
      status: "Completed",
    },
    {
      order_no: "5",
      customer_name: "Mayuresh Nivatkar",
      time: "12:00",
      status: "Completed",
    },
    {
      order_no: "2",
      customer_name: "Mayuresh Nivatkar",
      time: "12:00",
      status: "Completed",
    },
    {
      order_no: "2",
      customer_name: "Mayuresh Nivatkar",
      time: "12:00",
      status: "Completed",
    },
    {
      order_no: "2",
      customer_name: "Mayuresh Nivatkar",
      time: "12:00",
      status: "Completed",
    },
  ];
</script>

<div>
  <div
    class="grid grid-cols-12 gap-4 bg-slate-700 text-slate-300 py-4 px-8 rounded-md text-center uppercase my-3"
  >
    <div class="text-lg col-span-1">
      <h3>Order No.</h3>
    </div>
    <div class="text-lg font-semibold col-span-4">
      <h3>Customers Name</h3>
    </div>
    <div class="text-lg col-span-3">
      <h3>Order time</h3>
    </div>
    <div class="text-lg col-span-2">
      <h3>Status</h3>
    </div>
  </div>
  {#each items as item}
    <Tableitem order={item} />
  {/each}
</div>
