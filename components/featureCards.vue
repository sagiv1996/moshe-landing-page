<template>
  <v-sheet color="secondary" class="px-md-16">
    <v-row>
      <v-col v-for="feature in featuresArray" cols="12" lg="4" sm="6">
        <v-card :title="feature.title" :text="feature.subtitle" hover>
          <template v-slot:prepend>
            <v-icon
              :color="feature.color"
              :icon="feature.icon"
            ></v-icon> </template></v-card
      ></v-col>
    </v-row>
  </v-sheet>
</template>
<script setup lang="ts">
const featuresArray = [
  {
    title: "חיזוק ביטחון עצמי",
    subtitle:
      "כלים ושיטות שיסייעו לך לבנות ביטחון עצמי ולשפר את תחושת המסוגלות האישית שלך.",
    icon: "mdi-star",
    color: "#FFD700",
  },
  {
    title: "שיפור קשרים חברתיים",
    subtitle:
      "פיתוח מיומנויות חברתיות ושיפור היכולת ליצור ולשמר קשרים משמעותיים.",
    icon: "mdi-account-group",
    color: "#4CAF50",
  },
  {
    title: "ויסות עצבים",
    subtitle: "טכניקות לניהול רגשות ולהתמודדות עם מצבים מלחיצים בצורה רגועה.",
    icon: "mdi-emoticon-happy-outline",
    color: "#2196F3",
  },
  {
    title: "עידוד מנטלי",
    subtitle:
      "עזרה במציאת כוחות פנימיים, חיזוק המוטיבציה ושיפור החשיבה החיובית.",
    icon: "mdi-lightbulb",
    color: "#FF9800",
  },
  {
    title: "הצבת מטרות והשגתן",
    subtitle: "כלים לתכנון יעדים ברורים והשגת הצלחות באופן מובנה ואפקטיבי.",
    icon: "mdi-target",
    color: "#F44336",
  },
  {
    title: "בניית תהליך מותאם אישית",
    subtitle: "יצירת תכנית ייחודית המותאמת לצרכים האישיים ולמטרות שלך.",
    icon: "mdi-clipboard-list-outline",
    color: "#9C27B0",
  },
];
</script>
