import { useCallback, useRef } from "react";
import { downloadBlob } from "../utils";

interface UseDownloadProps{
  format: string
}

export const useDownload = ({ format }: UseDownloadProps) => {

  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = useCallback(() => {
    if (format === "svg" && svgRef.current) {
      const svgBlob = new Blob([svgRef.current.outerHTML], { type: "image/svg+xml" });
      downloadBlob(svgBlob, "qrcode.svg");
    } else {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const mime = `image/${format}`;
      canvas.toBlob((blob) => blob && downloadBlob(blob, `qrcode.${format}`), mime, 0.95);}
  }, [format]);

  return { canvasRef,
    svgRef,
    handleDownload };
};

