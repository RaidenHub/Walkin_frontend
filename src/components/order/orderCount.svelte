<div class="orderCount">
  <div class="count">
    <span>Order Completed:</span>345<br />
    <span>Order Pending:</span>12<br />
  </div>
  <div class="completedOrders">
    <h3>Completed Orders</h3>
    <ul class="orderList">
      <li class="listItem">
        <span>123</span>Order Title<br />
      </li>
      <li class="listItem">
        <span>456</span>Order Title<br />
      </li>
      <li class="listItem">
        <span>789</span>Order Title<br />
      </li>
      <li class="listItem">
        <span>147</span>Order Title<br />
      </li>
      <li class="listItem">
        <span>258</span>Order Title<br />
      </li>
      <li class="listItem">
        <span>369</span>Order Title<br />
      </li>
    </ul>
  </div>
</div>

<style>
  .orderCount {
    background-color: #f5f5f5;
    width: max-content;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.6rem;
  }
  .count {
    width: 100%;
    height: 3rem;
    margin: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
  }
  .count > span {
    font-size: 1rem;
    font-weight: 300;
  }
  .count:first-child {
    font-weight: 600;
  }

  .completedOrders {
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  .completedOrders > h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .orderList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .listItem {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 0.5rem;
  }
</style>
