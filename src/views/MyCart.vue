<template>
  <div class="booklist-container justify-center text-center m-10">
    <div class="booklist flex flex-col w-full">
      <div
        v-for="item in myCart"
        :key="item.id"
        class="max-w-sm w-10/12 lg:max-w-full lg:flex m-auto my-3 flex-no-wrap"
      >
        <img
        :src='"@/assets/Book_pic/Book" + item.id + ".jpg"'
        alt="Book image"
        class="h-32 w-20 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        />
        <div
          class="h-32 w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between leading-normal"
        >
          <div class="mb-8 w-10/12">
            <div class="text-gray-900 font-bold text-xl mb-2 text-left">{{ item.name }}</div>
            <p class="text-gray-700 text-base text-left">{{ item.price + "THB" }}</p>
          </div>
          <div
            class="w-2/12 flex justify-center items-end text-gray-900 font-bold text-xl text-center"
          >
            <svg v-on:click="remove(item.id)" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm5-9v2H5V9h10z"
              />
            </svg>
            <p class="mx-5">{{ item.amount }}</p>
            <svg v-on:click="add(item.id, item.name, item.price)" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              />
            </svg>
          </div>
        </div>
      </div>
      <p class="text-gray-900 font-bold text-2xl">
        discount: {{ discount }}<br>
        total: {{ total }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { addItem, removeItem, getCart } from "@/logic/ShoppingCartLogic.ts";
import PromotionCalculator from "@/logic/PromotionCalculator.ts";

export default Vue.extend({
  data() {
    return {
      myCart: getCart(),
      total: -1,
      discount: -1
    };
  },
  methods: {
    add(id: string, name: string, price: number): void {
      console.log('add')
      addItem(id, name, price, 1);
      this.myCart = getCart();
      this.calculate();
    },
    remove(id: string) {
      console.log('remove')
      removeItem(id, 1);
      this.myCart = getCart();
      this.calculate();
    },
    calculate() {
      const temp: number[] =  PromotionCalculator(getCart());
      this.discount = temp[0];
      this.total = temp[1];
    }
  },
  beforeMount() {
    this.calculate();
  }
});
</script>