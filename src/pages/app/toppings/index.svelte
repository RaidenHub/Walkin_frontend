<script>
  import Topping from "../../../components/toppings/topping.svelte";
  let toppings = [
    {
      name: "Lettuce",
      quantiy: 20,
      category: "Vegetables",
      price: 10,
    },
    {
      name: "Lettuce",
      quantiy: 20,
      category: "Vegetables",
      price: 10,
    },
    {
      name: "Lettuce",
      quantiy: 20,
      category: "Vegetables",
      price: 10,
    },
  ];
</script>

<div class="w-5/6 mx-auto">
  <div class="relative overflow-x-auto sm:rounded-lg">
    <div
      class="grid grid-cols-12 gap-4 bg-slate-700 text-slate-300 py-4 px-8 rounded-md text-center uppercase my-3"
    >
      <div class="text-lg col-span-1">
        <h3>Topping Name.</h3>
      </div>
      <div class="text-lg font-semibold col-span-4">
        <h3>Quantity</h3>
      </div>
      <div class="text-lg col-span-3">
        <h3>Category</h3>
      </div>
      <div class="text-lg col-span-2">
        <h3>Price</h3>
      </div>
    </div>
    {#each toppings as topping}
      <Topping {topping} />
    {/each}
  </div>

  <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
</div>
