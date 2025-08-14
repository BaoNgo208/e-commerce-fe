type FooterColumnProps = {
  title: string;
  items: { label: React.ReactNode; href?: string }[];
};

export default function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="">
      <h4 className="font-bold mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            {item.href ? (
              <a
                href={item.href}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                {item.label}
              </a>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
