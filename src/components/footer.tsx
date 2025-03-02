import Link from "next/link";

const HANDLE = "@kazzyfrog";
const DEVELOPER_LINK = "#";

function Footer() {
  return (
    <footer className="text-center py-8">
      <p className="text-gray-500">
        Created by{" "}
        <Link
          className="text-blue-500"
          href={DEVELOPER_LINK}
          target="_blank"
          rel="noreferrer"
        >
          {HANDLE}
        </Link>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
