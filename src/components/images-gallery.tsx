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
      <DialogTrigger className="w-full h-full cursor-pointer block group-hover:opacity-90 transition-opacity">
        {images.length > 0 && (
          <img
            src={images[0].src.src}
            alt={images[0].alt}
            className="w-full h-auto object-cover aspect-video rounded-md"
            onClick={() => setCurrentImage(0)}
          />
        )}
      </DialogTrigger>
      <DialogContent className="bg-background/20 w-full h-full p-0 border-none items-center justify-center rounded-none flex flex-col gap-4">
        <div className="relative w-full max-w-full max-h-[85vh] md:max-w-[90vw] md:max-h-[90vh] p-4 md:p-12 overflow-hidden rounded-xl flex items-center justify-center">
          <img
            src={images[currentImage].src.src}
            alt={images[currentImage].alt}
            width={1000}
            height={1000}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl"
          />
        </div>
        {images.length > 1 && (
          <div className="w-full flex justify-center">
            <div className="flex gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-1 max-w-full md:max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-video h-10 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
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
