const FooterColumn = ({ title, links }) => {
    return (
      <div>
        <h3 className="mb-6 text-lg font-bold text-white">{title}</h3>
  
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-400 transition duration-300 hover:pl-2 hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FooterColumn;