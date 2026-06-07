import Link from "next/link";

const MainPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black/60 to-black/40 text-neutral-50">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Portfolio cá nhân</h2>
        <nav className="space-x-4">
          <Link href="/gioi-thieu" className="text-sm hover:underline">Giới thiệu</Link>
          <Link href="/du-an" className="text-sm hover:underline">Dự án</Link>
          <Link href="/tong-ket" className="text-sm hover:underline">Tổng kết</Link>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Xin chào — Tôi là [Tên bạn]</h1>
          <p className="text-neutral-200 mb-6">Sinh viên / Sinh sống với đam mê phát triển số. Portfolio này lưu trữ các bài tập và dự án tuần 1–7, bao gồm báo cáo tải về.</p>
          <div className="flex gap-3">
            <Link href="/du-an" className="px-4 py-2 bg-neutral-900/80 rounded text-white">Xem Dự án</Link>
            <Link href="/gioi-thieu" className="px-4 py-2 border border-neutral-600 rounded">Giới thiệu</Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 bg-neutral-700/30 rounded-lg overflow-hidden flex items-center justify-center">
            <img src="/profile.svg" alt="profile" className="object-contain w-full h-full" />
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto p-6 text-sm text-neutral-400">© {new Date().getFullYear()} — Cập nhật nội dung trong <code>app/</code></footer>
    </main>
  );
};

export default MainPage;
