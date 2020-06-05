<template>
  <div class="booklist-container justify-center text-center">
    <div class="booklist flex flex-wrap w-11/12 m-auto">
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg m-5 w-56"
        v-for="book in books"
        :key="book.id"
      >
        <img class="w-full h-64" :alt="book.name" :src='"@/assets/Book_pic/Book" + book.id + ".jpg"' />
        <div class="px-4 py-4">
          <div class="flex justify-start">
            <div class="font-bold text-sm mb-2 truncate">{{book.name}}</div>
          </div>
          <div class="flex justify-start">
            <p class="text-gray-700 text-sm">{{book.price + "THB"}}</p>
          </div>
          <button
            class="mt-3 w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            v-on:click="addToCart(book.id, book.name, book.price)"
          >Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import books from "@/assets/books.ts";
import { addItem } from "@/logic/updateShoppingCart.ts";

export default {
  name: "Booklist",
  data() {
    return { books };
  },
  methods: {
      addToCart(id: string, name: string, price: number) {
          addItem(id, name, price, 1);
      }
  }
};
</script>