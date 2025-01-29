<template>
  <v-app>
    <v-main>
      <header-image />
      <about-me />
      <global-info />
      <feature-cards />
      <faq />
      <v-fab
        location="top"
        text="צור קשר"
        prepend-icon="mdi-form-select"
        app
        color="info"
        aria-label="Button of google form"
        href="https://docs.google.com/forms/d/e/1FAIpQLSf0HIU86b6gVI29v2fZb2VBrvSHVBNJ5bMo1-0vsUY7s71GXw/viewform?embedded=true"
        target="_blank"
        class="mt-15"
      />
      <v-fab
        location="top"
        icon="mdi-whatsapp"
        app
        color="success"
        aria-label="Button of
      whatsapp"
        href="https://wa.me/972535267163?text=%D7%A9%D7%9C%D7%95%D7%9D,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A8%D7%A8%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D."
        target="_blank"
      />
    </v-main>
  </v-app>
</template>
