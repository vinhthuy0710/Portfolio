import Link from "next/link";

const TongKetPage = () => {
  return (
    <main className="min-h-screen bg-white/5 p-8">
      <div className="max-w-3xl mx-auto text-neutral-50">
        <h1 className="text-3xl font-bold mb-4">Trang Tổng kết</h1>

        <ul className="list-disc pl-5 space-y-2 mb-6 text-neutral-200">
          <li>Chia sẻ những trải nghiệm và cảm nhận cá nhân về quá trình thực hiện dự án Portfolio.</li>
          <li>Nêu bật những kiến thức và kỹ năng quan trọng nhất đã học được.</li>
          <li>Trình bày những điểm bạn cảm thấy tâm đắc nhất và những thách thức khi xây dựng Portfolio.</li>
        </ul>

        <Link href="/" className="text-sm text-neutral-300 underline">Quay về trang chính</Link>
      </div>
    </main>
  );
};

export default TongKetPage;
