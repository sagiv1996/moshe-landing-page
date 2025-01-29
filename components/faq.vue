<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-center mb-4">שאלות נפוצות</h2>
        <v-expansion-panels variant="inset">
          <v-expansion-panel v-for="(item, index) in faqItems" :key="index">
            <v-expansion-panel-title>
              {{ item.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ item.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const faqItems = [
  {
    question: "מה זה אימון מנטלי וטיפול רגשי באמצעות ספורט?",
    answer:
      "אימון מנטלי וטיפול רגשי באמצעות ספורט משלבים פעילות גופנית עם כלים פסיכולוגיים כדי לשפר את היכולות הרגשיות, הריכוז, והביטחון העצמי של המשתתפים.",
  },
  {
    question: "למי מתאים הטיפול הזה?",
    answer:
      "הטיפול מתאים לילדים, בני נוער ומבוגרים אשר מחפשים דרך לשפר את הרגשתם, להתמודד עם אתגרים רגשיים ולבנות חוסן נפשי דרך פעילות גופנית.",
  },
  {
    question: "האם יש צורך בניסיון ספורטיבי קודם?",
    answer:
      "ממש לא! כל אחד יכול להפיק תועלת מהשיטה, גם אם אין לו רקע ספורטיבי. האימון מותאם באופן אישי לכל משתתף.",
  },
  {
    question: "איפה מתקיימים המפגשים?",
    answer:
      "המפגשים מתקיימים באווירה פתוחה, בחללים חיצוניים או במקומות נוחים שנבחרים בהתאם לצרכי המשתתף.",
  },
  {
    question: "איך מתחילים?",
    answer:
      "ניתן ליצור איתי קשר דרך האתר או בטלפון לקביעת פגישת היכרות שבה נבחן יחד את הצרכים והמטרות שלך.",
  },
];
</script>
