const Loader: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 -z-50 flex min-h-screen w-screen items-center justify-center overflow-hidden bg-[url('/assets/Landing/starry.gif')]">
      <div className="relative h-32 w-32">
        <div className="absolute h-full w-full rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"></div>
        <div className="animate-rotate absolute h-32 w-32">
          <div className="absolute left-0 top-0 h-32 w-16 overflow-hidden">
            <div className="h-32 w-32 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]"></div>
          </div>
        </div>
        <img
          src="/assets/NavbarMobile/tecnoStencilWhite.png"
          alt="Tecno Logo"
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </div>
    </div>
  );
};

export default Loader;
