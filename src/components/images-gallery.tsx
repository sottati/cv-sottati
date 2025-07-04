import type { ImageMetadata } from "astro";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ImagesGallery({
  images,
}: {
  images: { src: ImageMetadata; alt: string }[];
}) {
  const [currentImage, setCurrentImage] = useState(0);

  // Manejar navegación con flechas del teclado cuando el diálogo está abierto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentImage((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  return (
    <Dialog>
      <DialogTrigger className="relative h-full cursor-pointer hover:border-none focus:border-none">
        {/* <Button
          className="absolute top-1/2 -left-10"
          variant="ghost"
          size="icon"
        >
          <ArrowLeftIcon className="size-6" />
        </Button>
        <Button
          className="absolute top-1/2 -right-10"
          variant="ghost"
          size="icon"
        >
          <ArrowRightIcon className="size-6" />
        </Button> */}
        <div className="flex flex-row gap-2 overflow-x-auto hover:border-none snap-x snap-mandatory">
          {images.map((image, index) => (
            <img
              src={image.src.src}
              alt={image.alt}
              // width={300}
              // height={300}
              className="rounded-md snap-start object-contain w-auto h-32"
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </DialogTrigger>
      {/* <DialogContent className="flex flex-row gap-2 p-0 w-7xl h-full"> */}
      <DialogContent className="bg-background/20 w-full h-full p-0 border-none items-center justify-center rounded-none flex flex-col gap-4">
        <img
          src={images[currentImage].src.src}
          alt={images[currentImage].alt}
          width={1000}
          height={1000}
          className="relative w-full max-w-full h-auto max-h-[60vh] md:max-w-[90vw] md:max-h-[80vh] p-2 md:p-12 object-contain rounded-lg"
        />
        {images.length > 1 && (
          <div className="w-full flex justify-center mt-2 md:mt-0">
            <div className="flex gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-1.5 max-w-full md:max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-14 h-10 md:w-10 md:h-6 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                    index === currentImage
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  <img
                    src={image.src.src}
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        {/* <div className="flex flex-row gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeftIcon className="size-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRightIcon className="size-6" />
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
