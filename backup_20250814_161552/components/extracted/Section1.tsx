
export default function Section1() {
  const html = `<style data-framer-html-style="">html body { background: rgb(0, 0, 0); }</style>`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
