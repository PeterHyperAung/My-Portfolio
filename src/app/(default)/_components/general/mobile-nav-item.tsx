type MobileNavItemProps = {
  href: string;
  children: React.ReactNode;
};
import Link from "next/link";

const MobileNavItem = ({ href, children }: MobileNavItemProps) => {
  return (
    <Link
      href={href}
      className="mx-3 p-3 rounded-md shadow-sm border flex justify-center items-center gap-2 my-4"
    >
      {children}
    </Link>
  );
};

export default MobileNavItem;
