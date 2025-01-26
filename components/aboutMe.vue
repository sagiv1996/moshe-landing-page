<template>
  <v-sheet rounded color="secondary" class="px-md-16">
    <v-row align="center" justify="center">
      <v-col lg="4" cols="12" class="justify-center">
        <v-img
          v-if="mdAndUp"
          src="/about-me.JPG"
          class="border-lg rounded-pill mt-n12"
          alt="Moshe picture"
          width="250"
          height="auto"
        ></v-img>
        <v-img
          v-else
          src="/about-me.JPG"
          class="border-lg rounded-pill mt-n12"
          alt="Moshe picture"
          width="100%"
          height="200"
          cover
        ></v-img>
      </v-col>
      <v-col lg="8" cols="12" class="text-h5 text-justify">
        <span class="text-h4">שמי משה ליבוביץ, </span>
        מאמן מוסמך באימון מנטלי וטיפול רגשי באמצעות ספורט. אותי הספורט תפס כבר
        בגיל צעיר מאוד, הייתי רוב שעות היום מתאמן בכדורסל, העולם הזה קנה אותי
        תוך שניה. עם השנים גם הדרכתי קבוצות של ילדים/נערים במספר מסגרות ותמיד
        עניין אותי איך אפשר לשלב בין עבודה עם ילדים (לווא דווקא ספורטיביים)
        וספורט. בזמן האחרון שמעתי יותר ויותר על 'ספורט ככלי טיפולי' וזה שבה את
        ליבי, זה בדיוק מה שחיפשתי כל השנים!! עכשיו עם כל הידע והניסיון שצברתי עם
        השנים (ובקורס) אני כאן בשביל לעזור לילדים להביע את עצמם ולהוכיח את
        הפוטנציאל התבוע בהם
      </v-col>
    </v-row></v-sheet
  >
</template>
<script setup lang="ts">
const { mdAndUp } = useDisplay();
</script>
