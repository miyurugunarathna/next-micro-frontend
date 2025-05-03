import type { SVGProps } from 'react';

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className="w-full h-full"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 8.719 7.836 14.303Q6.191 15 5.075 15q-1.256 0-1.819-.884c-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Logo;
