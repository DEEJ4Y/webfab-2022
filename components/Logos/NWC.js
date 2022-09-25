/* eslint-disable @next/next/no-img-element */
export default function NWCLogo({ size, className }) {
  return (
    <img
      src="/favicon.png"
      alt="NWC logo"
      className={className || ""}
      width={size || 16}
    />
  );
}
