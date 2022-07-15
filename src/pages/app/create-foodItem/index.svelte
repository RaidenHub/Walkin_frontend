<div class="flex justify-center mt-8">
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Name
        </label>
        <input
          class="form-control  focus:border-blue-600 appearance-none block w-full bg-white border-black rounded py-3 px-4 mb-3 leading-tight "
          id="grid-first-name"
          type="text"
          placeholder="Food-item name"
        />
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>
    </div>
    <div class="form-group mb-6">
      <label
        class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Description
      </label>
      <textarea
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-black
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Description"
      />
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-full px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Image
        </label>
        <div class="flex justify-center">
          <input
            class="form-control
              block
              w-full
              px-4
              py-2
              text-base
              font-normal
              text-black
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Category
        </label>
        <input
          class="form-control  focus:border-blue-600 appearance-none block w-full bg-white text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="grid-first-name"
          type="text"
          placeholder="Category"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Sub-Category
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight"
          id="grid-last-name"
          type="text"
          placeholder="Sub-Category"
        />
      </div>
    </div>
    <div class="flex flex-wrap form-group -mx-3 mb-8">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-state"
        >
          Food Type
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-white border border-black text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Veg</option>
            <option>Non-Veg</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              ><path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              /></svg
            >
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-city"
        >
          Price
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="number"
          placeholder="$12.00"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-zip"
        >
          Quantity
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          placeholder="20"
        />
      </div>
    </div>
    <div class="flex flex-wrap form-group -mx-3 mb-4">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-zip"
        >
          No. of Free Toppings
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          placeholder="0"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-zip"
        >
          No. of Free Dips
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          placeholder="0"
        />
      </div>
    </div>
    <div class="flex flex-wrap form-group -mx-3 mb-4">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-zip"
        >
          No. of Free Sauces
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          placeholder="0"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
          for="grid-zip"
        >
          No. of Free Extras
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          placeholder="0"
        />
      </div>
    </div>
  </form>
</div>
