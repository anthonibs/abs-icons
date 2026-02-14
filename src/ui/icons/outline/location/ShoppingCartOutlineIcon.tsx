import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.85 4.78c-.63-.68-1.5-1.05-2.46-1.05H6.95A2.455 2.455 0 0 0 4.62 2h-1.6c-.41 0-.75.34-.75.75s.34.75.75.75h1.6c.26 0 .51.11.69.31.19.2.28.46.25.73l-.76 9.21c-.08.93.24 1.86.87 2.54s1.52 1.08 2.45 1.08h9.79c1.71 0 3.2-1.39 3.33-3.11l.5-6.94c.07-.95-.24-1.85-.88-2.54ZM17.9 15.86H8.11c-.51 0-.99-.21-1.34-.59a1.84 1.84 0 0 1-.48-1.4l.72-8.65H18.4c.53 0 1.01.2 1.36.57s.52.87.48 1.41l-.02.34H9.46c-.41 0-.75.34-.75.75s.34.75.75.75h10.65l-.36 5.09c-.07.93-.91 1.72-1.84 1.72Zm-1.79 2.33c-1.05 0-1.9.85-1.9 1.91s.85 1.91 1.9 1.91 1.9-.85 1.9-1.91-.85-1.91-1.9-1.91m0 2.31c-.22 0-.4-.18-.4-.41s.18-.41.4-.41.4.18.4.41-.18.41-.4.41m-7.35-2.31c-1.05 0-1.9.85-1.9 1.91s.85 1.91 1.9 1.91 1.9-.85 1.9-1.91-.85-1.91-1.9-1.91m0 2.31c-.22 0-.4-.18-.4-.41s.18-.41.4-.41.4.18.4.41-.18.41-.4.41" /></svg>;


      export const ShoppingCartOutlineIcon = createIcon("ShoppingCartOutlineIcon", SVGComponent, {
  "fileName": "abs-shopping-cart.svg",
  "presentationName": "shopping-cart",
  "style": "outline",
  "category": "location"
});