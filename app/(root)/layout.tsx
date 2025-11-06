const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Root Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
