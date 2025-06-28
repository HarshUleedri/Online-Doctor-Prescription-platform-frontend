const Footer = () => {
  return (
    <div>
      <footer className="bg-muted py-4 h-44 flex items-center justify-center">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MediConnect. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Made with ❤️ by <span className="font-bold">Harsh Uleedri.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
