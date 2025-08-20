
import Section1 from '../components/extracted/Section1';
import Section2 from '../components/extracted/Section2';
import Section3 from '../components/extracted/Section3';

export default function Page() {
  return (
    <main>
      <div className="mirror-root">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </main>
  );
}
