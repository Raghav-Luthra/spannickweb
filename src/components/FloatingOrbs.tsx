export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float-fast"></div>
      <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gold/8 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-gold/6 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
