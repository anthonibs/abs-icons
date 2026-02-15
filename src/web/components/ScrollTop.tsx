import { ArrowUpOutlineIcon } from "@anthonibs/abs-icons";

const ScrollTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={handleScrollTop}
        aria-label="Ir para o topo"
        title="Ir para o topo"
        className="w-10 h-10 rounded-2xl bg-abs-brand-primary text-white cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 animate-pulse shadow-[0_0_18px_rgba(250,204,21,0.25)] "
      >
        <ArrowUpOutlineIcon />
      </button>
    </div>
  );
};

export default ScrollTop;
