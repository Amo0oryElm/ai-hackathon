import  { ChangeEvent,useCallback, useState } from "react";

interface DragDropProps {
  onFileUpload: (files: File | FileList | File[]) => void;
  acceptedTypes?: string[]; // Make acceptedTypes an array of strings (and optional)
  isMultiple?: boolean;
  name?: string;
  required?: boolean;
}
const DragDrop = ({onFileUpload, acceptedTypes =[], isMultiple = false, name ='', required =false}: DragDropProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | undefined>();
  const [files, setFiles] = useState<File[]>([]); // Store multiple files
  // const acceptedTypes = ["image/png", "image/jpeg", "application/pdf"]; // Example accepted file types
  const formattedTypes = acceptedTypes.join(", ");

  // Handle file input change
  const handleFilesInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files); // Convert FileList to array
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Add new files to the existing list 
      onFileUpload(selectedFiles);
    }
  };
 
  // const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   const uploadedFile = event.target.files?.[0];
  //   if (uploadedFile && acceptedTypes.includes(uploadedFile.type)) {
  //     setFile(uploadedFile);
  //     onFileUpload(uploadedFile);
  //   } else {
  //       if (event.target?.files.length === 0) {
  //           return 
  //       }else{
  //           alert("Invalid file type. Please upload a valid file.");
  //       }
  //   }
  // };
  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]; // Optional chaining

    if (uploadedFile && acceptedTypes.includes(uploadedFile.type)) {
      // Type is now safe because of the check above
      setFile(uploadedFile)
      onFileUpload(uploadedFile);
    } else {
      if (event.target.files?.length === 0) { // Optional chaining
        return;
      } else {
        alert("Invalid file type. Please upload a valid file.");
      }
    }
  };
  // Handle file drop
  const handleDropMultiple = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files); // Convert FileList to array
      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]); // Add new files to the existing list
      onFileUpload(droppedFiles);
    }
  };
// Handle file drop
const handleDrop = useCallback(
  (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile && acceptedTypes.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      onFileUpload(uploadedFile);
    } else {
      alert("Invalid file type. Please upload a valid file.");
    }
  },
  [acceptedTypes, onFileUpload]
);
  // Handle drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Handle drag leave
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Handle file removal
  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove file by index
    if(index < 0){
      setFile(undefined);
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={isMultiple? handleDropMultiple :handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed ${
          isDragging
            ? "border-[var(--theme-primary)] bg-[var(--theme-primary)]"
            : "border-divider bg-[rgba(118, 60, 188, 1)]"
        } p-6 text-center rounded-lg transition-colors duration-300 cursor-pointer`}
      >
        <input
          type="file"
          className="hidden"
          name={name}
          id={name}
          required={required}
          onChange={isMultiple? handleFilesInput : handleFileInput}
          accept={acceptedTypes.join(",")}
          multiple={isMultiple ? true : false} // Allow multiple files
        />
        <label htmlFor={name} className="cursor-pointer">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <p className="text-typography-primary">
              {isDragging ? (
                "Drop the files here"
              ) : (
                <>
                  Drag & Drop or Click to
                  <span className="text-secondary mx-2">
                    <strong className="text-secondary underline">Browse</strong>
                  </span>
                </>
              )}
            </p>
            <p className="text-typography-accent-darker">
              Supported formats: {formattedTypes}
            </p>
            {
              isMultiple? 
              files.length > 0 && (
                <div className="mt-4">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 gap-4 rounded-lg"
                    >
                      <span className="text-typography-accent-darker">
                        {file.name}
                      </span>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-error hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )
              :
              file && (
                <div className="mt-4 " >
                <div className="flex items-center justify-between p-3 gap-4 rounded-lg">
                    <span className="text-typography-accent-darker">{file.name}</span>
                    <button
                      // onClick={handleRemoveFile}
                      onClick={() => handleRemoveFile(-1)}
                      className="text-error hover:text-red-700"
                      >
                    Remove
                    </button>
                </div>
                </div>
            )
          }
 
          </div>
        </label>
      </div>
    </div>
  );
};

export default DragDrop;