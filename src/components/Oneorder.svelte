<script>
     export let item;
     const date = new Date(item.createdAt);
     const order = [
      "mcAloo tikki",
      "mcveggie tikki",
      "cheese slices",
      "cheese dip",
     ]
     const quantity= [
      "1",
      "2",
      "1",
      "1",
     ]

</script>
<div class="grid grid-cols-12 bg-white text-slate-600 m-8 h-max p-3">
  <div class="col-span-1">
    <h3>{item._id.slice(-5)}</h3>
  </div>
  <div class="col-span-3">
    <h3>{item.customeName}</h3>
  </div>
  <div class="col-span-2 text-start pl-5 text-xl uppercase">
     {#each order as itemo}
      <h3>{itemo}</h3>
     {/each}  
  </div>
  <div class="col-span-1 text-start pl-5 text-xl uppercase">
     {#each quantity as itemo}
      <h3>{itemo}</h3>
     {/each}  
  </div>
  <div class="col-span-3">
    <h3>{date}</h3>
  </div>
  <div class="col-span-2 uppercase">
    <h3>{item.status}</h3>
  </div>
</div>