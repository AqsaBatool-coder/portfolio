import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number | string;
};

export const GithubIcon = ({ size = 24, className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...rest}
  >
    <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.01 3.25 9.26 7.76 10.77.57.1.78-.25.78-.55v-1.93c-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.18-1.26-5.18-5.62 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.14 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.74.11 3.03.73.8 1.17 1.81 1.17 3.05 0 4.37-2.67 5.33-5.21 5.61.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55 4.51-1.51 7.75-5.76 7.75-10.77C23.34 5.57 18.27.5 12 .5z" />
  </svg>
);

export const LinkedinIcon = ({ size = 24, className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...rest}
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);
