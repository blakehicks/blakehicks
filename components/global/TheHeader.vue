<template>
  <header
    ref="header"
    class="-translate-y-full mx-auto container flex justify-between py-4 font-mono text-sm"
  >
    <div>
      <h1>Blake Hicks</h1>
    </div>
    <aside>
      <p class="flex">
        Chattanooga, TN<span class="pl-4">{{ time }}</span
        ><span class="px-4"
          ><img
            v-show="currentEmoji"
            ref="emoji"
            class="rotate-[-30deg]"
            width="20"
            height="20"
            :src="emojiUrl ? emojiUrl : ''" /></span
        >I am probably <span class="pl-2">{{ verb }}.</span>
      </p>
    </aside>
  </header>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const time = ref("");
const verb = ref("");
const emoji = ref();
const currentEmoji = ref();
const emojiUrl = ref("");
const tickTock = ref();
const header = ref();

//Clock
const updateTime = () => {
  const eastern = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  const now = new Date(eastern);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  time.value = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

  //Change verb based on time
  if (hours >= 23 && hours < 7) {
    verb.value = "sleeping";
    currentEmoji.value = "😴";
  }
  if (hours >= 7 && hours < 10) {
    verb.value = "breakfasting";
    currentEmoji.value = "🍎";
  }
  if (hours >= 12 && hours < 14) {
    verb.value = "lunching";
    currentEmoji.value = "🥪";
  }
  if (hours >= 12 && hours < 14) {
    verb.value = "suppering";
    currentEmoji.value = "🍕";
  }
  if ((hours >= 10 && hours < 12) || (hours >= 14 && hours < 18)) {
    verb.value = "working";
    currentEmoji.value = "☹️";
  }
  if (hours >= 18 && hours < 23) {
    verb.value = "decompressing";
    currentEmoji.value = "🎮";
  }
  emojiUrl.value = `https://emojicdn.elk.sh/${currentEmoji.value}?style=apple`;
};

//Silly Emoji Shit

const tl = $gsap.timeline({ repeat: -1 });

onMounted(() => {
  //Run clock
  tickTock.value = setInterval(updateTime, 1000);
  //Bring in header
  $gsap.to(header.value, {
    duration: 1,
    translateY: 0,
    delay: 1,
    ease: "Power4.easeOut",
  });
  //Animate emoji
  tl.to(emoji.value, {
    duration: 1,
    rotation: 30,
    ease: "Power4.easeInOut",
  }).to(emoji.value, { duration: 1, rotation: -30, ease: "Power4.easeInOut" });
});

onUnmounted(() => {
  clearInterval(tickTock.value);
});
</script>

<style scoped></style>
