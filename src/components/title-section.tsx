import Image from "next/image";

export function TitleSection() {
  return (
    <div className="text-center py-4">
      <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
        GREEN PAKISTAN PROJECT
        <Image className="border" src="/images/pakistan_logo.jpg?height=32&width=48" alt="Pakistan Flag" width={48} height={32} />
      </h1>
      <p className="text-lg text-gray-600">Cooperation between German Importers and Pakistani Producers</p>
    </div>
  );
}
