<template>
  <div class="booklist">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import books from '@/assets/books.ts';

export default {
  name: 'Booklist',
  components: {
  },
  data: {
      books
  }
}
</script>
