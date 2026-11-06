import { contact } from "@/lib/flavours";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Fruitzy-Joy. La fraîcheur au naturel.</p>
        <p>{contact.location}</p>
      </div>
    </footer>
  );
};

export default Footer;
