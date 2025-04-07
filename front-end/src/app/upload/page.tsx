import Button from "../components/Button";
import Dropzone from "../components/Dropzone";
export default function Upload() {
  return (
    <div className="container mx-auto py-30 items-center flex flex-col justify-center">
      <div className="header text-center mb-8">
        <h1 className="text-5xl mb-4 font-bold ">Let&apos;s Start the Magic!</h1>
        <p className="">Drag and drop your photo below, or browse to upload. We&apos;ll transform it into a Ghibli-inspired masterpiece!</p>
      </div>
      <div className="w-2/4 flex items-center justify-center mb-4">
        <Dropzone />
      </div>
      
      <Button>Start Transformation</Button>
    </div>
  );
}
