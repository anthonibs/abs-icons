<p align="center">
  <a href="#" target="_blank" rel="">
  <img alt="Logo Abs Icons" width="315px" height="auto"  src="public/logo-abs-icons.webp">
  </a>
</p>

<p align="center">
Modern, elegant hand-crafted SVG icons for high-performance interfaces.
<br/>
Available as basic SVG icons or via the official <strong>React</strong> library.
<p>


<p align="center">

<a href="https://github.com/tailwindlabs/heroicons/releases">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@anthoni/abs-icons?style=plastic&label=Downloads&color=yellow">
    </a>

<a href="https://github.com/tailwindlabs/heroicons/releases">
    <img alt="NPM Unpacked Size" src="https://img.shields.io/npm/unpacked-size/@anthoni/abs-icons?style=plastic&label=Unpacked&&labelColor=yellow&color=yellow">
    </a>
    <a href="https://github.com/tailwindlabs/heroicons/releases">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@anthonibs/abs-icons?style=plastic" alt="Latest Release">
    </a>
    <a href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/anthonibs/abs-icons?style=plastic&label=LICENSE&color=green" alt="License"></a>

</p>

```html
<svg viewBox="0 0 24 24" color="currentColor" width="62" height="62">
  <path
    d="M21.19 20.5h-.17v-5.73c0-5-4.05-9.07-9.02-9.07s-9.02 4.07-9.02 9.07v5.73h-.17c-.41 0-.75.34-.75.75s.34.75.75.75H21.2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-16.72 0v-5.73c0-4.18 3.38-7.57 7.52-7.57s7.52 3.4 7.52 7.57v5.73H4.48ZM12 4.42c.41 0 .75-.34.75-.75v-.92c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.92c0 .41.34.75.75.75M5.03 6.05c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.92-.92c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06zm13.41.22c.19 0 .38-.07.53-.22l.92-.92c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.92.92c-.29.29-.29.77 0 1.06.15.15.34.22.53.22"
  ></path>
</svg>
```

Customize your icons effortlessly. Both the outline and solid styles are preconfigured to reflect the color defined in the CSS, either manually or through classes like Tailwind CSS's `text-yellow-600`.

## React

Install the package via npm:

```bash
npm install @anthonibs/abs-icons
```

Each icon can be imported individually as a React component using **PascalCase** naming with an `Icon` suffix:

```tsx
import { UserOutlineIcon, UserSolidIcon } from "@anthonibs/abs-icons";

function MyComponent() {
  return (
    <div>
      <UserIcon className="size-6 text-blue-500" />
      <UserSolidIcon className="size-6 text-blue-600" />
    </div>
  );
}
```
