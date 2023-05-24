import HeaderNav from "@/components/HeaderNav";
import SideNav from "@/components/SideNav";
import { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode,
};

const FrontLayout = ({ children }: LayoutProps) => {
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setToggle(false)
    }
  }, [])

  return (
    <main>
      <HeaderNav setToggle={() => setToggle(!toggle)} />
      <div className="flex">
        <SideNav toggle={toggle} />
        {children}
      </div>
    </main>
  );
};

export default FrontLayout;