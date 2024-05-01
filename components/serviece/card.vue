<template>
  <div class="shopping-cart">
    <ul class="cart-items w-[177px] h-40 relative">
      <div class="absolute top-2 left-2 z-10">
        <button><slot name="discount-percentage"></slot></button>
      </div>
      <!-- heart and eye icon -->
      <div class="absolute top-2 right-2 flex flex-col text-2xl z-10">
        <i class="bx bx-heart rounded-full"></i>
        <i class="bx bx-show rounded-full mt-6"></i>
      </div>

      <div class="w-[80%] mx-auto mt-2">
        <slot name="image"></slot>
      </div>
    </ul>

    <div class="product-info h-32">
      <h3 class="product-name font-semibold">
        <slot name="product-name"></slot>
      </h3>
      <p class="product-price">
        <slot name="product-price"></slot>
        <span><slot name="privious-price"></slot></span>
      </p>
      <p class="text-[#ffad33]">
        <i class="bx bx-star"></i><i class="bx bx-star"></i
        ><i class="bx bx-star"></i><i class="bx bx-star"></i
        ><i class="bx bx-star text-black"></i
        ><span class="text-gray-600 ml-3">(88)</span>
      </p>
    </div>
    <div class="card-content">
      <button class="add-button">Add to chart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardView",
};
</script>

<style scoped>
.shopping-cart {
  position: relative;
  border-radius: 6px;
  width: 180px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.5s ease;
  margin: 10px 20px;
}
.cart-items button {
  background-color: #db4444;
  color: white;
  width: 60px;
  margin: 0 0.1rem;
  padding: 4px;
  border-radius: 5px;
}
.cart-items {
  /* padding: 10px; */
  background: #db9b2460;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-bottom: 20px;
}
.product-info {
  padding: 10px;
  flex: 1;
}
.product-name {
  margin: 0;
}
.product-price {
  margin: 5px 0;
}
.product-info .product-price span {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.568);
  margin-left: 10px;
}
.card-content {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  width: 100%;
  height: 50px;
  transform: translateY(5%);
  text-align: center;
  padding-top: 9px;
  overflow: hidden;
  transition: all 0.5s ease;
}
.shopping-cart:hover .card-content {
  transform: translateY(-100%);
}
.shopping-cart:hover {
  transform: scale(1.023);
  z-index: 3;
  cursor: pointer;
}
</style>
