import type React from "react";

export interface UploadZoneProps {
  label: string;
  file: File | null;
  onClear: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}