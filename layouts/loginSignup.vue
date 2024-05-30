<template>
  <div class="container1 w-full" :class="{ 'sign-up-mode': isSignUpMode }">
    <div class="forms-container1">
      <div class="signin-signup">
        <form class="sign-in-form shadow-2xl mx-auto rounded-lg bg-gray-50">
          <h2 class="title text-black">Sign in</h2>
          <authLogin />
        </form>
        <form
          class="sign-up-form shadow-2xl mx-auto px-2 rounded-lg bg-gray-50"
        >
          <h2 class="title text-black">Sign up</h2>
          <authSignup />
        </form>
      </div>
    </div>

    <div class="panels-container1">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Register now!
          </p>
          <button class="btn transparent" @click="switchToSignUpMode">
            Sign up
          </button>
        </div>
        <img src="../assets/illus/Sign up-pana.png" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
           Sign in if you have exising account!
          </p>
          <button class="btn transparent" @click="switchToSignInMode">
            Sign in
          </button>
        </div>
        <img src="../assets/illus/Sign in-pana.png" class="image" alt="" />
      </div>
    </div>
  </div>
  <div class="">
    <slot />
  </div>
</template>

<script>
import "~/assets/css/login_signup.css";
export default {
  data() {
    return {
      isSignUpMode: false,
    };
  },
  methods: {
    switchToSignUpMode() {
      this.isSignUpMode = true;
    },
    switchToSignInMode() {
      this.isSignUpMode = false;
    },
  },
};
</script>
