import "../styles/footer.scss";
export default function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">
          © {getCurrentYear()} | React Dashboard. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
