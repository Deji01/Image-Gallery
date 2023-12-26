"use client"

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  return (
    <div>
      <BlurImage />
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function BlurImage() {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href="#" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src="https://bit.ly/placeholder-img"
          layout="fill"
          objectFit="cover"
          className={cn("group-hover:opacity-75", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")}
          onLoad={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Ayodeji Yekeen</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">Deji</p>
    </a>
  );
}
