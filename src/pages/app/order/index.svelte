<script>
  import OrderCount from "../../../components/order/orderCount.svelte";
  import OrderList from "../../../components/order/orderList.svelte";
  import OrderSort from "../../../components/order/orderSort.svelte";
  import TopOrders from "../../../components/order/topOrders.svelte";
  import SingleOrder from "../../../components/order/singleOrder.svelte";
</script>

<section class="body">
  <div class="topOrders">
    <TopOrders />
  </div>

  <div class="content">
    <div class="container">
      <div class="order--sort">
        <OrderSort />
      </div>
      <div class="order--single">
        <!-- <OrderList /> -->
        <SingleOrder />
      </div>
      <div class="order--count">
        <OrderCount />
      </div>
    </div>
  </div>
</section>

<style>
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .topOrders {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .container {
    display: flex;
  }
  .order--sort {
    margin: 1rem;
  }
  .order--single {
    margin: 1rem;
    width: 100%;
    height: 10rem;
  }
  .order--count {
    margin: 1rem;
  }
</style>
