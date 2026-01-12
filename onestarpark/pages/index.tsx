import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="스크린파크골프" description="스크린골프 및 컨테이너형 스크린파크 전문 한별파크" />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">한별파크 스크린파크골프</h1>
            <p className="text-lg text-gray-300">프리미엄 스크린골프 & 컨테이너형 스크린파크 솔루션</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">스크린골프</h3>
              <p>최신 장비 기반 실내 골프 시스템</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">컨테이너 파크</h3>
              <p>설치형 스크린파크 구축</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">운영 컨설팅</h3>
              <p>매장 운영 노하우 제공</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
