import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
};

export default function Seo({ title, description }: SeoProps) {
  const siteName = "한별파크";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description ?? "한별파크 공식 홈페이지. 스크린골프와 컨테이너 스크린파크 전문";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />

      {/* Canonical */}
      <link rel="canonical" href="https://onestarpark.com" />
    </Head>
  );
}
