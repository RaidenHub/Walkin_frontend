<script lang="ts">
     import LogoButton from "../lib/LogoButton.svelte";
     import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte'
     import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
     import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
     import logo from "../assets/logo.svg";
     import sign_in from "../assets/hello.svg";
     import { url } from '@roxi/routify'
</script>

<section class="h-screen">
     <div class="px-6 h-full text-gray-800">
       <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
         <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
           <img
             src={sign_in}
             class="w-full"
             alt="login"
           />
         </div>
         <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 text-xl px-36">
          <div class="flex w-full justify-center mb-16">
               <img src={logo} alt="logo" />
          </div>
           <form>
             <div class="flex flex-row items-center justify-center lg:justify-start">
               <p class="text-2xl mb-0 mr-4">Sign in with</p>
               <LogoButton>
                    <FaFacebookF/>
               </LogoButton>
               <LogoButton>
                    <FaTwitter/>
               </LogoButton>
               <LogoButton>
                    <FaLinkedinIn/>
               </LogoButton>
             </div>
   
             <div
               class="flex items-center my-6 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
             >
               <p class="text-center font-semibold mx-4 mb-0">Or</p>
             </div>
   
             <!-- Email input -->
             <div class="mb-9">
               <input
                 type="text"
                 class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="exampleFormControlInput2"
                 placeholder="Email address"
               />
             </div>

             <div class="mb-9">
               <input
                 type="text"
                 class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="exampleFormControlInput2"
                 placeholder="User name"
               />
             </div>
   
             <!-- Password input -->
             <div class="mb-9">
               <input
                 type="password"
                 class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="exampleFormControlInput2"
                 placeholder="Password"
               />
             </div>
   
             <div class="flex justify-between items-center mb-6">
               <div class="form-group form-check">
                 <input
                   type="checkbox"
                   class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                   id="exampleCheck2"
                 />
                 <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                   >Remember me</label
                 >
               </div>
               <a href="#!" class="text-gray-800">Forgot password?</a>
             </div>
   
             <div class="text-center lg:text-left">
               <a href={$url('./app/order')}>
               <button
                 type="button"
                 class="inline-block px-7 py-3 bg-blue-500 text-white font-medium text-md leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
               >
                 Register
               </button>
               </a>
               <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                 have an account?
                 <a
                   href={$url('./')}
                   class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                   >Login</a
                 >
               </p>
             </div>
           </form>
         </div>
       </div>
     </div>
   </section>