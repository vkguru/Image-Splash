<template>
  <div>
    <Form />
    <IndexPhotos />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form.vue";
import IndexPhotos from "@/components/IndexPhotos.vue";

export default {
  name: "Home",
  components: {
    Form,
    IndexPhotos
  }
};
</script>
