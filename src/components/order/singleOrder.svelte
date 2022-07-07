<div class="singleOrder">
  <div class="orderDetails">
    <h3>879</h3>
    <h1>Order Number</h1>
  </div>
  <div class="orderTime">47 minutes ago</div>
  <div class="orderProgress">
    <label for="progress">Progress:</label>
    <select class="form-control" id="progress">
      <option>In Progress</option>
      <option>Completed</option>
      <option>Cancelled</option>
    </select>
  </div>
</div>

<style>
  .singleOrder {
    background-color: #ffffff;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .orderDetails {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .orderTime {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .orderProgress {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #00bcd4;
  }
  .orderProgress > label {
    width: 5rem;
    height: 3rem;
    margin: 1rem;
    margin-top: 1.5rem;
    margin-left: 2.2rem;
  }
  .form-control {
    width: 8rem;
    height: 3rem;
    margin: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
  }
</style>
