"use client";

import React from "react";

interface ButtonProps {
  text: string;
  styles?: string;
  onClick?: () => void;
}

export default function Button({ text, styles, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-2 px-4 rounded-md text-white cursor-pointer ${styles}`}
      onClick={() => onClick?.()}
    >
      {text}
    </button>
  );
}
