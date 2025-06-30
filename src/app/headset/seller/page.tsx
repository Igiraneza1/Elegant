const Seller = () => {
  const Items = [
    { label: "Shop Collection", href: "#" },
    { label: "Heracleand", href: "#" },
    { label: "Accessories", href: "#" }
  ];

  return (
    <nav className="flex gap-6">
      {Items.map((item, index) => (
        <a 
          key={index}
          href={item.href}
          className="text-gray-800 hover:text-blue-600 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Seller;