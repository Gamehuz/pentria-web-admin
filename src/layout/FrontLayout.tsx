import HeaderNav from "@/components/HeaderNav";
import SideNav from "@/components/SideNav";
import { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';

type LayoutProps = {
  children: React.ReactNode,
};

const FrontLayout = ({ children }: LayoutProps) => {
  const [toggle, setToggle] = useState(true)
  const token = getCookie('token')

  useEffect(() => {
    if (token === undefined) {
      window.location.href = '/'
    }
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