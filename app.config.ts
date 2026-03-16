export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "stone",
    },
    container: {
      base: "mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8",
    },
    button: {
      rounded: "rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]",
    },
    formGroup: {
      help: "mt-1 text-xs text-neutral-500 dark:text-neutral-400",
      error: "mt-1 text-xs text-red-500 dark:text-red-400",
      label: {
        base: "block text-sm font-medium text-neutral-500 dark:text-neutral-200",
      },
    },
    modal: {
      overlay: {
        background: "saturate-50 bg-[rgba(0,8,47,.275)]",
      },
      padding: "p-0",
      rounded: "rounded-t-2xl sm:rounded-xl",
      transition: {
        enterFrom: "translate-y-full opacity-0 sm:translate-y-0 sm:scale-x-95",
        leaveFrom: "translate-y-0 opacity-100 sm:scale-x-100",
      },
    },
  },
  name: "Pushpak Chhajed",
  resumeURL: "https://drive.google.com/file/d/1vJbFZ-NyPPtkshIVDlHZYNusnBt_vZM3/view",
});
