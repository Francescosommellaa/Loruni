import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.socialImage.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"));
  const logoSource = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          background: "#ffffff",
          color: "#171717",
          fontSize: 40,
        }}
      >
        {/* ImageResponse renders plain image elements, not next/image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSource} alt="Loruni" width={440} height={280} />
        <div>Sito in preparazione</div>
      </div>
    ),
    size,
  );
}
