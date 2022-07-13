<script lang="ts">
  export let order;
</script>

<div>
  <div
    class="grid grid-cols-12 gap-4 bg-slate-50 py-2 px-8 rounded-md text-center uppercase my-3 shadow-md"
  >
    <div class="text-lg col-span-1">
      <h3>{order.order_no}</h3>
    </div>
    <div class="text-lg font-semibold col-span-4">
      <h3>{order.customer_name}</h3>
    </div>
    <div class="text-lg col-span-3">
      <h3>{order.time}</h3>
    </div>
    <div class="text-lg col-span-2">
      <div class="flex justify-center">
        <select
          class="form-select appearance-none
                   block
                   w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   bg-white bg-clip-padding bg-no-repeat
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   m-0
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected={order.status == "In progress"}>In Progress</option>
          <option selected={order.status == "Completed"}>Completed</option>
          <option selected={order.status == "Cancelled"}>Cancelled</option>
        </select>
      </div>
    </div>
    <div class="col-span-2">
      <a href="/app/order/1">
        <div class="flex justify-center">
          <button
            class="bg-[#FF8F00] bg-opacity-80 hover:bg-opacity-60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Details
          </button>
        </div>
      </a>
    </div>
  </div>
</div>
