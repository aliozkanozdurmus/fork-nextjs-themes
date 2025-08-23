# Next.js Themes <img src="https://github.com/react18-tools/turborepo-template/blob/main/popper.png?raw=true" style="height: 40px"/>

[![test](https://github.com/react18-tools/nextjs-themes/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/nextjs-themes/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/149263e95a1388369bb9/maintainability)](https://codeclimate.com/github/react18-tools/nextjs-themes/maintainability) [![codecov](https://codecov.io/gh/react18-tools/nextjs-themes/branch/main/graph/badge.svg?token=SUTY0GHPHV)](https://codecov.io/gh/react18-tools/nextjs-themes) [![Version](https://img.shields.io/npm/v/nextjs-themes.svg?colorB=green)](https://www.npmjs.com/package/nextjs-themes) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/nextjs-themes.svg)](https://www.npmjs.com/package/nextjs-themes) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/nextjs-themes) [![Contact me on Codementor](https://www.codementor.io/m-badges/mayank1513/get-help.svg)](https://www.codementor.io/@mayank1513?refer=badge)

<details>
<summary>Version 3 Short Notes:</summary>
Version 3.0 brings minor API changes along with major performance improvements and fixes. We have minimized changes to existing APIs.

Note: [react18-themes](https://github.com/react18-tools/react18-themes/) will now be maintained as `nextjs-themes`, as server-specific APIs are no longer needed.

</details>

🤟 👉 [Unleash the Power of React Server Components](https://medium.com/javascript-in-plain-english/unleash-the-power-of-react-server-components-eb3fe7201231)

- ✅ Perfect dark mode in 2 lines of code
- ✅ Fully Treeshakable (`import from nextjs-themes/client/component`)
- ✅ Full TypeScript Support
- ✅ Unleash the full power of React 18 Server components
- ✅ No flash on load (both SSR and SSG)

> Exampand following to see more features.

<details>
<summary><h2 style="display:inline">Motivation and Key Features:</h2></summary>

This project was inspired by next-themes. Unlike next-themes, `nextjs-themes` doesn't require wrapping everything in a provider, allowing you to take full advantage of React 18 Server Components. Additionally, it offers more features and control over your app's theming.

- ✅ Perfect dark mode in 2 lines of code
- ✅ Fully Treeshakable (`import from nextjs-themes/client/component`)
- ✅ Designed for excellence
- ✅ Full TypeScript Support
- ✅ Unleash the full power of React 18 Server components
- ✅ System setting with prefers-color-scheme
- ✅ Themed browser UI with color-scheme
- ✅ Support for Next.js 13 & Next.js 14 `appDir`
- ✅ No flash on load (for all - SSG, SSR, ISG, Server Components)
- ✅ Sync theme across tabs and windows
- ✅ Disable flashing when changing themes
- ✅ Force pages to specific themes
- ✅ Class and data attribute selector
- ✅ Manipulate theme via `useTheme` hook
- ✅ Documented with [Typedoc](https://react18-tools.github.io/nextjs-themes) ([Docs](https://react18-tools.github.io/nextjs-themes))
- ✅ Use combinations of [data-th=""] and [data-color-scheme=""] for dark/light variants of themes
- ✅ Use [data-csp=""] to style based on colorSchemePreference.
- ✅ Compatible with Tailwind CSS, StyledComponents, emotion, Material UI, ...
</details>

> Check out the [live example](https://nextjs-themes.vercel.app/).

## Getting Started

> See [Getting Started](./guides/getting-started.md)

> Want Lite Version? [![npm bundle size](https://img.shields.io/bundlephobia/minzip/nextjs-themes-lite)](https://www.npmjs.com/package/nextjs-themes-lite) [![Version](https://img.shields.io/npm/v/nextjs-themes-lite.svg?colorB=green)](https://www.npmjs.com/package/nextjs-themes-lite) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/nextjs-themes-lite.svg)](https://www.npmjs.com/package/nextjs-themes-lite)
> In case you are using `r18gs` in your project, you may use lite version which requires `r18gs` as a peerDependency.

### With Tailwind

In `tailwind.config.js`, set the dark mode property to class:

```js
// tailwind.config.js
module.exports = {
  darkMode: "class",
};
```

⚡🎉Ready to use dark mode in Tailwind!

> Caution: Your class must be `"dark"`, which is the default value used in this library. Tailwind requires the class name `"dark"` for dark-theme.

Use dark-mode specific classes:

```tsx
<h1 className="text-black dark:text-white">
```

## Migration

> Refer to the [migration guide](./guides/migration.md).

## Docs

[Typedoc](https://react18-tools.github.io/nextjs-themes)

### 🤩 Don't forget to star this repo!

Want a hands-on course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://www.udemy.com/course/react-and-next-js-with-typescript/?referralCode=7202184A1E57C3DCA8B2)

## FAQ

**Do I need to use CSS variables with this library?**

No. You can hard code values for every class:

```css
.my-class {
  color: #555;
}

[data-theme="dark"] .my-class {
  color: white;
}
```

**Why is `resolvedTheme` and `resolvedColorScheme` necessary?**

To reflect the System theme preference and forced theme/colorScheme pages in your UI. For instance, buttons or dropdowns indicating the current colorScheme should say "system" when the System colorScheme preference is active.

`resolvedTheme` is useful for modifying behavior or styles at runtime:

```js
const { resolvedTheme, resolvedColorScheme } = useTheme();
const background = getBackground(resolvedTheme);

<div style={{ color: resolvedColorScheme === 'dark' ? white : black, background }}>
```

Without `resolvedTheme`, you would only know the theme is "system", not what it resolved to.

![Repo stats](https://repobeats.axiom.co/api/embed/3cc219825aee3c38bad8829fb9da0dd6301a1867.svg "Repobeats analytics image")

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
