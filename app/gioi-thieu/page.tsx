import Link from "next/link";

const GioiThieuPage = () => {
  return (
    <main className="min-h-screen bg-white/5 p-8">
      <div className="max-w-3xl mx-auto text-neutral-50">
        <h1 className="text-3xl font-bold mb-4">Trang Giới thiệu</h1>

        <ul className="list-disc pl-5 space-y-2 mb-6 text-neutral-200">
          <li>Giới thiệu ngắn gọn về bản thân (họ tên, ngành học, sở thích).</li>
          <li>Chia sẻ mục tiêu học tập và định hướng phát triển cá nhân của bạn.</li>
          <li>Ví dụ mục tiêu của Portfolio: "Thể hiện các kỹ năng số đã học", "Lưu trữ sản phẩm cá nhân để dễ dàng truy cập và chia sẻ".</li>
        </ul>

        <p className="mb-6">Bạn có thể cập nhật nội dung này trong file <code>app/gioi-thieu/page.tsx</code>.</p>

        <Link href="/" className="text-sm text-neutral-300 underline">Quay về trang chính</Link>
      </div>
    </main>
  );
};

export default GioiThieuPage;
