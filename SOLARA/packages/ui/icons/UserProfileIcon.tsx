import React from "react";

function UserProfileIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <div>
      <svg
        width="28"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.875C9.08883 10.875 11.1875 8.77633 11.1875 6.1875C11.1875 3.59867 9.08883 1.5 6.5 1.5C3.91117 1.5 1.8125 3.59867 1.8125 6.1875C1.8125 8.77633 3.91117 10.875 6.5 10.875Z"
          stroke="#F6F3EC"
          stroke-width="3"
        />
      </svg>
      <svg
        width="29"
        height="13"
        viewBox="0 0 29 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8.375C2 6.7174 2.65848 5.12768 3.83058 3.95558C5.00268 2.78348 6.5924 2.125 8.25 2.125H20.75C22.4076 2.125 23.9973 2.78348 25.1694 3.95558C26.3415 5.12768 27 6.7174 27 8.375C27 9.2038 26.6708 9.99866 26.0847 10.5847C25.4987 11.1708 24.7038 11.5 23.875 11.5H5.125C4.2962 11.5 3.50134 11.1708 2.91529 10.5847C2.32924 9.99866 2 9.2038 2 8.375Z"
          stroke="#F6F3EC"
          stroke-width="3"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default UserProfileIcon;
