const SocialIcon = ({ href, icon: Icon, label }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-slate-700
          bg-slate-800
          text-slate-300
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:bg-blue-600
          hover:text-white
        "
      >
        <Icon size={20} />
      </a>
    );
  };
  
  export default SocialIcon;