<template>
  <div
    v-show="on"
    class="cursor"
    :class="{ big: !!glyph }"
    :style="{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }"
    aria-hidden="true"
  >
    <svg
      v-if="glyph === 'home'"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h5v-6h4v6h5V10" />
    </svg>
    <svg
      v-else-if="glyph === 'out'"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
    <span v-else>{{ glyph }}</span>
  </div>
</template>

<script setup lang="ts">
// ponytail: one glass cursor for the whole site; glyph comes from where the mouse is
type Glyph = "" | "home" | "out" | "←" | "→";
const x = ref(0);
const y = ref(0);
const on = ref(false);
const glyph = ref<Glyph>("");
const route = useRoute();
const router = useRouter();

const zone = (grid: HTMLElement, e: MouseEvent): Glyph => {
  if (grid.scrollWidth <= grid.clientWidth + 2) return "";
  const r = grid.getBoundingClientRect();
  const p = (e.clientX - r.left) / r.width;
  if (p < 0.18 && grid.scrollLeft > 0) return "←";
  if (p > 0.82 && grid.scrollLeft + grid.clientWidth < grid.scrollWidth - 2) return "→";
  return "";
};
const read = (e: MouseEvent): Glyph => {
  const t = e.target as HTMLElement;
  const grid = t.closest<HTMLElement>(".hgrid");
  const z = grid ? zone(grid, e) : "";
  if (z) return z;
  if (t.closest("input, textarea")) return "";
  if (t.closest("a, button")) return "out";
  if (t.closest(".id") && route.path !== "/") return "home";
  return "";
};
const move = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
  on.value = true;
  glyph.value = read(e);
};
const click = (e: MouseEvent) => {
  const g = read(e);
  if (g === "←" || g === "→") {
    e.preventDefault();
    e.stopPropagation();
    const grid = (e.target as HTMLElement).closest<HTMLElement>(".hgrid")!;
    grid.scrollBy({ left: (g === "←" ? -1 : 1) * grid.clientWidth * 0.8, behavior: "smooth" });
    glyph.value = "";
  } else if (g === "home" && !(e.target as HTMLElement).closest("a, button")) {
    router.push("/");
  }
};
const hide = () => (on.value = false);

onMounted(() => {
  if (!matchMedia("(pointer: fine)").matches) return;
  document.documentElement.classList.add("has-cursor");
  addEventListener("mousemove", move);
  addEventListener("click", click, true);
  document.addEventListener("mouseleave", hide);
});
onBeforeUnmount(() => {
  document.documentElement.classList.remove("has-cursor");
  removeEventListener("mousemove", move);
  removeEventListener("click", click, true);
  document.removeEventListener("mouseleave", hide);
});
</script>
