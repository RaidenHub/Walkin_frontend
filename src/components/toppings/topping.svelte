<script>
  export let topping;
</script>

<div>
  <div
    class="grid grid-cols-12 gap-4 bg-slate-50 py-4 px-8 rounded-md text-center uppercase my-3 shadow-lg"
  >
    <input
      id="checkbox-table-search-1"
      type="checkbox"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
    <div class="text-lg col-span-2">
      <h3>{topping.name}</h3>
    </div>
    <div class="text-lg font-semibold col-span-4">
      <h3>{topping.quantity}</h3>
    </div>
    <div class="text-lg col-span-4">
      <h3>{topping.category}</h3>
    </div>
    <div class="text-lg col-span-1">
      <h3>{topping.price}</h3>
    </div>
  </div>
</div>
