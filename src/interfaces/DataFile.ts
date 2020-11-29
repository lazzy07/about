import { ICON_TYPES } from "./IconTypes";

export interface DataFile {
  name: string;
  icons: ICON_TYPES[];
  image: string;
  isVideo: boolean;
  autoPlay?: boolean;
  //preview text
  preview: string;
  //Text displayed in the project.tsx
  description: string;
  previewImages: string[];
  links: { title: string; url: string }[];
}
