import { useState } from "react";

interface Props {
  title: string;
  value: string;
  info: string;
}

const Card: React.FC<Props> = ({ title, value, info }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl">
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-x-2">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {title}
          </p>
        </div>

        <div className="mt-1 flex items-center gap-x-2">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
            {value}
          </h3>{" "}
          <div
            className="hover:cursor-pointer"
            onMouseLeave={() => {
              setIsShown(false);
            }}
            onMouseEnter={() => {
              setIsShown(true);
            }}
          >
            <div>
              <svg
                className="flex-shrink-0 size-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <span
                className={`${
                  isShown ? "opacity-100" : "opacity-0"
                } transition-opacity inline-block absolute ${
                  isShown ? "" : "invisble"
                } z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm`}
              >
                {info}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
