<template>
  <div class="booklist-container items-center">
      <div class="booklist flex flex-wrap">
    
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-5" v-for="book in books" :key="book.id">
        <img class="" :alt="book.name" :src='"@/assets/Book_pic/Book" + book.id + ".jpg"' />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{book.name}}</div>
            <p class="text-gray-700 text-base">
            {{book.price + "THB"}}
            </p>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add to cart
                </button>
  </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import books from "@/assets/books.ts";

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

export default {
  name: "Booklist",
  components: {},
  data() {
    return { books };
  }
};
</script>

<style scoped>


div img {
    width: 200px;
    height: 300px;
}

</style>