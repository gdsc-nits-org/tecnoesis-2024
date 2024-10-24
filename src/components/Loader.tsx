const Loader: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('assets/Landing/starry.gif')" }}>
      <div className="relative w-32 h-32">
        <div className="absolute w-full h-full rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"></div>
        <div className="absolute w-32 h-32 animate-rotate">
          <div className="absolute w-16 h-32 overflow-hidden left-0 top-0">
            <div className="w-32 h-32 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]"></div>
          </div>
        </div>
        <img 
          src="assets/NavBarMobile/tecnoStencilWhite.svg" 
          alt="Tecno Logo" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
        />
      </div>
    </div>
  );
};

export default Loader;