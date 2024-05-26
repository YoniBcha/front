<template>
  <!-- <div class="text-blue-600 text-3xl text-center font-bold">CONTACT US</div> -->
  <!-- component -->
  <section class="text-white-600 body-font relative">
    <div class="absolute inset-0 bg-white-300 content-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31524.483087815785!2d38.71513031272523!3d9.012535660722982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b867dd850c4e3%3A0x2ac81e393f995660!2sLideta%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1715729531881!5m2!1sen!2set"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <form action="https://formspree.io/f/xzbnwkjg" method="POST">
      <div class="container px-5 py-24 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-blue-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Get in Touch!
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600"></p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            ></textarea>
          </div>
          <!-- Hidden input fields -->
          <input
            type="hidden"
            name="_subject"
            value="New feedback from your website"
          />
          <input
            type="hidden"
            name="_next"
            value="https://your-website.com/thank-you"
          />

          <button
            type="submit"
            class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Send
          </button>
          <p class="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
    </form>
  </section>
  <!--FOOTER-->
 
</template>
