import { Footer } from "flowbite-react";

export function FooterSite() {
  return (
    <Footer container className="fixed bottom-0 w-full z-50">
      <Footer.Copyright href="#" by="Przemysław Jura" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Links</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
