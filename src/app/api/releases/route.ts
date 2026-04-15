import { readdirSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

interface Release {
  date: string;
  title: string;
  image: string;
  url: string;
}

export async function GET() {
  try {
    const releasesDir = join(process.cwd(), "public/releases");
    const files = readdirSync(releasesDir).filter((file) =>
      /^\d{6}_.*_.*\.(png|jpg|jpeg|webp)$/i.test(file),
    );

    const releases: Release[] = files.map((file) => {
      // ファイル名を拡張子なしで処理
      const nameWithoutExt = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
      // YYMMDD_url_title の形式で分割
      const [dateStr, urlSlug, ...titleParts] = nameWithoutExt.split("_");
      const title = titleParts.join("_");

      return {
        date: dateStr,
        title,
        image: `/releases/${file}`,
        url: `https://funsoundcreate.bandcamp.com/album/${urlSlug}`,
      };
    });

    // 日付で降順ソート（新しい順）
    releases.sort((a, b) => parseInt(b.date) - parseInt(a.date));

    return NextResponse.json(releases);
  } catch (error) {
    console.error("Error reading releases:", error);
    return NextResponse.json([], { status: 500 });
  }
}
