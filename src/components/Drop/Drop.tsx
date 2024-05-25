import { useDropzone, FileWithPath } from "react-dropzone";

const Drop: React.FC = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/octet-stream": [".r1cs"],
    },
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const dropZoneContent = () => {
    if (files.length == 0) {
      return (
        <>
          <svg
            className="w-8 h-8 mb-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop .r1cs file
          </p>
          <p className="text-xs text-gray-500">.r1cs</p>
        </>
      );
    }

    return <ul>{files}</ul>;
  };

  return (
    <div
      {...getRootProps({
        className: "flex items-center justify-center w-full",
      })}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {dropZoneContent()}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          {...getInputProps()}
        />
      </label>
    </div>
  );
};

export default Drop;
