"use client"

import Uppy, { debugLogger } from "@uppy/core"
import { Dashboard } from "@uppy/react"
import { useState } from "react"

import "@uppy/core/dist/style.min.css"
import "@uppy/dashboard/dist/style.min.css"

export default function Dropzone() {
  const [uppy] = useState(
    () =>
      new Uppy({
        restrictions: {
          maxNumberOfFiles: 1,
          maxFileSize: 10000000,
          allowedFileTypes: ["image/*"],
        },
        logger: debugLogger,
      })
  )

  return (
    <Dashboard uppy={uppy} hideUploadButton theme="auto" />
    // <div className="w-full">
    //   <div
    //     className="bg-border border-2 border-primary rounded-lg flex items-center justify-center py-20  cursor-pointer mb-4"
    //     {...getRootProps()}>
    //     <input {...getInputProps()} />
    //     <div className="flex flex-col justify-center items-center">
    //       <CloudArrow fill="var(--color-foreground)" width="50px" />
    //       {isDragActive ? (
    //         <p>Drop your photo here</p>
    //       ) : (
    //         <p>Drag & drop your photo here, or click to browse photos</p>
    //       )}
    //     </div>
    //   </div>

    //   <h3 className="text-xl mb-2">Photo Preview</h3>
    //   <div
    //     className="border-2 border-border rounded-lg flex items-center justify-between p-5">
    //       <div className="flex-10 ">
    //         {photo?.path}
    //       </div>
    //       <div className="flex-2 flex justify-end">
    //         <Trash className="cursor-pointer w-9" fill="var(--color-accent)"/>
    //       </div>
    //     </div>
    // </div>
  )
}
