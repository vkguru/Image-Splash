<template>
  <div>
    <Form />
    <IndexPhotos />
  </div>
</template>

<script>
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
