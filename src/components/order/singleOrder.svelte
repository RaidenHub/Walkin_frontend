<div class="accordion accordion-flush " id="accordionFlushExample">
  <div
    class="accordion-item  border-t-0 border-l-0 border-r-0 rounded-none bg-medium border border-gray-200"
  >
    <div class="accordion-header mb-0" id="flush-headingOne">
      <div class=" w-full flex justify-around items-center rounded-lg">
        <div class="w-1/4  flex items-center justify-around">
          <div class="text-lg mr-52"><h2>879</h2></div>
          <div class="text-xl   text-black flex  ">
            <span>Order ID: 4658123549</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-sm mx-8">
            <h3>47 minutes ago</h3>
          </div>
          <div class="flex items-center justify-around mx-8">
            <label
              class="w-20 h-20 text-lg flex items-center justify-around"
              for="progress">Progress:</label
            >
            <select class="w-32 h-12 m-4 " id="progress">
              <option>In Progress</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          <button
            class="accordion-button relative h-16
            flex
            items-center
            w-32
            py-4
            px-5
            text-base text-gray-800 text-left
            bg-medium
            border-0
            rounded-none
            transition
            focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Details
          </button>
        </div>
      </div>
    </div>
    <div
      id="flush-collapseOne"
      class="accordion-collapse border-0 collapse show h-32 bg-lightest"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body py-4 px-5">
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> class. This is the first item's accordion
        body.
      </div>
    </div>
  </div>
</div>

<style>
  .accordion-button {
    overflow-anchor: none;
  }
  .accordion-button:not(.collapsed) {
    color: #000000;

    background-color: rgb(104 255 146);
    box-shadow: inset 0 -1px 0 #e5e7eb;
  }
</style>
