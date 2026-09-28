import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.socialImage.alt;
export const size = { width: site.socialImage.width, height: site.socialImage.height };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"));
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "white", color: "black", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
      {/* The image renderer requires an embedded img rather than next/image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${logo.toString("base64")}`} alt="" width={440} height={280} />
      <div style={{ display: "flex", fontSize: 40 }}>{site.name}</div>
      <div style={{ display: "flex", fontSize: 28 }}>Work in progress</div>
    </div>,
    size,
  );
}
