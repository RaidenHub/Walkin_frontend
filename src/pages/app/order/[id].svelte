<script>
  import { params } from "@roxi/routify";
  console.log($params); /** {userId: 123, postId: 456} **/
  let order = [
    {
      number: 12,
      customerName: "John Doe",
      orderDetails: [
        {
          itemName: "Item 1",
          itemPrice: 100,
          itemQuantity: 1,
        },
        {
          itemName: "Item 2",
          itemPrice: 200,
          itemQuantity: 2,
        },
      ],
      orderTime: "12:00",
      orderStatus: "Completed",
    },
  ];
</script>

<div class="grid grid-cols-12 m-8 bg-black text-white h-fit p-3">
  <div class="col-span-1">
    <h3>Order No.</h3>
  </div>
  <div class="col-span-4">
    <h3>Customers Name</h3>
  </div>
  <div class="col-span-4">
    <h3>Order Details</h3>
  </div>
  <div class="col-span-1">
    <h3>Order Time</h3>
  </div>
  <div class="col-span-2">
    <h3>Order Status</h3>
  </div>
</div>
<div class="grid grid-cols-12 bg-white text-slate-600 m-8 h-max p-3">
  <div class="col-span-1">
    <h3>12</h3>
  </div>
  <div class="col-span-4">
    <h3>John Doe</h3>
  </div>
  <div class="col-span-4">
    <h3>Item 1</h3>
    <h3>Item 2</h3>
  </div>
  <div class="col-span-1">
    <h3>12:00</h3>
  </div>
  <div class="col-span-2">
    <h3>Completed</h3>
  </div>
</div>
