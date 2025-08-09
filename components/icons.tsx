import React from "react";
const base = "stroke-current";
const sw = 2;

export const SketchMic = ({ className="" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={`${className} ${base}`} fill="none">
    <g strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="20" y="6" width="24" height="32" rx="12"/>
      <path d="M32 38v10" />
      <path d="M18 30c0 8 6 14 14 14s14-6 14-14" />
      <path d="M14 54h36" />
    </g>
  </svg>
);

export const SketchNote = ({ className="" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={`${className} ${base}`} fill="none">
    <g strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 18 q2 -10 12 -6 v24 q-2 8 -10 9 q-8 1 -6 -6 q3 -6 10 -5" />
      <circle cx="30" cy="47" r="5" />
    </g>
  </svg>
);

export const SketchTicket = ({ className="" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={`${className} ${base}`} fill="none">
    <g strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22 q2-6 8-6 h32 l8 8 v10 q-6 2 -6 8 q0 6 6 8 v10 l-8 8 H16 q-6 0 -8-6 v-10 q6-2 6-8 q0-6 -6-8z" />
      <path d="M36 16 v32" strokeDasharray="4 6" />
    </g>
  </svg>
);
