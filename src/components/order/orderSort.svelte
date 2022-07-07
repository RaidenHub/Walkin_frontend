<div class="orderSort">
  <form action="">
    <div class="form-group">
      <label for="sort">Sort by:</label>
      <select class="form-control" id="sort">
        <option>Newest</option>
        <option>Oldest</option>
        <option>Most Popular</option>
        <option>Least Popular</option>
      </select>
    </div>
    <div class="form-group2">
      <label for="type">Veg/Non Veg:</label>
      <select class="form-control" id="type">
        <option>All</option>
        <option>Veg</option>
        <option>Non Veg</option>
      </select>
    </div>
  </form>
</div>

<style>
  .orderSort {
    background-color: #f5f5f5;
    width: max-content;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.6rem;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-group > label {
    width: 5rem;
    height: 3rem;
    margin: 1rem;
    padding-bottom: 1rem;
    margin-left: 2.2rem;
  }
  .form-group2 {
    margin-bottom: 1rem;
  }
  .form-group2 > label {
    margin-left: 0.5rem;
  }
  .form-control {
    width: 8rem;
    height: 3rem;
    margin: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
  }
</style>
