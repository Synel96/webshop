import "./Layout.css";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex max-w-225 mx-auto">
      <Sidebar>
          <Logo />
          <Link href="/">Főoldal</Link>
          <Link href="/products">Termékek</Link>
          <Link href="/cart">Kosár 🛒</Link>
          <Link href="/account">Fiókom</Link>
        </Sidebar>
        <Content>{children}</Content>
      </div>
    </QueryClientProvider>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sidebar"
      className="p-5 shrink-0 flex flex-col leading-[1.8em] border-r-2 border-[#eee] font-sans"
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        className="p-5 pb-12.5 min-h-screen font-sans"
      >
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="mt-5 mb-2.5">
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
