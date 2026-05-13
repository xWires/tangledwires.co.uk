export function PageHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl font-medium">{title}</p>
    </div>
  );
}
