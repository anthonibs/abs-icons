# 🎨 abs-icons

A library of modern, elegant, and minimalist icons designed for high-performance interfaces and professional dashboards.

## 🏗️ Contribution Guide

We are excited about your interest in expanding **abs-icons**! To maintain visual consistency, please follow these guidelines:

### 📐 Technical Specifications

- **Artboard (Canvas):** 24px x 24px.
- **Drawing Area:** The icon must be centered within a **20px x 20px** area.
- **Stroke (Outline):** Use a `stroke-width` of **1.5pt**.
- **Finalization:** Before exporting (especially in Adobe Illustrator), you **must** expand the stroke (`Object > Expand`) so the icon becomes a **fill** shape.

### 🏷️ Naming Convention & Styles

Naming defines the icon category and style. Always use the `abs-` prefix and lowercase letters.

- **Outline (Default):** No suffix needed. The base icon is assumed to be outline.

  - Example: `abs-user`, `abs-settings`.

- **Solid:** Must include the `-solid` suffix.

  - Example: `abs-user-solid`, `abs-settings-solid`.

### ✨ Design Variations

Each icon can have up to **3 variations** per type (Outline or Solid) to ensure a modern look:

- **Default:** `abs-user` / `abs-user-solid`
- **Alt:** `abs-user-alt` / `abs-user-alt-solid`
- **Soft:** `abs-user-soft` / `abs-user-soft-solid`
