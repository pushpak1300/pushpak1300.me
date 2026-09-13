<template>
  <aside class="sidebar">
    <Tile bg="036" class="id min-h-fit flex-3 gap-[1.125rem] short:gap-3">
      <NuxtImg
        src="/avtar.webp"
        alt="Pushpak Chhajed"
        class="avatar short:size-14"
        width="72"
        height="72"
        format="webp"
      />
      <div class="flex flex-col gap-2.5">
        <h1 class="hero text-[2.125rem] lg:text-[2.5rem] short:text-[1.875rem]">Pushpak Chhajed</h1>
      </div>
      <p class="body short:text-[0.8125rem] xshort:hidden">
        {{ age }}-year-old tinkerer, speaker and software engineer on the Open Source team at
        Laravel. In my free time I ship side projects.
      </p>
      <div class="flex flex-col gap-3 mt-1.5">
        <p class="label">History</p>
        <div class="tl short:gap-1.5">
          <div v-for="item in history" :key="item[0]">
            <span class="mono">{{ item[0] }}</span
            ><b>{{ item[1] }}</b>
          </div>
        </div>
      </div>
      <div class="grow" />
      <div class="flex items-center justify-between gap-2">
        <NuxtLink to="/talks" class="chip">
          <span class="inline-block size-2 rounded-full bg-current" />
          Open to conference invites
        </NuxtLink>
        <NuxtLink v-if="!home" to="/" class="chip">← Home</NuxtLink>
      </div>
    </Tile>

    <Tile bg="057" label="India" class="[--dim:0.8] flex-1 min-h-[9.375rem] short:min-h-0 order-last lg:order-none">
      <button
        type="button"
        class="chip absolute top-3.5 right-3.5 gap-2 pl-2.5 pr-3 backdrop-blur-sm"
        :aria-label="playing ? 'Pause music' : 'Play lofi techno'"
        @click="toggle"
      >
        <span class="eq" :class="{ on: playing }"><i /><i /><i /><i /></span>
        {{ playing ? "Lofi techno" : "Play lofi" }}
      </button>
      <audio
        ref="audio"
        src="/lofi.mp3"
        loop
        preload="none"
        @play="playing = true"
        @pause="playing = false"
      />
      <div class="grow" />
      <ClientOnly>
        <div class="clock short:text-[1.875rem]">{{ time }}</div>
        <p class="body text-[0.8125rem]">{{ diff }}</p>
        <template #fallback><div class="clock short:text-[1.875rem]">--:--</div></template>
      </ClientOnly>
      <div class="flex items-center justify-between gap-2 pt-3 border-t border-white/15">
        <a href="mailto:hey@pushpak1300.me" class="mono text-[0.8125rem] text-white/70"
          >hey@pushpak1300.me</a
        >
        <span class="mono text-xs text-white/70">© {{ new Date().getFullYear() }}</span>
      </div>
    </Tile>
  </aside>
</template>

<script setup lang="ts">
defineProps<{ home?: boolean }>();

const history = [
  ["2012", "Started by tinkering"],
  ["2016", "Started building web apps"],
  ["2019–23", "Product engineering across startups"],
  ["2024", "Locked in on AI and Laravel"],
  ["Now", "Open source at Laravel"],
];

// ponytail: born 13 May 2000; recomputed on mount so a static build never shows a stale age
const ageAt = (d: Date) => d.getFullYear() - 2000 - (d < new Date(d.getFullYear(), 4, 13) ? 1 : 0);
const age = ref(ageAt(new Date()));

const time = ref("--:--");
const diff = ref("");
const tick = () => {
  time.value = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
  const mins = 330 + new Date().getTimezoneOffset();
  const h = Math.floor(Math.abs(mins) / 60);
  const m = Math.abs(mins) % 60;
  diff.value =
    mins === 0
      ? "Same time as you"
      : `${h ? `${h}h` : ""}${m ? ` ${m}m` : ""} ${mins > 0 ? "ahead of" : "behind"} you`.trim();
};
let timer: ReturnType<typeof setInterval>;

const audio = ref<HTMLAudioElement>();
const playing = ref(false);
const play = () => audio.value?.play().catch(() => {});
const toggle = () => {
  if (audio.value?.paused) {
    localStorage.removeItem("lofi-off");
    play();
  } else {
    localStorage.setItem("lofi-off", "1");
    audio.value?.pause();
  }
};
// ponytail: browsers block sound before a gesture, so try on load and otherwise start on the first click or key.
// One handler for both events so a pause in between is respected; the toggle button plays itself, so skip it.
const autoplay = () => {
  if (localStorage.getItem("lofi-off")) return;
  play()?.then(() => {
    if (!audio.value?.paused) return;
    const start = (e: Event) => {
      removeEventListener("pointerdown", start);
      removeEventListener("keydown", start);
      if (!(e.target as Element).closest?.("button")) play();
    };
    addEventListener("pointerdown", start);
    addEventListener("keydown", start);
  });
};
onMounted(() => {
  age.value = ageAt(new Date());
  tick();
  timer = setInterval(tick, 1000);
  autoplay();
});
onBeforeUnmount(() => clearInterval(timer));
</script>
