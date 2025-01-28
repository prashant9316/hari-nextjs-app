// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Hari Shankar Mishra.
        </p>
        <p className="text-sm">Demo E-commerce Store</p>
      </div>
    </footer>
  );
}
