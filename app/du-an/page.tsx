import Link from "next/link";

const DuAnPage = () => {
  const reports = [1,2,3,4,5,6,7];

  return (
    <main className="min-h-screen bg-white/5 p-8">
      <div className="max-w-3xl mx-auto text-neutral-50">
        <h1 className="text-3xl font-bold mb-4">Trang Dự án</h1>

        <p className="mb-4">Tập hợp và trình bày các bài tập đã hoàn thành, bao gồm:</p>

        <ul className="list-disc pl-5 space-y-2 mb-6 text-neutral-200">
          <li>Bài tập 1 - Máy tính và các thiết bị ngoại vi</li>
          <li>Bài tập 2 - Khai thác dữ liệu và thông tin</li>
          <li>Bài tập 3 - Tổng quan về trí tuệ nhân tạo</li>
          <li>Bài tập 4 - Giao tiếp và hợp tác trong môi trường số</li>
          <li>Bài tập 5 - Sáng tạo nội dung số</li>
          <li>Bài tập 6 - An toàn và liêm chính học thuật trong môi trường số</li>
          <li>Bài tập 7 - (nếu có) Các sản phẩm bổ sung</li>
        </ul>

        <p className="mb-3">Tải các báo cáo tuần (đổi tên thành <strong>bao-cao-tuan-1</strong> ... <strong>bao-cao-tuan-7</strong>) — đặt các file vào <code>/public/reports/</code> để liên kết hoạt động.</p>

        <div className="grid grid-cols-1 gap-2">
          {reports.map((n) => (
            <a key={n} href={`/reports/bao-cao-tuan-${n}.docx`} className="block rounded-md bg-neutral-900/70 px-4 py-2 text-white">Tải bao-cao-tuan-{n}</a>
          ))}
        </div>

        <p className="mt-6 text-sm text-neutral-400">Nếu bạn muốn mình di chuyển những file docx vào dự án, upload các file và mình sẽ đặt chúng vào <code>public/reports/</code>.</p>

        <Link href="/" className="mt-6 block text-sm text-neutral-300 underline">Quay về trang chính</Link>
      </div>
    </main>
  );
};

export default DuAnPage;
