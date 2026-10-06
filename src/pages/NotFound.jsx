import { Link } from "react-router-dom";
import { PageHero, Section, usePageMeta } from "../components/ui.jsx";

export default function NotFound() {
  usePageMeta("Page not found | Thenari Theertham");
  return (
    <>
      <PageHero title="Page not found" sub="This page does not exist or has moved." />
      <Section>
        <p className="btn-row center" style={{ justifyContent: "center" }}>
          <Link className="btn btn-maroon" to="/">Return home</Link>
          <Link className="btn btn-line" to="/visit">Plan your visit</Link>
        </p>
      </Section>
    </>
  );
}
