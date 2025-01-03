function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center p-4 bg-slate-400">
      <div className="flex items-center justify-between w-full ">
        <img src="/images/PomoinWithTextLogo.png" alt="pomoin-logo" />
        <nav>
          <a href="/features">Features</a>
          <a href="/htu">How To Use</a>
          <a href="/price">Price</a>
          <a href="/login">Log in</a>
        </nav>
      </div>
    </header>
  );
}

export default HomeHeader;
